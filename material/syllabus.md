# Course Syllabus

| Week | Dates                 | Modules                      |
| -------- | --------------------- | -------------------------------- |
| 36       | Mon 1 Sep – Sun 7 Sep | Basic platform setup, Conceive, Describe, UXD |
| 37       | 8 Sep – 14 Sep        | Conceive, Describe, UXD, Data Model, git |
| 38       | 15 Sep – 21 Sep       | Describe, UXD, Data Model, Architecture, UI, API |
| 39       | 22 Sep – 28 Sep       | UXD, Data Model, Architecture, UI, API, Visual design, frontend, backend |
| 40       | 29 Sep – 5 Oct        | Architecture, UI, API, Visual design, programming |
| 41       | 6 Oct – 12 Oct        | programming, frontend, backend   |
| 42       | 13 Oct – 19 Oct       | programming, frontend, backend   |
| 43       | 20 Oct – 26 Oct       | mid-semester exams               |
| 44       | 27 Oct – 2 Nov        | Period 2 teaching begins         |
| 45       | 3 Nov – 9 Nov         | Teaching                         |
| 46       | 10 Nov – 16 Nov       | Teaching                         |
| 47       | 17 Nov – 23 Nov       | Teaching                         |
| 48       | 24 Nov – 30 Nov       | Teaching                         |
| 49       | 1 Dec – 7 Dec         | Teaching                         |
| 50       | 8 Dec – 14 Dec        | Teaching ends – last instruction |
| 51       | 15 Dec – 21 Dec       | *Exam Week / End of Semester*  |
| 52       | 22 Dec – 28 Dec       | Christmas break (post-semester)  |

## Course Project Teaching Plan (Instructor-Facing)

This plan divides the semester into three phases: **Design**, **Implementation**, and **Polishing & Problem-Solving**. Each week’s lectures and assignments are designed to move the course project forward in sync with the syllabus.

---

### Phase 1: Design (Weeks 36–40)

#### Week 36 — *Setup & Orientation*

**Core idea:** Get environment and project scaffolding in place.  

- **Lecture focus**: course overview, project introduction, Git/GitHub basics, platform setup.  
- **Assignment**:  
  - Set up development environment.  
  - Create repo `fsd-project-2025`.  
  - Deploy “Hello World” app to Netlify.  
  - Submit repo URL + production URL.  

---

#### Week 37 — *User Experience Intro*

**Core idea:** Software is for people. Think in terms of what the user can do.  

- **Lecture focus**:  
  - What is UX?  
  - Wireframes vs wireflows.  
  - Components and states (loading, error, success).  
  - User tasks vs system responses.  
  - Visit <https://observablehq.com/@d3/gallery>. Suggest that data visualization would enhance some projects.
- **Assignment**:  
  - Create wireframes and wireflows for your project.  
  - Identify 2–3 components and sketch their states.  
- **Prep for 38**:  
  - Data stories and visualization
    - Explore *Our World in Data* → how presentation tells a story.  

---

#### Week 38 — *Data & Architecture*

**Core idea:** All software is just moving data around. Architecture describes *how*.  

- **Lecture focus**:  
  - Data flow: client → server → persistence → back.  
  - Context, container, and data flow diagrams.  
  - Anatomy of a request/response cycle.  
  - JSON as common representation.  
- **Assignment**:  
  - Create a Netlify function that returns JSON.  
  - Submit a request and inspect the response.  
  - Document project flow with DFD + context diagram.  
- **Prep for 39**:  
  - Read about REST.  
  - Identify resources in your project.  

---

#### Week 39 — *Bridging Design & Implementation*

**Core idea:** Last design steps before coding.  

- **Lecture focus**:  
  - Visual design basics (typography, spacing, clarity, accessibility).  
  - Design frameworks (Material, Tailwind).  
  - Database choices: relational vs document.  
  - API design with REST; mention GraphQL briefly.  
  - Process hygiene: what a good commit history looks like.  
- **Assignment**:  
  - Choose a database type and justify choice.  
  - Draft API design (resources + CRUD).  OpenAPI3
  - Demonstrate incremental, clean commit history.  

---

### Week 40 — *Implementation Kickoff*  

**Core idea:** Start coding in small, testable steps.  

- **Lecture focus**:  
  - Sharing: diagrams, wireframes, visual design.  
  - Intro to state management (why it’s hard).  
  - Programming practice: functions, modules, cohesion/coupling.  
  - Error handling basics.  
  - **TDD (Test-Driven Development) intro**:  
    - Write a failing test first → write minimal code to pass → refactor.  
    - Emphasis on *small cycles* and *confidence*, not dogma.  
    - Example: write a test that “adds two numbers,” then implement `add()`.  
    - Apply the same to a simple component state.  

