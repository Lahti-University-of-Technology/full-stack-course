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

### Expectations  

- Commit regularly during each programming session and once at the end.  
- All substantial work must appear in commits as you do it.  
- Commit history is only ever appended — it is never rewritten.  
- The only way to have a clean, credible history is through steady, honest progress.  

#### Acceptable

- Frequent small commits during a session, then a final push before you stop.  
- Normal refactors that produce several commits with clear messages.  
- Squash-merging a PR when the original commit history remains visible in the PR.  
- Large auto-generated files (e.g. `package-lock.json`, `Cargo.lock`) with a clear commit message.  

#### Prohibited: off-repo development

*Off-repo development* is writing or editing project code without an ongoing, up-to-date commit history in the course repository. This includes:  

- Working in a private or alternate repository.  
- Keeping work only on your local machine without pushing.  
- Developing in a cloud IDE that is not connected to the repo.  

#### Prohibited: bulk import

*Bulk import* means introducing substantial work in one or a small number of commits that do not reflect how the work actually evolved. Examples:  

- Large feature sets or entire directories in a few commits.  
- Replacing the project with a new snapshot.  
- Force-pushing rewritten history to simulate gradual progress.  
- Pushing only a few times in the semester.  

**Policy**: Off-repo development and bulk import, or any reconstruction of history to simulate progress, **is misconduct per se**. Intent or authorship do not matter.  

---

## GitHub

Your GitHub repo is not a backup — it is your real work. It must always contain your latest progress, not a delayed upload or reconstruction at the end. Evaluators will grade from what is visible in GitHub.

### Expectations  

- The `main` branch is the authoritative branch.
- Production deploys build directly from it.  
- `main` to deployment CI/CD pipeline always runs.
- The repository remains public (unless I approve an exception).  

### Prohibited

- Deleting the repo and recreating a “clean” timeline.  
- Deploying from a private or alternate repository.  
- Staging work in shadow repositories.  
- Deploys that are not the code on `main`.  
- Do not disconnect CI/CD from the public repo.
- Repo history is never deleted or replaced.  

**Examples of misconduct**  

- Coding for days in a private repo, then copying the work into the course repo.  
- Keeping local commits for a week and pushing them all at once.  
- Disconnecting CI/CD from the public repo and deploying elsewhere.  

You are responsible for ensuring GitHub is a continuous, accurate reflection of your work.  

## General Expectations, clarified

- Do original work. Write code and text yourself. Use sources to learn, not to impersonate competence.
- Be transparent. Keep a public repository and public deployment unless I approve an exception. Commit regularly. Do not rewrite history to hide mistakes.
- Disclose help. Cite people, libraries, tutorials, and AI tools. Say exactly what you used and how.
- Use third-party code responsibly. Check the license. Attribute clearly. Only include what you understand.
- Use AI as a tool, not a substitute. You may use AI for brainstorming, examples, boilerplate, tests, and explanations. You are encouraged to document prompts and which outputs you kept. You must be able to reproduce and explain the result without AI.
- Collaborate ethically. Discuss ideas freely. Never share or submit code for someone else. Never paste someone else’s solution.
- Protect data and secrets. Do not commit credentials. Do not use real personal data without informed consent. Use environment variables. Rotate keys if leaked.
- Tell the truth. Do not fabricate results, demos, logs, tests, or commit history.

## What earns a zero on the assignment

Work leaves a digital trail. The nature of that trail is impossible to fake or fabricate. Work that is the product of struggle and exploration leaves a different trace than work that is the product of plagiarism or contract cheating. Listed here are some of the hallmarks of work that violates the expectations.

It is far better to fail by lack of work than to fail by cheating. Any one of these triggers an automatic 0 on that assignment or exam:

- Copying code or text without attribution.
- Contract cheating. Someone else writes any part of your deliverable.
- Fabricated logs, benchmarks, user tests, commit history or demonstrations.
- Hiding work in private repositories to avoid review. Public work is required.
- Not committing or pushing to GitHub to avoid review. Public work is required.
- Tampering with commit history to misrepresent timeline or authorship.
- A code walkthrough you cannot pass. If you cannot explain your own submission, it is not yours.
- Large, polished commit dumps,
- unclear authorship, or
- even minor timeline games.
These may also trigger course failure and a report to the university.

## What severely harms your grade

Typical deductions across rubrics.

