# Course Material

- People
  - Why we build software: serving real people  
    Software exists to solve human problems; every feature should address a user need. Personas, user stories, and usability studies keep teams focused on delivering value.
  - Working with other humans (including future you)  
    Code is read more than it is written. Clear naming, comments, and tests help teammates—and your future self—understand and maintain the system.
  - Communication, feedback, collaboration  
    Stand-ups, design docs, pair programming, and code reviews create feedback loops that surface issues early and build shared ownership.
  - Agile, Lean, and other people-aware methods  
    Iterative methodologies such as Scrum, Kanban, and Lean emphasize small batches, rapid delivery, and continuous improvement aligned with customer value.
  - Empathy in code, docs, and interface design  
    Inclusive language, accessibility features, and thoughtful documentation ensure software welcomes a diverse audience and minimizes friction.
- Data
  - Definition  
    Data is recorded information—numbers, text, images—that represents facts or observations. It becomes valuable when transformed into insights or features.
  - Collection  
    Gathered through user input, sensors, logs, and third-party APIs. Effective collection requires consent, validation, and awareness of bias.
  - Use  
    Applications analyze and manipulate data for personalization, analytics, and decision making while honoring the principle of minimal, purpose-driven usage.
  - Security  
    Protecting confidentiality, integrity, and availability through encryption, access control, auditing, and secure transport protocols.
  - Storage  
    Data may be transient in memory or persisted to files, databases, or cloud object stores. Choice depends on volume, access patterns, and consistency needs.
  - Ethics  
    Respect privacy, obtain informed consent, and mitigate harmful biases. Regulations such as GDPR or HIPAA guide responsible data handling.
  - Databases
    - Early databases
      - Ancient Sumer  
        Clay tablets recorded inventories and trades, illustrating humanity’s long-standing need to track data.
      - Linked list  
        An early in-memory structure where each record points to the next; foundational for many file systems and databases.
    - SQL  
      Relational databases organize data into structured tables with schemas. SQL queries allow declarative data manipulation and support ACID transactions.
    - NoSQL  
      A family of databases—document, key-value, columnar—that favors scalability and flexible schemas, often embracing eventual consistency.
    - Other
      - Key-Value store  
        Stores arbitrary values indexed by unique keys (e.g., Redis, DynamoDB). Ideal for caching and session data.
      - Graph  
        Represents entities and relationships as nodes and edges (e.g., Neo4j). Enables traversal queries like social network analysis.
      - Vector  
        Persists high-dimensional embeddings used for similarity search and retrieval-augmented generation (e.g., FAISS, Pinecone).
      - Timeseries  
        Optimized for timestamped data such as metrics or IoT readings (e.g., InfluxDB). Supports windowed queries and retention policies.
- Programming Practice
  - AI-assisted development tools  
    Services like GitHub Copilot and Tabnine suggest code, tests, and documentation, accelerating routine tasks while leaving humans responsible for review and design decisions.
    - Agentic  
      Emerging tools that plan and execute multi-step changes autonomously. They require clear constraints and human oversight to avoid unintended modifications.
  - IDEs and development tools
    - VSCode  
      Extensible editor with debugging, terminals, and a rich extension marketplace. Supports remote development and real-time collaboration.
    - VIM  
      Modal, keyboard-centric editor known for speed and scriptability. Plugins and dotfiles tailor it from minimalism to full IDE.
  - Languages
    - Type Safety  
      Ensures operations on data are valid. Static systems (TypeScript, Rust) catch errors at compile time; dynamic checks (Python, JavaScript) validate at runtime.
  - Paradigms
    - Imperative/Procedural  
      Programs specify step-by-step commands that mutate state. Common in C, Python scripts, and shell programs.
    - Object Orientation (OO)  
      Models software as interacting objects encapsulating state and behavior. Supports abstraction, inheritance, and polymorphism.
    - Functional Programming (FP)  
      Emphasizes pure functions, immutability, and higher-order composition. Seen in Haskell, Elixir, and increasingly in JavaScript and Java.
    - Others: Logic, Array, AI  
      Logic programming (Prolog) expresses relationships and rules; array languages (APL, J) operate on whole data sets; AI-centric languages (Lisp) enable symbolic processing.
  - Testing
    - Types
      - Unit  
        Validates individual functions or classes in isolation.
      - Integration  
        Checks that components work together, such as a controller calling a database.
      - End-to-End (E2E)  
        Exercises complete user workflows through the full stack using tools like Cypress.
      - Acceptance  
        Verifies that the system meets business requirements, often expressed as user stories.
      - Regression  
        Re-runs prior tests to ensure new changes do not reintroduce old bugs.
      - Performance (also known as Stress/Load)  
        Measures responsiveness and stability under expected and extreme demand.
      - Smoke  
        Quick, shallow tests that confirm basic functionality before deeper suites run.
  - Package managers  
    Automate fetching and versioning of third-party libraries (npm, pip, Cargo). Lockfiles and semantic versioning make builds reproducible.
  - Working with the command line  
    Shells (bash, zsh) enable scripting, automation, and remote management; pipes and redirection compose small tools into powerful workflows.
  - Version control (Git and GitHub)  
    Git records changes as commits and branches. Platforms like GitHub add pull requests, issue tracking, and integration hooks.
  - Milestones  
    Planned checkpoints that bundle features and deadlines, guiding progress and aligning engineering work with stakeholder expectations.
- Full-stack architecture
  - Frontend  
    The portion of the application executed in the user's browser, translating data into interactive views.
    - Browsers
      - Document Object Model (DOM)  
        Tree representation of HTML that can be queried and updated via APIs.
      - Event Loop  
        Handles user events, network callbacks, and rendering on a single thread without blocking.
      - Separation of concerns
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
