# Setup Development Platform — Full Walkthrough

This walkthrough gets you from zero to a working continuous deployment pipeline:
local project → GitHub repo → automatic Netlify deploys. It also prepares you for SvelteKit.

We will all use the same stack for this course so that everyone moves forward together. If you already have deep experience with this exact stack (especially with TypeScript), or if your intended project truly cannot be built with it, let’s talk. We can consider exceptions.

In this assignment you will:

- Create a public GitHub repository named `fsd-project-2025`
- Set up local development with VS Code and GitHub CLI
- Install Node using a Node version manager (nvm) and use Node v22
- Add TypeScript tooling (optional for beginners)
- Verify the pipeline with a simple static site
- Initialize a SvelteKit project and deploy it
- Edit the SvelteKit page to show `Hello World` and verify the deploy

If you have experience setting up this stack, you can skip down to the checklist in Section 13.

## Why this stack?

In this course, everyone will use the same stack:  
**GitHub + Netlify + Node v22 + SvelteKit (+ TypeScript or JavaScript)**  

This ensures that:

- Fellow students can critique and evaluate your project.
- The stack is relatively easy to set up and avoids unnecessary complications
- It is flexible enough to support nearly any full stack project
- It is approachable for beginners, but still new and challenging for more experienced developers  
- Both frontend and backend uses the same language
- **GitHub** is the standard for version control in industry.
- **Netlify** is a modern deployment platform, conceptually similar to Vercel, AWS Amplify, or other cloud providers.
- **Node v22** is current and widely used in production.
- **SvelteKit** is modern and encourages students to think in terms of components, state, and reactive UI. The concepts transfer directly to React, Vue, Angular, etc.
- **TypeScript** is optional for beginners but widely used in industry.

---

## 0. Accounts and tools you will need

Install the following programs, and sign up for the following services:

- **Node Version Manager (NVM)** is a tool that lets you install and switch between different versions of Node.js on your computer.
  This ensures that your development environment stays consistent, even if projects (or the course) require different Node versions. For this course we will use **Node v22**, and NVM makes installing and managing that version simple. Find here the installation instructions for your platform.
  - **Windows**: <https://github.com/coreybutler/nvm-windows>  
  - **macOS / Linux**: <https://github.com/nvm-sh/nvm#installing-and-updating>

- Install Node v22 with NVM

  After you have NVM installed, run:

  ```sh
  nvm install 22
  nvm use 22
  node -v   # should print something like v22.x.x
  npm -v    # check npm is installed too
  ```

  This ensures your system always starts with Node v22 unless you explicitly change versions.

  ### `.gitignore` file

  Add a text file named (exactly) `.gitignore` in the root directory of your project, and add this line:

  ```text
  node_modules
  ```

This makes sure that Git does not try to track the enormous `node_modules` folder, which is automatically generated later.

- **Visual Studio Code** <https://code.visualstudio.com/download>  
  Visual Studio Code (VS Code) is a free, lightweight, and widely used Integrated Development Environment (IDE). It supports many languages, has built-in Git and GitHub integration, and a huge ecosystem of extensions (formatters, linters, debuggers, themes). We will use VS Code in this course because it is consistent across operating systems and lowers setup friction.

  - *Note:* If you are already experienced and strongly prefer another IDE (e.g. JetBrains, Vim, Emacs), you may use it. But you must still be comfortable with:
    - **git**: version control commands  
    - **GitHub**: pushing and pulling repositories  
    - **Terminal**: running Node, npm, and project build commands  

- **Git** installed on your machine: <https://code.visualstudio.com/docs/sourcecontrol/intro-to-git>  
  [Git](/material/git.md) is the version control system we use to track changes in your code.
  It records your project history, makes collaboration possible, and is the foundation for GitHub.

  - **Note: `master` vs `main` branch**
    For consistency, in this course we will all use `main` as the single source of truth and the branch from which our projects are deployed. For historical reasons you may see references to a `master` branch in older tutorials or tools. In that situation, use `main` instead of `master`. If both `main` and `master` exist in your repository, you already have an error. Commits may land in the wrong place and deployments may fail. Delete `master` if it shows up in your repository.

- **GitHub account**: <https://github.com>  
  GitHub hosts your Git repositories online and integrates with Netlify for automatic deployments.

  - **GitHub CLI**: <https://cli.github.com/manual>  
    The GitHub Command Line Interface (CLI) lets you interact with GitHub directly from your terminal: creating repos, making pull requests, managing issues, etc.