- Missing or weak attribution: 10 to 30 percent.
- Sloppy or misleading transparency: 20 to 40 percent.
- Reusing substantial code with attribution but little understanding. You cannot answer basic questions about it: 50 to 80 percent.
- Security negligence. Committing secrets or sensitive data, ignoring a reported leak, or shipping known vulnerabilities: 20 to 50 percent.
- Nonfunctional public deployment when required and no credible attempt to fix: 10 to 30 percent.
These penalties assume mistakes made in good faith. If it appears that confusion is being used as a cover for more serious misconduct such as plagiarism or contract cheating, the matter will be reviewed as a potential misconduct case rather than as an ordinary error.

## Peer evaluations

Peer evaluations are part of how grades are determined. They have a real effect on your peers. They only work when evaluators are sincere, specific, and independent.

### What is required

- Evaluate work, not friendships. Use the provided rubric only.
- Justify every score with concrete evidence. Reference commits, pull requests, issues, meeting notes, or shipped features. "Worked hard" is not evidence.
- Write your own evaluation. Do not co-author or reuse someone else’s text.
- Declare conflicts of interest. If you cannot be impartial, say so and I will reassign.
- Submit on time.

### Strictly forbidden

- Grade trading. Any explicit or implicit agreement to inflate or deflate each other’s scores.
  Example: "You rate me 5 and I will rate you 5" or coordinated group inflation. Soliciting a trade is also forbidden. Report such an offer to me directly.

- Harassing, pressuring, or retaliating against an evaluator to change a score. This includes messages, hints, guilt trips, threats, or social pressure.
- Back channel discussions about grades during the evaluation window. Do not contact peers about changing evaluations. Use the appeal process only.
- Coordinated narratives. Identical or templated justifications across a group that do not match the evidence.

### Consequences

- Grade trading or solicitation: zero on the peer evaluation component for the course and a report to the university. Related assignment grades may also be set to zero.
- Harassment or pressure to change a grade: immediate failure of the course and a report to the university.
- Unjustified evaluations: discarded and replaced by instructor assessment or team median. Repeated issues escalate to a zero and a report.
- Suspicion standard: if I even suspect manipulation, trading, or pressure, I will freeze grades, review evidence, and interview the parties. If you cannot justify your scores with evidence, penalties above apply.

### Appeals and safeguards

- Appeal window. If you believe an evaluation you received is inaccurate, email me within 48 hours with specific evidence. Do not contact the evaluator. My decision is final.

### Examples

OK

- "Score 4. Shipped the file upload feature. PR 42 merged on September 12. Fixed bugs in issues 57 and 63. Clear commit messages. However, I encountered a bug when..."
- "Conflict of interest. We share housing. Request reassignment."
- "I really do not like her and cannot be objective about her work."
Not OK

- "Let's all give each other 5."
- "Please bump my score. I will bump yours."
- "The evaluation you gave me is unfair."
- Five evaluations with the same copy pasted justification.

### Evaluator pledge

[] "I will be candid, fair, and independent. I will justify each score with evidence. I will not discuss grades outside the official process."

## AI Policy

You are encouraged to use every tool available to you, including AI systems. They are part of the modern software engineer’s toolkit and can accelerate learning, debugging, brainstorming, and production. Using them is not a violation of course ethics, whether or not you disclose it.

### Core responsibility

- You must fully understand every line you submit.  
- You must be able to explain your work clearly and defend your choices.  
- If asked, you must reproduce or adapt the result without outside help.  
If you cannot do these things, the work is not yours.

### Allowed uses

- Brainstorming ideas, names, or approaches  
- Exploring unfamiliar libraries or APIs  
- Debugging, optimization, or test generation  
- Generating boilerplate, scaffolding, or documentation drafts  
- Rubber-ducking: using AI to ask questions and clarify your own thinking  

### Misuse

- Submitting output you don’t understand  
- Blind copy–paste without review or adaptation  
- Hiding behind AI to avoid learning the fundamentals  
- Using AI to fabricate data, logs, or results  

### Evaluation

- I may interview you, walk through your code, or ask for a live refactor.  
- If you cannot demonstrate understanding, the submission will receive a zero.  
- Repeated inability to own your work may result in failure of the course.  

### Note on AI disclosure

While disclosure of AI contribution is not required in this course, in professional or academic contexts outside, disclosure may be mandatory. You should be prepared to adapt to stricter standards in research, industry, or publishing.

That said, if you want to conform to emerging industry standards, create an `AI_USAGE.md` file in `docs/` and append AI contributions as you go. These entries should include the GitHub commit or PR URL where the change was made. See [ai-usage-log.md](ai-usage-log.md) for a template.

Maintaining such a log is optional here, but it may benefit you later. If you use this project in applications for jobs, internships, or funding, reviewers may want to see exactly how you used AI. A clear usage log demonstrates transparency, responsibility, and professional practice.

## Third-party code and content

- Only include what your license allows. Respect copyleft and attribution terms.
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

