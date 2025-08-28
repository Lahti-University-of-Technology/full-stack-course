# Secrets Policy and Guidelines

Protect credentials at all times. Secrets include API keys, database passwords, JWT secrets, OAuth client secrets, and any tokens that grant access to systems or data.

This is a rough guideline.

## Where secrets live

- **`.env` files** for local development only
  - Never commit real secrets
  - Add `.env` to `.gitignore`
  - Use `.env` for developer machine values
- **Netlify environment variables** for deployed builds and serverless functions
  - Set in Netlify UI under Site settings → Build & deploy → Environment
  - Different values for production vs preview branches
- **Never** put secrets in client code, HTML, or `PUBLIC_` variables

## SvelteKit specifics

- Variables prefixed with `PUBLIC_` are exposed to the browser. They are **not** secret.
- Keep private vars unprefixed. Access them only in server code or Netlify Functions.

## Files to provide

- **`example.env`** checked into the repo. Document keys, use placeholder values.
- **`.env`** kept locally. Not committed.

### `example.env`

```.env
# Copy to .env and fill with real values

# Do not commit .env
# Server only

DATABASE_URL="postgres://user:password@host:5432/dbname"
MONGODB_URI="mongodb+srv://user:password@cluster.mongodb.net/db"
SUPABASE_URL="<https://your-project.supabase.co>"
SUPABASE_SERVICE_ROLE_KEY="service-role-key"
JWT_SECRET="change-me"
NETLIFY_SITE_ID="your-site-id"

# Client-safe config uses PUBLIC_ if needed

PUBLIC_SENTRY_DSN=""
```

### `.gitignore` excerpt

```.gitignore
# Environment

.env
.env.*
!.env.example
```

### `netlify.toml` example

```toml
[build]
  command = "npm run build"
  publish = "build"
  node_version = "22"

[build.environment]

# Netlify injects these at build and in Functions

# DATABASE_URL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, JWT_SECRET

[context.production.environment]
  NODE_ENV = "production"

[context.deploy-preview.environment]
  NODE_ENV = "development"
```

## Netlify setup

1. Create the site on Netlify and connect the GitHub repo.
2. In Site settings → Environment, add variables exactly as named in `example.env`.
3. Do not store secrets in `netlify.toml`. Prefer the UI or Netlify CLI to set values.
4. Use different values for production and previews if appropriate.
5. Re-deploy after any secret change.

## Database guidance

- **Supabase**
  - Keep **Row Level Security ON**
  - Browser uses only the **anon** public key
  - Keep **service role key** only in Netlify Functions
- **MongoDB Atlas**
  - Keep `MONGODB_URI` only in Netlify
  - Restrict IP access if possible
  - Create least-privilege users for each environment

## Good practices

- Separate secrets per environment: development, preview, production
- Rotate high value secrets at least once during the term
- Use least privilege. Do not give write access where read suffices
- Avoid embedding secrets in build artifacts, logs, or analytics
- Do not paste secrets into issues, PRs, or screenshots

## Validating you are safe

- Search the repo history for common patterns before first push:
  - `git log -p | grep -i -E "api[_-]?key|secret|password|token|mongodb\+srv|postgres://"`
- Optional scanners
  - gitleaks or trufflehog on local repo
- Confirm Netlify Functions access secrets at runtime and never return them to the client

## If you accidentally commit `.env` or any secret

Act immediately. Time matters.

1. **Revoke or rotate the exposed secret**
   - Regenerate API keys in the provider dashboard
   - Change database user password or rotate credentials
   - Invalidate JWT secrets by changing `JWT_SECRET`
2. **Purge the secret from Git history**
   - Use `git filter-repo` (preferred) or BFG Repo-Cleaner

   - Example with `git filter-repo`

     ```bash
     pipx install git-filter-repo
     git filter-repo --invert-paths --path .env
     git push --force
     ```

   - If the secret appears in other files, remove those blobs as well
3. **Invalidate caches**
   - Delete any leaked build artifacts or logs that contain the secret
   - Trigger a fresh Netlify deploy after rotation
4. **Update environment variables**
   - Put the **new** values into Netlify
   - Update teammates if this were a team. For this course, update your own `.env`
5. **Document the incident** in your README or a `SECURITY.md` note
   - Date, what leaked, actions taken, current status
6. **Notify the instructor** if production data could be at risk

Once leaked, a secret must be treated as compromised even if you remove it from history. Rotation is required.

## Quick checklist

- [ ] `.env` exists locally and is in `.gitignore`
- [ ] `example.env` is committed and matches required keys
- [ ] Netlify environment variables set for production and previews
- [ ] No secrets in client code or in `PUBLIC_` vars
- [ ] Service role keys used only on the server
- [ ] One dry run with a secret rotation documented
