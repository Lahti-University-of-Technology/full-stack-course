# Software Planning and Development Module

A complete module for planning and continual development of a software product from the first idea to a minimum viable product, without writing production code. Focus on problem framing, user experience, data and API design, decision making, ethics, and delivery management.

---

## Learning outcomes
By the end of this module students can:
- Define a clear problem statement, outcomes, and success metrics.
- Produce a coherent product vision and scope with an MVP sliced into thin vertical increments.
- Plan and conduct lightweight discovery, synthesize findings, and translate them into user stories and flows.
- Draft UX artifacts that are testable and accessible: personas, job stories, IA, task flows, wireframes, content strategy, and accessibility acceptance criteria.
- Model the domain at conceptual and logical levels and justify tradeoffs in data design.
- Specify an API that is versioned, secure, observable, and consistent with the data model.
- Capture nonfunctional requirements as SLOs and budgets: performance, reliability, security, privacy, accessibility, cost.
- Plan delivery using roadmaps, prioritization, and estimation while reducing risk through spikes and experiments.
- Write high quality decision records, risk registers, and runbooks.
- Set up feedback loops for continuous discovery and improvement, including ethics and safety considerations.

---

## Module map and outputs
Each unit has a purpose, a short list of techniques, required outputs, and a glossary of terms explained in plain language.

---

### Unit 1. Problem framing and product vision
**Purpose**: Align on the problem and target outcome before talking about features.

**Techniques**: Problem statement, goals and non-goals, North Star metric, outcome mapping, Lean Canvas.

**Outputs**: One page vision, problem statement, success metrics, constraints and assumptions.

**Glossary**
- **Problem statement**: A short explanation of the problem you are trying to solve, written in plain words.
- **Goals and non-goals**: Goals are what you want to achieve. Non-goals are what you are *not* trying to do, to keep the project focused.
- **North Star metric**: A single number that best shows whether your product is successful.
- **Outcome mapping**: A way of showing what changes you want to see (outcomes) and what actions might lead to them.
- **Lean Canvas**: A one-page template for planning a project idea. It has boxes for problem, solution, users, value, and risks.

---

### Unit 2. Stakeholders, discovery plan, and research
**Purpose**: Identify users and risks. Plan fast discovery.

**Techniques**: Stakeholder map, discovery plan, 5 research questions, risk checklist, data privacy review.

**Outputs**: Stakeholder map, discovery plan, consent script or mock protocol, risk register v1.

**Glossary**
- **Stakeholder map**: A diagram or list showing all the people who affect or are affected by your project.
- **Discovery plan**: A short plan for how you will learn about the problem space (interviews, surveys, research).
- **5 research questions**: Five concrete questions you want answered during discovery.
- **Risk checklist**: A list of common risks (technical failure, privacy issues, unclear scope, lack of users) checked against your project.
- **Data privacy review**: A quick look at whether you are collecting or storing personal data, and how you will protect it.

---

### Unit 3. Value definition and MVP slicing
**Purpose**: Decide the smallest coherent product that can deliver value.

**Techniques**: User story mapping, impact mapping, Kano, cost of delay, RICE scoring.

**Outputs**: Story map with thin slices, MVP definition, Now Next Later roadmap.

**Glossary**
- **User story mapping**: Laying out user tasks in order and breaking them into smaller pieces.
- **Impact mapping**: A diagram linking your goal to actors, their impacts, and supporting features.
- **Kano**: A method of sorting features into must-have, performance, and excitement.
- **Cost of delay**: Estimating the value lost if a feature is delivered later.
- **RICE scoring**: Ranking ideas with Reach, Impact, Confidence, Effort.

---

### Unit 4. UX foundations
**Purpose**: Turn outcomes into usable flows and content.

**Techniques**: Personas and job stories, task flows, information architecture, wireframes, content style guide, accessibility heuristics.

**Outputs**: Persona set, 6–8 job stories, primary task flow, IA outline, mid-fidelity wireframes, accessibility criteria.

**Glossary**
- **Persona**: A fictional character that represents a type of user.
- **Job story**: A short sentence explaining user need, situation, and outcome.
- **Task flow**: A step-by-step diagram of how a user completes one task.
- **Information architecture (IA)**: How content and features are organized for usability.
- **Wireframe**: A simple sketch of a screen showing layout and function.
- **Content style guide**: Rules for writing text consistently.
- **Accessibility heuristics**: Rules for making designs usable by people with disabilities.

---

### Unit 5. Data modeling
**Purpose**: Describe the domain and persistence strategy.

**Techniques**: Domain modeling, entity relationship diagrams, normalization vs denormalization, soft delete vs archive, event modeling, data lineage, PII tagging.

**Outputs**: A first draft **Data Flow Diagram (DFD)** to show how data moves through the app, and an **ERD** if relational data is used. Add diagrams to `/docs/DATA_MODEL.md`.

**Glossary**
- **Domain modeling**: Writing down the important “things” in your app and their relationships.
- **Entity Relationship Diagram (ERD)**: A diagram showing entities (tables), attributes (columns), and relationships.
- **Normalization vs denormalization**: Splitting data to avoid repetition vs combining data for speed.
- **Soft delete vs archive**: Marking data deleted vs moving it aside but keeping it.
- **Event modeling**: Writing down the key events that happen and how data changes as a result.
- **Data lineage**: Showing where data comes from, how it changes, and where it goes.
- **PII tagging**: Marking personal data fields (e.g. email, name) for careful handling.

---

### Unit 6. API design
**Purpose**: Expose the domain through a consistent and secure interface.

**Techniques**: Resource modeling, REST and GraphQL tradeoffs, pagination, filtering, consistent error model, idempotency, versioning, OpenAPI schema, authentication and authorization, rate limiting.

