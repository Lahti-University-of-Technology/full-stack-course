# Git

Git is a program that runs on your computer and tracks changes to your source code. It is a type of *version control*. We use it in this course extensively, because it is an industry-standard way of organizing and maintaining source code.

## GitHub

Think of GitHub as social media for projects that use git. But GitHub is *not* Git, nor does it own or create Git. GitHub is a service that hosts repositories online, provides collaboration tools, and integrates with deployment services.

## Local versus Remote

Source code projects are held in *repositories*. Your source code is written *locally* and saved in your *local Git repository*. At some point, it is synced with your *remote repository* “on the cloud somewhere” — in this course, that means GitHub.

Keeping your remote repository up-to-date is essential. A working rule: if it isn’t on GitHub, it doesn’t exist.

## What you should know

You are responsible for ensuring that GitHub always contains the latest changes to your source code. As soon as possible, learn how to:

- [ ] Add files to Git
- [ ] Commit changes with a message
- [ ] Push changes to GitHub

You don’t need to be a Git expert, but you must be competent enough that your project history is always complete and transparent. When you know how to do that, then learn about how to use *branches*.

## Resources

There will not be many explicit lessons on Git itself, but every programming seminar will use Git. If you need more help:

- [Beej's Guide to Git](https://beej.us/guide/bggit/html/)

- [Git Guides (github.com/git-guides)](https://github.com/git-guides)  
  Short, practical tutorials on core Git topics like branching, merging, and collaboration. Good for quick reference.

- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials/what-is-git)  
  A more detailed set of tutorials, with conceptual explanations as well as commands. Helpful if you want to understand why Git works the way it does.

## Basic Commands

Open a terminal, `cd` into your project directory, and then:

- Initialize a repo (only once, at the start):  
  `git init`

- Add files to tracking:  
  `git add filename`  
  or add everything:  
  `git add .`

- Commit changes with a message:  
  `git commit -m "Describe your change"`

- Connect to your GitHub repository (only once per project):  
  `git remote add origin https://github.com/username/repo.git`

- Push commits to GitHub:  
  `git push origin main`

- Pull down changes from GitHub:  
  `git pull origin main`

- Check status of files:  
  `git status`

- View commit history:  
  `git log`

While you're at it, make sure you have a text file named (exactly) `.gitignore` in the root directory of your project, and add this line to it:

```text
node_modules
```

This will keep the file `node_modules` out of Git tracking, which is a massive, automatically generated folder you do not want to track.

## Next Steps

Once you’re comfortable with these basics, you’ll want to learn about:

- Branching and merging (`git branch`, `git checkout`, `git merge`)
- Undoing mistakes (`git restore`, `git reset`)
- Collaborating with teammates (pull requests, code review)

It is important to know that the branch named `main` is your deploy version.

Know how to:

- [ ] Create a branch
- [ ] Work *in* a branch
- [ ] Checkout a branch
- [ ] Make *Pull Requests* from a branch
- [ ] Merge a branch to another branch (e.g. to the branch called `main`)

At that point, review [Git branching strategies](/material/git-branching-policy.md) and use the *feature branch strategy*

Start simple: make commits often, push them to GitHub, and be sure your repository always reflects the latest state of your project.
