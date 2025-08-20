# Course Material

- People
  - Why we build software: serving real people  
    Software exists to solve human problems. Every feature should address a user need. Personas (fictional user types), user stories (narrative feature descriptions), and usability studies help teams stay focused on delivering value.
  - Working with other humans (including future you)  
    Code is read more than it is written. Clear naming, thoughtful comments, and well-scoped tests help teammates—and your future self—understand, maintain, and evolve the system.
  - Communication, feedback, collaboration  
    Stand-ups, design docs, pair programming, and code reviews create feedback loops that surface issues early and build shared ownership of the codebase.
  - Agile, Lean, and other people-aware methods  
    Iterative methodologies such as Scrum, Kanban, and Lean emphasize small batches, rapid delivery, and continuous improvement centered on delivering customer value.
  - Empathy in code, docs, and interface design  
    Inclusive language, accessibility features, and clear documentation ensure that software welcomes a diverse audience and minimizes confusion and frustration.

- Data
  - Definition  
    Data is recorded information—numbers, text, images, signals—that represents facts or observations. It becomes valuable when interpreted or transformed into insights, decisions, or product features.
  - Collection  
    Gathered through user input, logs, sensors, telemetry, and third-party APIs. Effective collection requires user consent, data validation, and awareness of systemic or sampling bias.
  - Use  
    Applications analyze and manipulate data for personalization, analytics, automation, and decision-making. Responsible use adheres to the principle of *data minimization*—only collect what is needed and use it with purpose.
  - Security  
    Protect data through encryption, access control, secure transport (TLS), auditing, and redundancy. Guard against leaks, tampering, and unauthorized access.
  - Storage  
    Data may reside in memory, be persisted in files, databases, or object stores. Storage choice depends on durability, volume, query patterns, latency, and consistency requirements.
  - Ethics  
    Respect user privacy, obtain informed consent, avoid manipulation, and mitigate biases. Legal frameworks like GDPR and HIPAA guide responsible collection and handling.
  - Databases
    - Early databases
      - Ancient Sumer  
        Clay tablets recorded transactions, trades, and inventories—an early example of structured data collection.
      - Linked list  
        A foundational in-memory structure in early computing where each record points to the next. Precursor to file systems and low-level databases.
    - SQL  
      Relational databases organize structured data into schemas with tables, rows, and constraints. SQL enables declarative queries, joins, and updates. Guarantees like ACID ensure transactional consistency.
    - NoSQL  
      A class of non-relational databases—document, key-value, columnar—that prioritize scalability, flexibility, and high availability. Often embrace eventual consistency (CAP theorem).
    - Other
      - Key-Value store  
        Stores arbitrary values by unique keys. Fast and simple (e.g., Redis, DynamoDB). Ideal for caching, sessions, and lookup-heavy access patterns.
      - Graph  
        Models relationships as nodes and edges (e.g., Neo4j, ArangoDB). Suited for social networks, recommendation engines, and knowledge graphs.
      - Vector  
        Stores high-dimensional embeddings for similarity search and retrieval-augmented generation (e.g., FAISS, Pinecone). Common in AI pipelines.
      - Timeseries  
        Specialized for timestamped data such as metrics, IoT signals, and logs (e.g., InfluxDB, TimescaleDB). Supports time-window queries, retention, and downsampling.