- **Assignment**:  
  - Using wireframe, build one Svelte component that renders mock data.  
  - Show one state transition (loading → success/error).  
  - Write a very small test for either a function or component (e.g. “renders correct text”).  
  - Ensure that `main` to Netlify deploy is working and shows update.  
  - Commit incrementally.  

---

### Phase 2: Implementation (Weeks 41–44)

### Week 41 — *Frontend + Backend Foundations*  

**Core idea:** Connect frontend and backend.  

- **Lecture focus**:  
  - Frontend implementation: components, props, events, reusability in Svelte.  
  - Backend implementation: Netlify functions, routing, REST conventions.  
  - Abstraction, interfaces, contracts.  
  - **Async programming**: callbacks → promises → async/await.  
  - How async affects UI: a component changes state based on request/response.  
    - Loading → Success → Error.  
    - Visual indicators for each (spinner, message, data shown).  
  - Tie back to TDD: test a function that resolves async data.  

- **Assignment**:  
  - Implement one of your API resource endpoints.
    - to respond to a GET request
    - it returns mock JSON data
  - Connect the endpoint to a Svelte component that fetches and displays the data.  
    - Show visual states for *loading*, *success*, and *error*.  
  - Document the API route in `/docs/API.md`.  

---

#### Week 42 — *Integration with Persistence*

**Core idea:** Move from “toy” to “real” by adding persistence.  

- **Lecture focus**:  
  - Frontend-backend integration.  
  - Postman/curl testing.  
  - DB integration (Supabase/Mongo).  
  - Validation & constraints.  
  - Async programming (promises, async/await).  
  - Unit vs integration tests.  
- **Assignment**:  
  - Hook backend to real persistence.  
  - Implement one full CRUD operation end-to-end.  
  - Validate at least one input with clear error.  
  - Write one unit test for backend route.  

---

#### Week 43 — *Checkpoint*

**Core idea:** Synthesize and check progress.  

- **Lecture focus**:  
  - Mid-semester exam/review.  
  - Code walkthroughs, repo histories.  
  - Pitfalls: messy commits, unclear flows, missing docs.  
- **Assignment**:  
  - Submit project state for milestone review.  
  - Show one feature end-to-end in production.  
  - Short reflection report: what’s working, what’s stuck.  

---

#### Week 44 — *From Prototype to Iteration*

**Core idea:** Transition from “first version” to iterative improvement.  

- **Lecture focus**:  
  - Refactoring: smells, duplication.  
  - Technical debt as tradeoff.  
  - Code reviews: giving & receiving feedback.  
  - Version control workflows (branches, PRs).  
- **Assignment**:  
  - Refactor one messy part of code, explain improvement.  
  - Review a peer’s project PR.  
  - Submit reflection on review process.  

---

### Phase 3: Polishing & Problem-Solving (Weeks 45–48)

#### Week 45 — *Testing & State Management*

**Core idea:** Make code reliable through tests and explicit states.  

- **Lecture focus**:  
  - Testing: mocking, fixtures, coverage.  
  - Frontend testing libraries.  
  - Backend endpoint tests.  
  - XState: visualizing state machines.  
- **Assignment**:  
  - Add one automated test (frontend or backend).  
  - Draw a state diagram for one key feature.  
  - Implement state transitions in code.  

---

#### Week 46 — *Performance & Scalability*

**Core idea:** Improve efficiency and reach MVP milestone.  

- **Lecture focus**:  
  - Profiling frontend and backend.  
  - Efficient queries.  
  - Caching strategies.  
  - API rate limits.  
  - DB indexes, schema evolution, migrations.  
- **Assignment**:  
  - Identify and fix one performance bottleneck.  
  - Add one DB index or schema improvement.  
  - Submit MVP milestone (core feature in production, README updated).  

---

#### Week 47 — *Deployment & Operations*

**Core idea:** Deploy like a professional.  

- **Lecture focus**:  
  - Production vs staging environments.  
  - Environment variables and secrets management.  
  - Monitoring and logging.  
  - Observability basics.  
  - Preparing effective demos.  
- **Assignment**:  
  - Document `example.env`.  
  - Configure secrets in Netlify.  
  - Add logging to one backend function.  
  - Draft demo script or record a rehearsal video.  

---

#### Week 48 — *Security & Finishing Touches*

**Core idea:** Harden the app for demo and evaluation.  

- **Lecture focus**:  
  - Input validation & sanitization.  
  - Common vulnerabilities (XSS, injection, CSRF).  
  - Authentication & authorization basics.  
  - Privacy by design.  
  - Presentation polish.  
- **Assignment**:  
  - Secure one input or route.  
  - Add a security-related test.  
  - Fix at least one accessibility issue.  
  - Finalize presentation/demo materials.  