**Outputs**: API overview, OpenAPI or GraphQL schema, error catalog, auth plan, versioning strategy, sample requests and responses.

**Glossary**
- **Resource modeling**: Listing the main types of data your API exposes.
- **REST**: An API style using HTTP methods (GET, POST, PUT, DELETE).
- **GraphQL**: An API style where clients ask for exactly the data they want.
- **Pagination**: Splitting large result sets into smaller pages.
- **Filtering**: Requesting only some results based on conditions.
- **Consistent error model**: Using the same format for all errors.
- **Idempotency**: Operations that give the same result even if repeated.
- **Versioning**: Managing API changes without breaking old clients.
- **OpenAPI schema**: A formal file describing the API.
- **Authentication**: Proving identity (login).
- **Authorization**: Checking permissions.
- **Rate limiting**: Restricting requests per client to prevent overload.

---

### Unit 7. System qualities and guardrails
**Purpose**: Make quality explicit before implementation begins.

**Techniques**: SLOs and SLIs, performance budgets, availability targets, privacy by design, threat modeling with STRIDE, dependency license review.

**Outputs**: SLO table, performance and cost budgets, security notes, privacy summary, dependency policy.

**Glossary**
- **SLO (Service Level Objective)**: A target for system behavior (e.g. “95% of requests under 400 ms”).
- **SLI (Service Level Indicator)**: The measurement used to check an SLO.
- **Performance budget**: Limits on app size or speed (e.g. page load time).
- **Availability target**: How often the system should be up.
- **Privacy by design**: Planning to minimize and protect data collection from the start.
- **Threat modeling**: Thinking through possible attacks.
- **STRIDE**: A checklist of threat types (Spoofing, Tampering, etc.).
- **Dependency license review**: Checking legal licenses of software you use.

---

### Unit 8. Delivery management and estimation
**Purpose**: Plan delivery while preserving adaptability.

**Techniques**: Now Next Later roadmap, release plan, backlog with definitions of ready and done, estimation by reference class forecasting, t-shirt sizing, probabilistic forecasts, single trunk policy, feature flags plan.

**Outputs**: Delivery plan, prioritized backlog, release plan, definitions of ready/done.

**Glossary**
- **Now Next Later roadmap**: Work split into what’s happening now, next, and later.
- **Release plan**: Features grouped by release.
- **Backlog**: Ordered list of tasks and features.
- **Definition of ready**: Conditions before work can start.
- **Definition of done**: Conditions before work is finished.
- **Reference class forecasting**: Estimating using past similar work.
- **T-shirt sizing**: Rough size estimates (S, M, L, XL).
- **Probabilistic forecasts**: Predicting ranges instead of exact dates.
- **Single trunk policy**: Using one main branch for code.
- **Feature flags**: Switches in code to turn features on/off.

---

### Unit 9. Observability and analytics plan
**Purpose**: Ensure learning and safe releases.

**Techniques**: Event taxonomy, metrics plan, guardrail metrics, A/B testing basics, feature telemetry, dashboards and alerts.

**Outputs**: Analytics plan, dashboard mock, alert thresholds, rollout/rollback criteria.

**Glossary**
- **Event taxonomy**: The list of events you track (e.g. “task created”).
- **Metrics plan**: Plan for what numbers to watch.
- **Guardrail metrics**: Numbers that warn if something is going wrong.
- **A/B testing**: Comparing two versions to see which works better.
- **Feature telemetry**: Signals about how features are used.
- **Dashboard**: Visual display of metrics.
- **Alerts**: Automatic warnings when problems happen.

---

### Unit 10. Risk reduction and decision records
**Purpose**: Reduce uncertainty early and document why choices were made.

**Techniques**: Pre-mortem, spikes, ADRs, decision matrix, assumptions backlog.

**Outputs**: Risk register, 2–3 ADRs, spike reports.

**Glossary**
- **Pre-mortem**: Imagining failure ahead of time to find risks.
- **Spike**: A short experiment to learn about an unknown.
- **ADR (Architecture Decision Record)**: A short note about an important decision and its reasoning.
- **Decision matrix**: Table comparing options against criteria.
- **Assumptions backlog**: List of assumptions to check later.
- **Risk register**: List of risks, their likelihood, impact, and mitigations.

---

### Unit 11. Launch and operations planning
**Purpose**: Prepare for a controlled release and steady operations.

**Techniques**: Environment plan, data migration plan, runbooks, incident plan, support and triage policy, change control.

**Outputs**: Launch checklist, migration notes, runbook, support/on-call plan.

**Glossary**
- **Environment plan**: Note on where the app runs (dev, test, production).
- **Data migration plan**: Steps for moving/updating data safely.
- **Runbook**: Step-by-step guide for handling routine tasks or known issues.
- **Incident plan**: Steps for responding to a production problem.
- **Support and triage policy**: Rules for handling and prioritizing bugs.
- **Change control**: Process for making changes safely (e.g. PR reviews).

---

### Unit 12. Continuous discovery and improvement
**Purpose**: Close the loop between product outcomes and delivery.

**Techniques**: Dual track planning, weekly demos, user feedback channels, bug triage, postmortems, roadmap reviews.

**Outputs**: Feedback loop map, postmortem template, roadmap review notes.

**Glossary**
- **Dual track planning**: Running discovery and delivery in parallel.
- **Weekly demos**: Regular short presentations of progress.
- **User feedback channels**: Ways to gather feedback (surveys, chat, issues).
- **Bug triage**: Sorting and prioritizing bugs.
- **Postmortem**: Report after a problem, with lessons learned.
- **Roadmap review**: Checking and adjusting the upcoming plan.
- **Feedback loop**: The cycle of building, learning, and improving.

---