- Programming Practice
  - AI-assisted development tools  
    Services like GitHub Copilot and Tabnine suggest code, tests, and documentation. They accelerate routine tasks, but developers remain responsible for review, correctness, and ethical use.
    - Agentic  
      Experimental tools that plan and execute multi-step tasks (e.g., modifying many files to add a feature). Require strict constraints and human oversight to avoid unintended changes.
  - IDEs and development tools
    - VSCode  
      A modern, extensible editor with debugging, terminals, extensions, remote development, and collaborative coding features.
    - VIM  
      A modal, keyboard-centric editor with high speed and scriptability. Known for its steep learning curve but favored for precision and minimalism.
  - Languages
    - Type Safety  
      Type systems prevent invalid operations. Static systems (TypeScript, Rust) catch errors at compile time; dynamic systems (Python, JavaScript) detect them at runtime. Type safety avoids bugs like calling `.map()` on `undefined`.
  - Paradigms
    - Imperative/Procedural  
      Programs specify step-by-step instructions that mutate state. Common in C, Python, and shell scripting.
    - Object Orientation (OO)  
      Models systems as interacting objects encapsulating state and behavior. Enables abstraction, encapsulation, inheritance, and polymorphism.
    - Functional Programming (FP)  
      Emphasizes pure functions, immutability, and composition. Seen in Haskell, Elixir, and increasingly in JavaScript and Scala.
    - Others: Logic, Array, AI  
      - Logic programming (e.g., Prolog): rules and relationships guide inference.  
      - Array languages (e.g., APL, J): vectorized computation over data arrays.  
      - AI-centric (e.g., Lisp): symbolic manipulation and metaprogramming.
- Testing
    - Types
      - Unit  
        Tests individual functions or classes in isolation.
      - Integration  
        Tests interactions between components (e.g., API + database).
      - End-to-End (E2E)  
        Tests full user workflows through the interface (e.g., Cypress, Playwright).
      - Acceptance  
        Verifies that the system meets functional requirements and user stories.
      - Regression  
        Re-tests existing features to catch reintroduced bugs.
      - Performance (Stress/Load)  
        Measures system behavior under expected and extreme load. Includes throughput, latency, and error rates.
      - Smoke  
        Quick, high-level checks to ensure basic functionality before running full test suites.
      - Fuzzing  
        Automated testing that feeds random, unexpected, or malformed inputs to uncover crashes, memory leaks, or security vulnerabilities. Especially useful for parsers, compilers, and network protocols.
    - Approaches
      - Test-Driven Development (TDD)  
        Write failing tests before implementing code. Ensures minimal, testable design and prevents over-engineering.
      - Behavior-Driven Development (BDD)  
        Extends TDD by writing tests in natural language scenarios (Given–When–Then). Bridges communication between developers, QA, and stakeholders.
      - Domain-Driven Design (DDD) testing practices  
        Aligns tests with business domains and ubiquitous language. Encourages modeling and testing around domain concepts.
  - Package managers  
    Automate dependency installation and versioning (e.g., npm, pip, Cargo). Lockfiles ensure reproducibility. Semantic versioning helps avoid breaking changes.
  - Working with the command line  
    Shells (bash, zsh) enable scripting, task automation, and remote ops. Pipes (`|`) and redirection (`>`, `<`) combine small tools into powerful workflows.
  - Version control (Git and GitHub)  
    Git tracks changes via commits and branches. GitHub adds pull requests, issue tracking, and CI hooks. Enables collaboration, experimentation, and traceability.
  - Milestones  
    Planning checkpoints that bundle related work and align deadlines. Anchor project pacing, team focus, and stakeholder expectations.

