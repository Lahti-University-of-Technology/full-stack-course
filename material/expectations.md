# Full Stack Development course: expectations and ethical obligations

This document sets out clear expectations for conduct in this course and the consequences of falling short.

## General Expectations

You are encouraged to consult tutorials, AI, friends, coding examples, or whatever tools help you push your project, as long as:

1. All work is your own.
2. All work is transparent.
3. All help and sources are disclosed.
4. All data is handled responsibly.
5. You thoroughly understand and can explain every line you submit.

## Git commit history

A git repository automatically records a *commit history*, which is a timeline showing what work was done, when it was done, and by whom. This history is the clearest evidence of authorship and progress. In professional and academic settings, this is expected and welcomed.

A credible commit history looks organic and unpolished. It shows starts, stops, abandoned ideas, errors, and backtracking. This is natural and easy to recognize.

- Commit regularly during each programming session and once at the end.  
  - Frequent small commits during a session, then a final push before you stop.  
- All substantial work must appear in commits as you do it.  
- Commit history is only ever appended — it is never rewritten.  

---

## GitHub

Your GitHub repo is not a backup. It is your real work. It must always contain your latest progress, not a delayed upload or reconstruction at the end.

In your weekly reports, you are asked to affirm that your GitHub repository is the sole, complete source of your project's code. This means that your GitHub contains your absolute latest source code, and there is no code on your computer or anywhere else.

### Expectations  

- The `main` branch is the authoritative branch.
- Production deploys build directly from it.  
- `main` to deployment CI/CD pipeline always runs.
- The repository remains public (unless I approve an exception).  

You are responsible for ensuring GitHub is a continuous, accurate reflection of your work.  

## Peer evaluations

Peer evaluations are part of how grades are determined. They have a real effect on your peers. They only work when evaluators are sincere, specific, and independent.

### What is required

- Evaluate work, not friendships. Use the provided rubric only.
- Justify every score with concrete evidence. Reference commits, pull requests, issues, meeting notes, or shipped features. "Worked hard" is not evidence.
- Write your own evaluation. Do not co-author or reuse someone else’s text.
- Declare conflicts of interest. If you cannot be impartial, say so and I will reassign.
- Submit on time.

### Evaluator pledge

[] "I will be candid, fair, and independent. I will justify each score with evidence. I will not discuss grades outside the official process."

## AI Policy

You are encouraged to use every tool available to you, including AI systems. They are part of the modern software engineer’s toolkit and can accelerate learning, debugging, brainstorming, and production. Using them is not a violation of course ethics, whether or not you disclose it.

### Core responsibility

- Understand every line you submit.  
- Be able to explain your work clearly and defend your choices.  
- Be prepared and able to reproduce or adapt your work without outside help.  

### Allowed uses

These are some examples of perfectly acceptable uses of AI.

- Brainstorming ideas, names, or approaches  
- Exploring unfamiliar libraries or APIs  
- Debugging, optimization, or test generation  
- Generating boilerplate, scaffolding, or documentation drafts  
- Rubber-ducking: using AI to ask questions and clarify your own thinking  

### Note on AI disclosure

While disclosure of AI contribution is not required in this course, in professional or academic contexts outside, disclosure may be mandatory. You should be prepared to adapt to stricter standards in research, industry, or publishing.

That said, if you want to conform to emerging industry standards, create an `AI_USAGE.md` file in `docs/` and append AI contributions as you go. These entries should include the GitHub commit or PR URL where the change was made. See [ai-usage-log.md](ai-usage-log.md) for a template.

Maintaining such a log is optional here, but it may benefit you later. If you use this project in applications for jobs, internships, or funding, reviewers may want to see exactly how you used AI. A clear usage log demonstrates transparency, responsibility, and professional practice.

## Third-party code and content

- Include only what your licenses allow. Respect copyleft and attribution terms.
- Attribute in `ATTRIBUTION.md` and in file headers for substantial snippets.
- Do not paste large unmodified blocks from tutorials. Learn, then implement in your own words.

## Collaboration Policy