### Forbidden

- Submitting code you did not personally re-implement and understand.  
- You may not outsource substantial parts of your project to others. If the work is not primarily authored by you, it is misconduct.  
- Splitting the work so one person writes a feature and another copies it wholesale.  
- Ghost-writing: one student solving while the other never reproduces or learns.  

### Consequences

- If you submit code you cannot explain, it will be treated as an ethics violation.  
- If you rely on others to produce your deliverables without re-implementation and ownership, you will receive a zero on that assignment.  
- Repeated violations escalate to course failure.  

### Bottom line

Learn from each other. Help each other. But in the end, every student must be able to stand on their own work. If you cannot, it is not yours to submit.  

## Platform accounts and bans

Rarely, GitHub or Microsoft will ban a user without explanation or appeal. You must keep working accounts on the services this course uses for code and deploys. Loss of access breaks transparency and blocks grading unless handled correctly.

### Required

- Use a single personal account per service unless I approve otherwise.
- Enable two factor auth and protect tokens and keys.
- If any account is restricted, suspended, or banned, notify me within 24 hours and forward the platform notice. Silence is misconduct.
- Within 72 hours of a restriction you must restore full transparency. Mirror the repository with complete history to an approved host, re establish the public deploy, and preserve CI logs and issues.

### Forbidden

- Any violation of any account's Terms of Service, not limited to:
  - Sharing passwords, accounts or tokens.
  - Creating secondary accounts to evade limits, hide authorship, simulate activity, or bypass a ban.
  - Buying or trading stars, forks, followers, traffic, or reviews.
  - Spam or automated engagement that violates platform terms.
  - Distributing malware, infringing code or data, or violating licenses.
  - Abusive scraping, rate limit evasion, credential stuffing, or similar abuse.
These behaviors often trigger platform enforcement and are course violations on their own.

### Consequences

- Ban due to misconduct or ban evasion: immediate failure of the course and report to the university.
- Failure to disclose a restriction within 24 hours: zero on all affected milestones and a report.
- Inability to restore full transparency within 72 hours when the ban is not your fault: zeros on affected milestones until transparency is restored.
- If I reasonably suspect ban evasion or account manipulation, I will freeze grades, audit evidence, and interview you. If you cannot justify authorship and process, penalties above apply.

### Safeguards (strongly recommended)

- Keep a secondary remote ready, such as GitLab.
- Push mirrors regularly so commit history, issues, and CI logs are duplicated.
- Export a weekly repo bundle or release artifact that includes commit history and build logs.

## Data and security

- Use only synthetic or consented data for users. Follow university and Finnish law regarding personal data.
- Keep secrets out of the repo. Use environment variables and secret managers.
- If you leak a secret, rotate it immediately and notify me in the submission notes.

### Process when there is a concern

1. I freeze the grade and notify you.
2. You meet with me within 48 hours.
3. You walk through the work and reproduce key parts live.
4. I decide on the outcome. Zero, deduction, or clearance.
5. For serious cases I report to the university. Course failure is possible.

## Transparency

Make your work easy to inspect from idea to production. I and your evaluators should be able to trace what you did, when you did it, and why.

### Required

These are non-negotiable and violations may result in a 0 for the project.

- Production deploy must build from the `main` branch of the project repository.
- Contributions to `main` must have a readable history.  
- Public URL for the running app when required.
- Steps from concept to production must be explainable with evidence.
- Issues, pull requests, CI logs, deployment notes, and test results must be accessible.

### Not required, but strongly protective

These files are optional. If there is any question about authorship or ethics and these are not present or are incomplete, the burden shifts to you. I will freeze grades, audit the work, and apply deductions or a zero if you cannot justify your submission.

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

### Prohibited practices

- Private repos when a public repo is required.
- Changing the project repository.
- Changing GitHub user.
- Staging work in shadow repositories.
- Fake commits or fabricated logs.
- Public deploys that are not the code on `main`.

### Quick examples

OK:

- "I used OpenAI for test data. Prompts and kept outputs are in `AI_USAGE.md`."
- "I adapted pagination from Remix docs. Link and license in `ATTRIBUTION.md`. I rewrote the fetch layer and can explain it."
- "Teammate reviewed my PR and left comments. No code copied."
Not OK:

- "I found a repo and changed variable names."
- "I asked a friend to fix the deployment and they pushed directly."
- "I pasted AI code, then could not explain it in the interview."
- "I backdated commits to look like steady progress."

### Audit

I will at random times ask for a live walkthrough, a quick refactor, or a time-boxed reproduction without outside help. Failure to demonstrate understanding or to provide evidence will be treated as a transparency failure.

### Quick checklist

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