- Full-stack architecture
  - Frontend  
    The portion of the application executed in the user’s browser. Responsible for UI rendering, interactivity, and communicating with backends.
    - Browsers
      - Document Object Model (DOM)  
        A tree representation of the HTML structure. APIs enable querying and dynamic mutation of elements.
      - Event Loop  
        Processes tasks like user input and async callbacks in a non-blocking queue. Enables smooth interactions on a single thread.
      - Separation of concerns
        - HyperText Markup Language (HTML)
          - content  
            Provides semantic structure—`<nav>`, `<article>`, `<h1>`—to help browsers and assistive tech understand document roles.
        - Cascading Style Sheets (CSS)
          - presentation  
            Specifies layout, colors, and spacing. Rules cascade and combine through specificity and inheritance.
        - JavaScript
          - interactivity  
            Adds dynamic behavior: event listeners, data binding, animations, API calls.
    - Frameworks  
      *Frontend frameworks* are intent-based abstractions that describe UIs in terms of meaning (buttons, components) rather than raw DOM operations. Instead of `document.createElement("button")`, we write `<Button>Click</Button>` and let the framework handle DOM diffing and updates.
      - Component frameworks (e.g., React, Svelte)
        - React  
          - Uses a virtual DOM: UI is declared in components returning virtual nodes. On state change, React diffs new and old trees and applies minimal DOM mutations. JSX compiles to `React.createElement` calls.
        - Svelte  
          - No virtual DOM. At build time, Svelte compiles components into imperative JavaScript that manipulates the DOM directly. Reactive declarations (`$:`) are compiled into update logic. Very low runtime overhead.
    - User experience design (UXD)  
      The process of creating intuitive, usable, and accessible interfaces through research, prototyping, and iteration.
      - Accessibility and usability (a11y)  
        Inclusive design ensures software is usable by people with disabilities. Use semantic HTML, ARIA attributes, keyboard support, and color contrast.
      - Internationalization (i18n)  
        Prepares software for localization: extract strings, support RTL scripts, format dates and currencies per locale.
    - Styling and layout systems (CSS, Tailwind, etc.)  
      Utility-first tools like Tailwind enforce design consistency. CSS Grid and Flexbox offer powerful layout primitives for responsive design.
    - Frontend build tools and bundlers  
      Tools like Webpack, Vite, and Parcel compile modern syntax (e.g., JSX, TypeScript), bundle assets, and optimize performance for deployment.
    - State management  
      Tracks and updates application data across components. Ranges from local state (React `useState`) to centralized stores (Redux, Zustand). Clear state flows simplify reasoning and debugging.
  - Backend  
    Server-side logic that handles requests, enforces rules, and connects to storage.
    - What is a server?
      - Receiving requests (request lifecycle, ports, sockets, protocols)  
        Listens on ports (e.g., 80, 443), parses incoming messages (e.g., HTTP), and routes them through middleware and handlers.
      - Sending responses (status codes, headers, payloads)  
        Sends status (`200 OK`, `404 Not Found`), headers (e.g., `Content-Type`, `Set-Cookie`), and payloads (HTML, JSON, files).
      - Sockets and connections (TCP/IP basics, HTTP, WebSockets)  
        TCP ensures reliable transport; HTTP runs atop TCP as stateless text; WebSockets upgrade HTTP for real-time, bidirectional messaging.
    - Server frameworks (introduced as abstractions solving repetitive boilerplate)  
      Express (Node), Django (Python), and Spring (Java) abstract routing, parsing, templating, and middleware—letting developers focus on logic.
    - Authentication and sessions (solving the problem of state over stateless HTTP)  
      Auth methods include cookies, JWTs, OAuth2. Sessions track user identity across requests via server memory or token validation.
    - Data access (solving structured persistence and query problems)  
      Libraries like Prisma and Sequelize map database tables to objects and provide type-safe queries and migrations.
    - Cloud
      - Scalability and concurrency (solving performance and resource management)  
        Horizontal scaling adds instances behind a load balancer. Async patterns (e.g., queues, workers) and serverless platforms handle bursty traffic.

  - Communication between Frontend and Backend
    - Protocols  
      - REST: resource-oriented, uses standard HTTP verbs.  
      - GraphQL: flexible client-defined queries.  
      - gRPC: binary protocol for typed RPC over HTTP/2.  
      - WebSockets: full-duplex streams for real-time apps.