- **Netlify account**: <https://www.netlify.com>  
  Netlify hosts your deployed project and connects automatically to your GitHub repository.
  Every time you push changes to your main branch, Netlify will rebuild and redeploy your site.
  - Sign up or log in with your GitHub authentication.
  - **Netlify CLI**: <https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli>  
    The Netlify CLI lets you test deployments locally, run previews, and debug deployment issues.

I weakly recommend Linux if you have the option, but by all means use Windows or MacOS! If you are on Windows, you can either use PowerShell or Windows Subsystem for Linux. Pick one and stay consistent.

---

## 1. Create the GitHub repository

GitHub will hold the source code for your course project. Netlify will listen to changes on your main branch and deploy your project automatically.

1. Sign in to GitHub.
2. Create a new public repository named `fsd-project-2025`. Do not add any files yet.

You can also create it from the terminal with GitHub CLI:

```sh
gh auth login

# Follow the prompts. Choose GitHub.com, HTTPS, and authenticate

gh repo create fsd-project-2025 --public --confirm
```

This makes the repository on GitHub and associates your local directory when you clone it.

---

## 2. Clone the repository and open in VS Code

Why: You need a local workspace that is connected to the remote repo.

```sh

# Choose a parent folder for your projects, then

git clone <https://github.com/><your-username>/fsd-project-2025.git
cd fsd-project-2025

# Open in VS Code

code
```

Or open VS Code normally, `open folder` and navigate to the parent folder for your project.

---

## 3. Install a Node version manager and Node v22

Why: Different projects need different Node versions. A version manager lets you switch easily. We will use Node 22 for this course.

### macOS or Linux with `nvm`

```sh

# Install nvm

# Always read what the install script does. This is the official installer

curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh> | bash

# Load nvm into your shell session

export NVM_DIR="$HOME/.nvm"

# shellcheck disable=SC1091

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Install Node 22 and set it as default

nvm install 22
nvm use 22
nvm alias default 22

node -v   # should show v22.x.x
npm -v
```

### Windows options

- **WSL**: Open Ubuntu in WSL and follow the Linux steps with `nvm`.
- **nvm-windows**: Install from the official releases page, then:

```powershell
nvm install 22
nvm use 22
node -v
npm -v
```

---

## 4. Optional: TypeScript tooling

TypeScript is a **superset of JavaScript** that adds static typing.
It compiles down to plain JavaScript, so it runs anywhere JavaScript runs.
TypeScript helps catch errors earlier and makes large or complex projects easier to manage.

It is **optional** in this course, especially if you are new to programming, but recommended if:  

- You are already an experienced programmer and plan an ambitious project  
- You are experienced with JavaScript and want an extra challenge  
- You value type safety and stricter checks in your code  

SvelteKit has **built-in support for TypeScript**. Later, when you initialize your project (`npm create svelte@latest`), choose the TypeScript option in the prompts.

```sh
npm install -g typescript
tsc -v
```

### JavaScript vs. TypeScript examples

**JavaScript (no types):**

```js
function add(a, b) {
  return a + b;
}
```

**TypeScript (typed parameters and return value):**

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Here, TypeScript will prevent you from accidentally calling `add("hello", 5)` because the parameters must be numbers.

---

## 5. First deploy check with a simple static page

Why: Before adding frameworks, verify the GitHub → Netlify automatic deploy loop works. This isolates problems early.

1. Inside your project directory (in which you cloned your repo), create a `build` directory and a simple `index.html`.

```sh
mkdir -p build
```

Create a new file named `index.html` and paste therein:

```html
  <h1>Hello World! My name is YOUR_NAME_HERE!</h1>
```

2. Commit and push.

```sh
git add .
git commit -m "Initial build folder with Hello World"
git push origin main
```

---

## 6. Create and connect your site on Netlify

Why: Netlify will watch your repository. On every push to main, it will build and publish. For a static folder, it just publishes that folder.

1. Sign up or log in to Netlify with GitHub. Grant access so Netlify can see your repo.
2. Add a new project. Choose **Import an existing project**. Choose **Deploy with GitHub**. Select `fsd-project-2025`.
3. For the first check we are not building anything. Set the **Publish directory** to `build`. Leave build command empty.
4. Deploy. Netlify will give you a site URL such as `https://<random-name>.netlify.app`.
5. Visit the URL. You should see the Hello World page with your name.

If it does not show your page, check the deploy logs in Netlify. Most common issues are wrong publish directory, wrong branch, or the repo was private.

---

## 7. Install Netlify CLI

