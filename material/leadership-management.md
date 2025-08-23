# Leadership and Management

Self guided manual for learning about Tech Leadership and Engineering Management

## Technical leadership vs engineering management

What the tech lead optimizes for: technical outcomes, system quality, clarity of direction, and day-to-day engineering decisions. What the manager optimizes for: team health, hiring, performance systems, and cross-functional alignment. Many roles blend both; this module teaches how to separate concerns and do each deliberately.

Early software teams treated the best coder as a de facto lead, which created bottlenecks, hero culture, and fragile systems. Agile and DevOps practices pushed decisions closer to teams, creating the modern split between technical leadership and people management to improve throughput, resiliency, and clarity of accountability.

- Tech Lead: Engineer responsible for day-to-day technical direction.  
- Engineering Manager: People manager accountable for outcomes, hiring, growth, and execution.  
- Staff Engineer: Senior IC who leads through influence across teams.  
- DRI: Directly Responsible Individual for a decision or outcome.  
- Scope: Breadth and complexity of problems owned.

- [The Manager’s Path (O’Reilly)](https://www.oreilly.com/library/view/the-managers-path/9781491973882/) Clear model for EM responsibilities and growth paths.  
- [Staff Engineer (Stripe Press)](https://press.stripe.com/staff-engineer) IC leadership patterns beyond management.  
- [An Elegant Puzzle (Stripe Press)](https://press.stripe.com/an-elegant-puzzle) Practical org design and leadership tradeoffs.  
- [Peopleware](https://en.wikipedia.org/wiki/Peopleware) Why environment and culture outproduce heroics.  
- [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month) Classic critique of adding people to late projects.

---

## Planning and delivery fundamentals

Turn strategy into working software through forecasting, slicing, prioritization, and continuous delivery. Emphasize flow over utilization, small batches, and risk burn-down.

Waterfall failed under uncertainty. Iterative methods, CI, and CD reduced integration risk and feedback delay, improving lead time and quality.

- OKR: Objectives and Key Results used to align goals.  
- Backlog: Ordered list of work with acceptance criteria.  
- Sprint: Fixed timebox for planning and review.  
- Kanban: Pull-based flow with WIP limits.  
- Lead time vs cycle time: Request to delivery vs start to delivery.  
- Cost of delay: Economic impact of deferring delivery.

- [Accelerate](https://itrevolution.com/accelerate/) DORA metrics link engineering practices to outcomes.  
- [Continuous Delivery](https://continuousdelivery.com/) Core reference for CI/CD and deployment pipelines.  
- [Scrum Guide](https://scrumguides.org/) Concise canonical Scrum roles and events.  
- [Shape Up](https://basecamp.com/shapeup) Alternative shaping and betting approach for projects.

---

## Technical decision making and docs

Make decisions explicit, reversible when possible, and easy to revisit. Use lightweight proposals, decision logs, and Architecture Decision Records to reduce thrash and align stakeholders.

Verbal decisions and tribal memory created rework and hidden coupling. ADRs and RFCs introduced traceability and a shared context for future maintainers.

- ADR: Architecture Decision Record documenting a single decision and its context.  
- RFC: Request for Comments used to socialize and refine proposals.  
- RACI, DACI, RAPID: Decision rights frameworks that clarify roles.  
- Decision log: Chronological index of decisions and status.

- [Architecture Decision Record Templates](https://github.com/joelparkerhenderson/architecture_decision_record) Widely used ADR pattern and templates.  
- [Rust RFCs](https://rust-lang.github.io/rfcs/) Mature example of an RFC process in practice.  
- [DACI Framework (Atlassian)](https://www.atlassian.com/team-playbook/plays/daci) Practical guide to DACI roles and anti-patterns.

---

## Code quality and review at scale

Leaders set standards for code review, testing depth, branching strategy, and automation. Aim for fast feedback, low toil, and consistent style to keep change cheap.

Big-bang merges and manual testing caused integration failures. Trunk-based development plus CI reduced merge debt; codified review guidelines cut latency and raised bar for maintainability.

- Code review: Peer review focusing on correctness, clarity, and risk.  
- Trunk-based development: Short-lived branches merged to main frequently.  
- Test pyramid: More fast unit tests than slow end-to-end tests.  
- Gates vs guardrails: Hard blocks vs nudges in pipelines.

- [Google Engineering Practices: Code Review](https://google.github.io/eng-practices/review/) Concrete review guidelines and reviewer responsibilities.  
- [Trunk Based Development](https://trunkbaseddevelopment.com/) Patterns for integration and release.  
- [Test Pyramid (Fowler)](https://martinfowler.com/bliki/TestPyramid.html) Rationale for test layering.  
- [Continuous Delivery](https://continuousdelivery.com/) How to automate quality into the pipeline.

---

## Architecture leadership and tradeoffs

Choose architectures that fit constraints, scale with load, and preserve changeability. Optimize for clear boundaries, data ownership, and operability.

Monoliths enabled speed then hit scaling and ownership limits. Microservices unlocked independent delivery at the cost of distributed systems complexity. Data-intensive design reframed storage, streams, and consistency.

- Monolith vs microservices: Single deployable vs many small services.  
- Event-driven architecture: Producers emit events to decouple consumers.  
- CAP theorem: Consistency, Availability, Partition tolerance tradeoffs.  
- Backpressure: Signal to slow producers under load.

- [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) Definitive text on data systems and tradeoffs.  
- [Microservices (Fowler & Lewis)](https://martinfowler.com/articles/microservices.html) Seminal articulation of the microservices style.  
- [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem) Background on distributed consistency tradeoffs.  
- [Software Engineering at Google](https://abseil.io/resources/swe-book) Pragmatic large-scale engineering practices.

---

## Team topologies and org design

Shape teams to fit the flow of change. Favor stream-aligned teams with clear service boundaries, plus enabling and platform teams to remove friction.

Conway’s Law showed systems mirror org communication. Team Topologies codified patterns that reduce handoffs and cognitive load.

- Stream-aligned team: Owns a product or service end to end.  
- Enabling team: Unblocks others through expertise and coaching.  
- Platform team: Provides internal products that reduce duplication.  
- Inverse Conway maneuver: Change org to get the architecture you want.

- [Team Topologies](https://teamtopologies.com/book) Canonical patterns for modern team structures.  
- [Conway’s Law](https://en.wikipedia.org/wiki/Conway%27s_law) Core principle linking orgs and architecture.  
- [Software Engineering at Google](https://abseil.io/resources/swe-book) Examples of platform and tooling at scale.

---

## Reliability and incident leadership

Set SLOs, manage error budgets, build runbooks, and lead incidents with clear roles. Practice blameless learning through postmortems.

Ops was ticket-driven and reactive. SRE reframed reliability as an engineering problem with budgets and automation. Incident command removed chaos during outages.

- SLI, SLO, SLA: Indicator, objective, and external commitment.  
- Error budget: Allowed unreliability to balance delivery and reliability.  
- Incident Commander: Role that coordinates response.  
- Postmortem: Narrative analysis with specific follow-ups.

- [Site Reliability Engineering (Google)](https://sre.google/sre-book/table-of-contents/) Foundation of SRE principles and practices.  
- [SRE Workbook: Implementing SLOs](https://sre.google/workbook/implementing-slos/) Practical SLO implementation guidance.  
- [PagerDuty Incident Response Guide](https://response.pagerduty.com/) Field-tested incident roles and checklists.  
- [Principles of Chaos Engineering](https://principlesofchaos.org/) Why and how to practice chaos engineering.

---

## Metrics and operating rhythm

Use a small set of behavior-shaping metrics and a cadence of reviews to run the org. Prefer leading indicators and guardrails over vanity numbers.

Output metrics created perverse incentives. DORA and SPACE shifted attention to flow, reliability, and human factors.

- DORA metrics: Lead time, deployment frequency, change fail rate, MTTR.  
- SPACE: Satisfaction, Performance, Activity, Communication, Efficiency.  
- Leading vs lagging: Predictive vs reflective indicators.  
- MBR: Monthly business review tying tech to outcomes.

- [Accelerate](https://itrevolution.com/accelerate/) Empirical link between practices and performance.  
- [DORA](https://dora.dev/) Research, definitions, and reports.  
- [ACM Queue: SPACE Framework](https://queue.acm.org/detail.cfm?id=3454124) Framework for measuring developer productivity.  
- [Measure What Matters (Doerr)](https://www.whatmatters.com/) Practical OKR usage and pitfalls.

---

## People systems: hiring, leveling, coaching

Design structured hiring, clear career ladders, calibrated performance, and continuous feedback. Invest in sponsorship, not only mentorship.

Unstructured interviews were noisy and biased. Clear rubrics, behavioral questions, and calibration improved fairness and predictive power. Psychological safety emerged as a key predictor of team effectiveness.

- Structured interview: Standard questions tied to a rubric.  
- Career ladder: Levels with behaviors and scope definitions.  
- Calibration: Cross-team alignment on performance standards.  
- Sponsorship: Using political capital to create opportunities for others.

- [High Output Management (Grove)](https://en.wikipedia.org/wiki/High_Output_Management) Operating system for managers and teams.  
- [Radical Candor](https://www.radicalcandor.com/) Tactics for direct, caring feedback.  
- [Work Rules! (Laszlo Bock)](https://www.hachettebookgroup.com/titles/laszlo-bock/work-rules/9781455554805/) Practices for hiring and culture at scale.  
- [Project Aristotle (Google)](https://en.wikipedia.org/wiki/Project_Aristotle) Evidence for psychological safety in team performance.

---

## Product partnership and strategy for engineering

Partner with product to pick bets, shape scope, protect time for platform work, and connect technical strategy to business strategy.

Output-centric roadmaps produced local optimizations. Outcome-centric strategy and discovery practices reduced waste and improved product-market fit.

- Roadmap: Time-phased intent that should remain flexible.  
- RICE: Reach, Impact, Confidence, Effort prioritization.  
- Cost of delay: Economics of sequencing work.  
- Wardley map: Visualize value chains and evolution to inform bets.

- [Inspired (Cagan)](https://www.svpg.com/inspired-how-to-create-products-customers-love/) Partnership model for product discovery and delivery.  
- [Good Strategy / Bad Strategy (Rumelt)](https://en.wikipedia.org/wiki/Good_Strategy_Bad_Strategy) How to craft coherent strategy.  
- [Wardley Maps Book](https://github.com/wardley-maps/book) Open book on Wardley mapping for strategy.  
- [Accelerate](https://itrevolution.com/accelerate/) Shows how platform and reliability investments pay off.

---

## Security and privacy leadership

Bake security into the lifecycle, measure it, and make it visible. Use threat modeling, guardrails, and paved roads. Treat privacy as a product requirement.

Late security reviews created churn and incidents. Shift-left practices with standard libraries, scanning, and education reduced vulnerabilities. GDPR increased accountability for personal data.

- OWASP Top 10: Common classes of web vulnerabilities.  
- Threat modeling: Structured analysis of risks and mitigations.  
- NIST CSF: Framework for security controls and maturity.  
- PII and DPIA: Personal data and impact assessment.

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) Shared language for common risks.  
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) Reference model for building a security program.  
- [GDPR.eu](https://gdpr.eu/) Practical guide to GDPR obligations.  
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/) Core principles for threat modeling.

---

## Leading change and transformation

Plan and execute migrations, deprecations, and org changes with clear narratives, crisp milestones, and measurable risk reduction. Balance central standards with team autonomy.

Big-bang rewrites failed under uncertainty. Incremental change, strangler patterns, and explicit change management improved success rates.

- Strangler pattern: Incrementally replace legacy systems at the edges.  
- Change saturation: Org limit on simultaneous changes.  
- Deprecation policy: Public rules for sunsetting APIs or features.  
- Stakeholder map: Grid of influence and interest to plan engagement.

- [Leading Change (Kotter)](https://en.wikipedia.org/wiki/Leading_Change) Classic model for change leadership.  
- [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) Narrative introducing DevOps and flow of work.  
- [No Silver Bullet (Brooks)](https://en.wikipedia.org/wiki/No_Silver_Bullet) Reminder to avoid rewrite fallacies.

---

## Remote and distributed leadership

Default to asynchronous communication, documented decisions, and transparency. Optimize for time zones, written clarity, and explicit interfaces between teams.

Co-located rituals did not survive remote constraints. Handbooks and async tools replaced meeting-centric coordination.

- Async first: Written updates and reviews before meetings.  
- Working agreement: Team conventions for response times and tools.  
- Handbooks: Living documentation of how the org operates.

- [GitLab Handbook](https://about.gitlab.com/handbook/) Gold standard for remote-first operating practices.

---

## AI in engineering leadership

Set policy for AI-assisted coding, code ownership, security, and attribution. Focus on outcome metrics, review rigor, and training data hygiene. Treat AI as augmentation, not a substitute for design and testing.

Early usage created license ambiguity, security leaks, and inconsistent quality. Clear policies and review standards improved safety and value capture.

- AI pair programmer: Code assistant integrated into IDEs.  
- Prompt hygiene: Avoiding secrets and sensitive data in prompts.  
- Attribution: Tracking origin of generated code when required.

- [ACM Queue: SPACE Framework](https://queue.acm.org/detail.cfm?id=3454124) SPACE reminds you to measure outcomes, not keystrokes.  
- [Software Engineering at Google](https://abseil.io/resources/swe-book) Practices for review and reliability still apply with AI assistance.

---