- Hosting and deployment
  - Continuous Integration (CI)  
    Every commit triggers builds and tests, catching regressions early. Tools: GitHub Actions, GitLab CI, CircleCI.
  - Continuous Development (CD)  
    Continuous Delivery: always-ready-to-ship builds.  
    Continuous Deployment: auto-release to staging/production. Reduces friction and encourages small, frequent updates.      - Separation of concerns
        - HyperText Markup Language (HTML)
          - content  
            Provides semantic structure; tags like `<article>` or `<nav>` convey meaning to browsers and assistive technologies.
        - Cascading Style Sheets (CSS)
          - presentation  
            Controls layout, colors, and typography through selectors and cascading rules.
        - JavaScript
          - interactivity  
            Adds dynamic behavior—DOM manipulation, event handling, and network requests.
    - Frameworks  
      *Frontend frameworks* are semantic abstractions that render user interfaces into the core technologies browsers understand: HTML, CSS, and JavaScript. The abstraction is *semantic* because the code expresses meaning (a button, a list, a stateful component) rather than mechanical instructions for DOM mutation. Instead of imperative code like `document.createElement("button")`, you write a component `<Button>Click me</Button>` or `button { label: "Click me" }`.
      - Component frameworks (e.g., React, Svelte)
        - React
          - Provides a virtual DOM representation of the UI.
          - Component functions return virtual nodes (JS objects).
          - On state changes, React diffs the new virtual tree against the old and applies the minimal set of DOM mutations.
          - JSX compiles to React.createElement calls, which build the virtual DOM objects.
        - Svelte
          - No virtual DOM.
          - Compiler runs at build-time: your components are converted into minimal imperative JavaScript that directly manipulates the DOM.
          - Reactive statements ($:) are compiled into update functions.
          - Runtime overhead is very small since most work happens during compilation.
    - User experience design (UXD)  
      Crafting interfaces that are intuitive and efficient through research, prototyping, and iteration.
      - Accessibility and usability (a11y)  
        Ensures people with disabilities can perceive, navigate, and interact—using semantic HTML, ARIA roles, and keyboard support.
      - Internationalization (i18n)  
        Designing for multiple languages, locales, and writing directions; extract strings and format dates, numbers, and currencies appropriately.
    - Styling and layout systems (CSS, Tailwind, etc.)  
      Utility-first frameworks and design systems provide consistent, responsive styling; CSS Grid and Flexbox enable advanced layouts.
    - Frontend build tools and bundlers  
      Tools like Webpack, Vite, and Parcel transpile modern syntax, optimize assets, and bundle modules for efficient delivery.
    - State management  
      Techniques for handling application data over time, from local component state to centralized stores (Redux, Zustand). Predictable state flows ease debugging and testing.
  - Backend  
    Server-side logic that processes requests, enforces business rules, and interfaces with data stores.
    - What is a server?
      - Receiving requests (request lifecycle, ports, sockets, protocols)  
        Servers listen on ports, parse protocols like HTTP, and dispatch requests through middleware or handlers.
      - Sending responses (status codes, headers, payloads)  
        Responses include metadata (headers), status codes indicating outcome, and bodies containing HTML, JSON, or binary data.
      - Sockets and connections (TCP/IP basics, HTTP, WebSockets)  
        TCP provides reliable byte streams; HTTP is stateless atop TCP; WebSockets upgrade connections for bidirectional communication.
    - Server frameworks (introduced as abstractions solving repetitive boilerplate)  
      Frameworks such as Express, Django, and Spring supply routing, middleware, and templating, allowing focus on domain logic.
    - Authentication and sessions (solving the problem of state over stateless HTTP)  
      Techniques like cookies, tokens, OAuth, and session stores maintain user identity and context across requests.
    - Data access (solving structured persistence and query problems)  
      ORMs and query builders (Sequelize, Prisma) abstract database interactions, enforce schemas, and handle migrations.
    - Cloud
      - Scalability and concurrency (solving performance and resource management)  
        Horizontal scaling replicates services behind load balancers; asynchronous I/O and worker queues maximize throughput.
  - Communication between Frontend and Backend
    - Protocols  
      REST uses resource-oriented endpoints; GraphQL provides flexible queries; gRPC and WebSockets enable streaming and low-latency interactions.
- Hosting and deployment
  - Continuous Integration (CI)  
    Automatically builds and tests code on each change, catching integration issues early.
  - Continuous Development (CD)  
    Also known as Continuous Delivery/Deployment. Pipelines package and release software to staging or production with minimal manual steps.