Why: Netlify CLI lets you run the site locally with Netlify context, preview deploys, and debug.

```sh
npm install -g netlify-cli
netlify --version
```

You can log in from the CLI when needed:

```sh
netlify login
```

---

## 8. Initialize a SvelteKit project

Why: Now that the pipeline works, switch from a static test page to a real application framework.

From the root of your repo:

```sh

# Scaffold SvelteKit

# Pick "Skeleton project" for minimal setup, or default if you prefer

npm create svelte@latest .

# Follow the prompts

# - TypeScript: choose Yes (beginners choose No)

# - ESLint, Prettier: recommended

# - Playwright: optional, but recommended

npm install
npm run dev
```

Visit the local dev URL that Svelte prints. Confirm the starter page renders.

---

## 9. Prepare SvelteKit for Netlify deployment

For Netlify hosting, use the official Netlify adapter.

1. Install the adapter.

```sh
npm install -D @sveltejs/adapter-netlify
```

2. Configure `svelte.config.js` to use it.

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  }
}
```

3. Build locally and verify that the project compiles.

```sh
npm run build
```

---

## 10. Push SvelteKit changes and verify Netlify deploy

Why: This confirms the Netlify site now serves the SvelteKit app.

```sh
git add .
git commit -m "Add SvelteKit with adapter-netlify and initial build"
git push origin main
```

Netlify should detect the push, run the build, and publish the site.  
Check the Netlify deploy logs. Then load your site URL. You should now see the SvelteKit starter page.

---

## 11. Change the SvelteKit page to say `Hello World`

Why: A small change verifies that edits in your local code propagate through GitHub to Netlify.

Edit `src/routes/+page.svelte`:

```svelte
<script>
  // You can leave this empty for now
</script>

<h1>Hello World</h1>
<p>My name is *Your Name*. Welcome to my SvelteKit site.</p>
```

Commit and push:

```sh
git add .
git commit -m "Change homepage to Hello World"
git push origin main
```

Wait for Netlify to redeploy and reload your site URL. You should see the new text.

---

## 12. Optional additions

- **TypeScript strictness**: turn on `strict` in `tsconfig.json`.
- **Prettier and ESLint**: run `npm run lint` and `npm run format` before commits.
- **Netlify CLI preview**: run `netlify dev` to emulate Netlify locally.

---

## 13. Checklist

Use this list to confirm you have a complete working setup:

- [ ] GitHub account created
- [ ] Public repository named `fsd-project-2025` exists on GitHub
- [ ] Repository cloned locally and opened in VS Code
- [ ] `.gitignore` file exists in project root with `node_modules` listed
- [ ] Git is installed locally, default branch is `main`
- [ ] Node Version Manager installed (`nvm` or nvm-windows)
- [ ] Node v22 installed and selected (`node -v` shows v22.x.x)
- [ ] (Optional) TypeScript installed (`tsc -v` works)
- [ ] Netlify account created and linked with GitHub
- [ ] Simple static `Hello World` page deployed successfully on Netlify
- [ ] Netlify CLI installed and working (`netlify --version` shows)
- [ ] SvelteKit project initialized in the repo
- [ ] SvelteKit configured with `@sveltejs/adapter-netlify`
- [ ] `npm run build` produces output successfully
- [ ] Netlify deploy succeeds and shows the SvelteKit starter page
- [ ] Homepage edited to say `Hello World` and redeployed successfully

---

## 14. Submit your links

- Repository URL on GitHub for `fsd-project-2025`
- Netlify deployment URL

Submit both in Moodle.

---

## What each part is doing and why it matters

- **GitHub repository**: This is the authoritative history of your project. Commits show steady progress. Netlify uses this as its input.
- **Local clone and VS Code**: This is where you actually write code. Changes here flow to GitHub with commits and pushes.
- **Node version manager with Node v22**: Keeps your environment consistent across machines and over time. Avoids version drift.
- **TypeScript**: Optionally provides types for better correctness and maintainability.
- **Simple static page first**: Proves your pipeline works before adding a framework. This reduces confusion when debugging.
- **Netlify site connected to GitHub**: Enables continuous deployment. Every push to main triggers a deploy.
- **SvelteKit with adapter-netlify**: Produces optimized output for Netlify, with support for server-side rendering and functions.
- **Edit and redeploy**: Confirms the loop is working end to end. You should see changes live after each push.

If anything breaks, read the Netlify deploy logs, check your branch, confirm the publish directory, and verify that the repository is public and accessible.
