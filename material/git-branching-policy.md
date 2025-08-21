# 🌱 Git Branching Policy

A **Git branching policy** is a short set of rules about how we use branches in Git.  
It tells you what’s required for this course, and what habits will make your life easier.  

This is **not** a full manual on how to use Git.  
For a broader introduction and hands-on commands, go to [git.md](git.md).  

---

- `main` is your stable branch that deploys to production. 🚀

That's it. That's the course branching policy. You can push all of your changes directly to `main` if you want. You can even *force push* directly to `main` if you want!  

## ⚠️ Not recommended

- Pushing changes directly to `main` is not recommended.  
- Force pushing changes to `main` is especially not recommended.  

They both can lead to darkness and despair. 🕳️🐉

## 💡 Recommended practices

That said, here are some practices that will make your life easier, and that of your project evaluators.

### 🌿 Feature branches
When you want to add a feature to your code, create a branch from `main`.  
This is called a **feature branch**.  

`git checkout main`  
`git pull origin main`  
`git checkout -b search-form`  

- Name it with a short slug that describes the feature: `search-form`, `auth-flow`, `score-tracking`.  
- Keep all commits for that feature inside this branch.  
  - `git checkout -b branch-name`  

When the feature is ready, merge it back into `main`.  

⚠️  The direct way (works fine):  
`git checkout main`  
`git pull origin main`  
`git merge search-form`  
`git push origin main`  

✅️ But a better way is to open a Pull Request (PR) on GitHub.  
- You can review the changes before they land in `main`.  
- You can be sure that your automatic tests all pass.  
- You can view and use the new feature on Netlify’s preview deploys before it’s merged.  
- PRs also make it easy to **“squash and merge”**, giving you one tidy commit that represents the whole feature.  

### 🔀 Pull Requests (PRs)
When your branch is ready (or at least testable), push it and open a PR on GitHub:

`git push -u origin search-form`  

You can open a PR in two ways:  
- On GitHub.com, click **Compare & pull request**.  
- Or, from the command line with the GitHub CLI:  
  `gh pr create`  

Even if you are working solo, a PR gives you:  
- 📜 A clear summary of the change  
- 🧐 A chance to describe the problem solved and how you solved it  
- 🧹 A tidy place to review your own work (or get a quick review from AI or a peer)  

When ready, merge (or, better, squash) the PR into `main`.  
You can do this on GitHub.com, or from the command line with the GitHub CLI:  

`gh pr merge --squash` 

Once the PR is merged, make your life easier by deleting the feature branch.  

Delete it locally:  
`git branch -d search-form`  

Delete it on GitHub:  
`git push origin --delete search-form`

### ✍️ Commits
Make your commits small and clear.  

`git add .`  
`git commit -m "Add search form component"`  
`git push`  

- Each commit should show one small, meaningful step forward.  
- Every programming session should have many commits — not just one at the end.  
- Write commit messages that say *what* you did and *why*.  
- For a style guide on how to have a beautiful commit history filled with joy and sunshine, see [How to Write a Git Commit Message](https://cbea.ms/git-commit/). 🌞🌸  

### 🗑️ About `master`
Some tools still create a `master` branch by default. Having both a `master` and a `main` will lead to confusion.  
So, if it appears in your repo, delete it and use `main`.  

`git branch -d master`  
`git push origin --delete master`  

If there is code in `master` that you actually need, first merge it into `main`:  

`git checkout main`  
`git pull origin main`  
`git merge master`  
`git push origin main`  

Once you’re sure everything is in `main`, delete `master` to avoid future confusion.

