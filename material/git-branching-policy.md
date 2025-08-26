# 🌱 Git Branching Policy

A **Git branching policy** is a set of rules about how to use branches in Git. It helps you take bold risks in feature branches while keeping the `main` branch calm, clean, and always ready to deploy.

This is **not** a full Git tutorial. For commands and basics, see [git.md](git.md).

---

## Required Course Policy

- `main` is your production branch. It must always contain the latest working source code and deploy automatically to Netlify. 🚀

That’s the only hard rule.

You **will be evaluated** on the clarity of your Git history and your branching policy. A messy or inconsistent approach makes it hard to see your progress. A clear, consistent policy highlights it.

---

## Recommended Strategy

If you don’t have much experience with Git, use the **feature branch strategy**:

1. Create a new branch from `main` whenever you start a feature.  

   ```bash  
   git checkout main  
   git pull origin main  
   git checkout -b search-form  
   ```  

2. Do all your work for that feature in this branch.  
3. When it’s ready, merge it back into `main`.

That’s it. This simple approach works well for solo developers and small teams.

---

## Strongly Recommended Practices

### 🌿 Feature branches

- Name branches with short, descriptive slugs: `search-form`, `auth-flow`, `score-tracking`.
- Keep commits for that feature inside the branch.
- Merge back into `main` when ready.

⚠️ Quick way (fine for small projects):  

```bash  
git checkout main  
git pull origin main  
git merge search-form  
git push origin main  
```  

✅ Better way: Open a Pull Request (PR) on GitHub.  

- Lets you and others review changes before merging.  
- Runs tests before code lands in `main`.  
- Provides Netlify preview deploys.  
- Supports **squash and merge** for a clean history.  

### 🔀 Pull Requests (PRs)

- Push your feature branch:  

  ```bash  
  git push -u origin search-form  
  ```  

- Open a PR on GitHub (via web or `gh pr create`).  
- Use PRs even if you’re working alone — they give you:  
  - 📜 A summary of changes  
  - 🧐 A place to explain the problem and solution  
  - 🧹 A tidy review step  

When ready, squash and merge into `main`. Delete the branch afterward:  

```bash  
git branch -d search-form  
git push origin --delete search-form  
```  

Pro-tip: You can open a PR any time, not just when your feature is ready!

### ✍️ Commits

- Keep commits small and clear.  
- Every coding session should have many commits, not just one.  
- Messages should say *what* changed and *why*.  
- See [How to Write a Git Commit Message](https://cbea.ms/git-commit/) for style guidance.  

### 🗑️ About `master`

Some tools still create a `master` branch. Having both `master` and `main` will cause confusion.

- If `master` appears, delete it:  

  ```bash  
  git branch -d master  
  git push origin --delete master  
  ```  

- If `master` has needed code, first merge it into `main`, then delete it:  

  ```bash  
  git checkout main  
  git pull origin main  
  git merge master  
  git push origin main  
  ```  

---

## Summary

- `main` must always deploy to production.  
- You will be evaluated on having a clear branching policy.  
- If unsure, use featur