Collaboration is encouraged. Software is not built in isolation, and you will learn by watching, discussing, and helping each other. What matters is that the final work you submit is yours and that you understand it fully.

### Allowed

- Talking through ideas, debugging, and design decisions.  
- Pairing for learning or help, even if your peer types the code.  
- Watching how someone else solves a problem to learn the approach.  
- Sharing resources, tutorials, or references.  
- Giving feedback on each other’s code or deployments.  

### Required

- If another person contributes code, you may use it only if (a) it is a small assist, (b) you fully understand it, and (c) the contribution is clearly documented.  
- You must be able to explain every solution you submit.  
- Credit conversations or help in your commit messages or README when significant. (e.g. “Thanks to X for walking me through async/await.”)  

Learn from each other. Help each other. But in the end, every student must be able to stand on their own work. If you cannot, it is not yours to submit.  

## Platform accounts and bans

Rarely, GitHub or Microsoft will ban a user without explanation or appeal. You must keep working accounts on the services this course uses for code and deploys. Loss of access breaks transparency and blocks grading unless handled correctly.

### Required

- Use a single personal account per service unless I approve otherwise.
- Enable two factor auth and protect tokens and keys.
- If any account is restricted, suspended, or banned, notify me within 24 hours and forward the platform notice. Silence is misconduct.
- Within 72 hours of a restriction you must restore full transparency. Mirror the repository with complete history to an approved host, re establish the public deploy, and preserve CI logs and issues. *Full and original commit history must be preserved!*

### Safeguards (strongly recommended)

- Keep a secondary remote ready, such as GitLab.
- Push mirrors regularly so commit history, issues, and CI logs are duplicated.
- Export a weekly repo bundle or release artifact that includes commit history and build logs.

## Data and security

- Use only synthetic or consented data for users. Follow university and Finnish law regarding personal data.
- Keep secrets out of the repo. Use environment variables and secret managers.
- If you leak a secret, rotate it immediately and notify me in the submission notes.

## Transparency

Make your work easy to inspect from idea to production. I and your evaluators should be able to trace what you did, when you did it, and why.

### Required

- Production deploy must build from the `main` branch of the project repository.
- The project public URL is the production deploy.
- Contributions to `main` must have a readable history.  
- Steps from concept to production must be explainable with evidence.
- Issues, pull requests, CI logs, deployment notes, and test results must be accessible.

### Not required, but strongly protective

These files are optional. If there is any question about authorship or ethics and these are not present or are incomplete, the burden shifts to you.

- `ATTRIBUTION.md`: Attribution is your credit list. Libraries, tutorials, snippets, people, and any code you did not write originally. Include links and licenses.
  Minimal entry format:

  ```text
  Source: <link or name>
  Scope: <file or feature>
  License: <license and compliance note>
  Reason: <what you used and why>
  Edits: <what you changed>
  ```

- `AI_USAGE.md`: list tools, prompts, exact outputs you kept, and the edits you made. See [ai-usage-log.md](ai-usage-log.md) for more info.

## Audit

I will at random times ask for a live walkthrough, a quick refactor, or a time-boxed reproduction without outside help.

## Quick checklist

- [ ] Production deploy tracks `main`
- [ ] Public repo link and running URL are in the README
- [ ] Commit history shows steady progress tied to your work
- [ ] Issues, PRs, and CI logs are visible
- [ ] When questioned, you can justify every score and submission with evidence

## Acknowledgment

If anything is unclear to you here, you *must* ask for clarification before submitting assignments. "I misunderstood" is not an excuse. If you *disagree* with anything here, you *must* bring up your objections and have a discussion with me before submitting work. "I thought that policy was unfair" is not an excuse.

No list of rules can cover every possible situation. People are endlessly creative in finding ways to bend or evade obligations. This document sets clear standards, but it is not exhaustive. Any attempt to work around the spirit of these expectations, while technically avoiding what is written, will be treated as a violation. If you present me with a novel situation and I judge it to be misconduct, that judgment stands. Even if it was unintentional, it will still be treated as misconduct.

Ask questions early. Get clarity. Own your work.

[] *By remaining in the course I affirm that I have read, understood, and will follow this document.*
