# Course Material

- People  
  People are the users and teammates who interact with software throughout its life cycle. Understanding their goals and constraints guides feature choices and code structure. Empathy turns requirements into user-centered solutions and fosters productive collaboration. Clear communication and respect for future maintainers keep systems healthy.
  - Why we build software: serving real people  
    Software exists to solve human problems. Every feature should address a user need. Personas (fictional user types), user stories (narrative feature descriptions), and usability studies help teams stay focused on delivering value.
    - [Nielsen Norman Group: User Needs](https://www.nngroup.com/topic/user-needs/) Research-based UX principles. [Free][B–I]
    - [Usability.gov: User-Centered Design Basics](https://www.usability.gov/what-and-why/user-centered-design.html) Overview of user-focused design. [Free][B]
  - Working with other humans (including future you)  
    Code is read more than it is written. Clear naming, thoughtful comments, and well-scoped tests help teammates—and your future self—understand, maintain, and evolve the system.
    - [Google Engineering Practices: Code Review](https://google.github.io/eng-practices/) Practical guidance on writing and reviewing code. [Free][I]
    - [Clean Code (Robert C. Martin)](https://www.oreilly.com/library/view/clean-code/9780136083238/) Naming, readability, maintainability. [Paid][B–I]
  - Communication, feedback, collaboration  
    Stand-ups, design docs, pair programming, and code reviews create feedback loops that surface issues early and build shared ownership of the codebase.
    - [Atlassian: Agile Team Practices](https://www.atlassian.com/agile) On standups, retros, and team culture. [Free][B]
    - [Software Engineering at Google](https://abseil.io/resources/swe-book) Focus on communication, process, culture. [Paid][I–A]
  - Agile, Lean, and other people-aware methods  
    Iterative methodologies such as Scrum, Kanban, and Lean emphasize small batches, rapid delivery, and continuous improvement centered on delivering customer value.
    - [Scrum Guide](https://scrumguides.org/) Official Scrum framework. [Free][B–I]
    - [Kanban Guide](https://kanban.university/) Overview of Kanban. [Free][B–I]
    - [Lean Software Development (Mary & Tom Poppendieck)](https://www.oreilly.com/library/view/lean-software-development/0321150783/) Lean principles applied to software. [Paid][I]
  - Empathy in code, docs, and interface design  
    Inclusive language, accessibility features, and clear documentation ensure that software welcomes a diverse audience and minimizes confusion and frustration.
    - [Inclusive Design Principles](https://inclusivedesignprinciples.org/) Checklist for inclusive software. [Free][B–I]
    - [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) Clarity, inclusivity, consistency. [Free][B–I]

- Data  
  Data is any observed fact that software stores or processes. It fuels features, analytics, and personalization across the stack. Handling data responsibly ensures accuracy, privacy, and useful insights. Poor data practices can mislead decisions and erode user trust.
  - Collection  
    Gathered through user input, logs, sensors, telemetry, and third-party APIs. Effective collection requires user consent, data validation, and awareness of systemic or sampling bias.
    - [Khan Academy: Data Collection and Sampling](https://www.khanacademy.org/math/statistics-probability/designing-studies) Basics of bias and sampling. [Free][B]
    - [Google Analytics Academy](https://analytics.google.com/analytics/academy/) How web data is gathered and interpreted. [Free][B–I]
  - Use  
    Applications analyze and manipulate data for personalization, analytics, automation, and decision-making. Responsible use adheres to the principle of data minimization—only collect what is needed and use it with purpose.
    - [Principle of Data Minimization (GDPR)](https://gdpr-info.eu/issues/data-minimization/) Legal foundation. [Free][I]
    - [Designing Data-Intensive Applications (Kleppmann)](https://dataintensive.net/) Modern bible on data systems and use. [Paid][I–A]
  - Security  
    Protect data through encryption, access control, secure transport (TLS), auditing, and redundancy. Guard against leaks, tampering, and unauthorized access.
    - [OWASP Top 10](https://owasp.org/Top10/) Most common risks and mitigations. [Free][B–I]
    - [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) National standards for secure data handling. [Free][I–A]
  - Storage  
    Data may reside in memory, be persisted in files, databases, or object stores. Storage choice depends on durability, volume, query patterns, latency, and consistency requirements.
    - [Stanford Online: Intro to Databases](https://online.stanford.edu/courses/sohs-ystats-introduction-databases) Fundamentals of persistence. [Free][B–I]
    - [PostgreSQL Docs](https://www.postgresql.org/docs/) Authoritative reference. [Free][I–A]
  - Ethics  
    Respect user privacy, obtain informed consent, avoid manipulation, and mitigate biases. Legal frameworks like GDPR and HIPAA guide responsible collection and handling.
    - [Our World in Data: Data Ethics](https://ourworldindata.org/ethics-of-data) Discussion of data and fairness. [Free][B–I]
    - [ACM Code of Ethics](https://www.acm.org/code-of-ethics) Professional guidelines. [Free][I]
  - Databases  
    Databases persist and organize data so applications can query and update it efficiently.
    - Early databases  
      Early approaches to organizing and storing data.
      - [History of Databases](https://cs.stanford.edu/people/eroberts/courses/soco/projects/1998-99/databases/history.html) Early models. [Free][B]
    - SQL  
      Relational databases organize structured data into schemas with tables, rows, and constraints. SQL enables declarative queries, joins, and updates. Guarantees like ACID ensure transactional consistency.
      - [SQLBolt](https://sqlbolt.com/) Interactive SQL lessons. [Free][B]
      - [Mode SQL Tutorial](https://mode.com/sql-tutorial/) Practical examples. [Free][B–I]
    - NoSQL  
      A class of non-relational databases—document, key-value, columnar—that prioritize scalability, flexibility, and high availability. Often embrace eventual consistency (CAP theorem).
      - [MongoDB University](https://learn.mongodb.com/) Vendor-hosted but strong fundamentals. [Free][B–I]
    - Other  
      Specialized data stores for particular models and workloads.
      - [Redis University](https://university.redis.com/) Key-value data. [Free][B–I]
      - [Neo4j GraphAcademy](https://graphacademy.neo4j.com/) Graph models. [Free][B–I]
      - [TimescaleDB Docs](https://docs.timescale.com/) Time-series data. [Free][I]
      - [FAISS GitHub](https://github.com/facebookresearch/faiss) Vector search engine. [Free][A]

- Programming Practice  
  Programming practice encompasses the habits and tools developers use to craft and maintain code. Strong practice reduces defects, keeps code readable, and supports collaboration across the stack.  
  - [The Pragmatic Programmer, 20th Anniversary Edition](https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/) Broad, language-agnostic craft. [Paid][B–I]  
  - [Refactoring, 2nd ed. Fowler](https://martinfowler.com/books/refactoring.html) Proven refactoring catalog. [Paid][I]  
  - [Code Complete, 2nd ed. McConnell](https://www.oreilly.com/library/view/code-complete-2nd/0735619670/) Software construction fundamentals. [Paid][B–I]  
  - [Google Engineering Practices](https://google.github.io/eng-practices/) Style and review guidelines. [Free][I]  
  - AI-assisted development tools  
    Services like GitHub Copilot and Tabnine suggest code, tests, and documentation. They accelerate routine tasks, but developers remain responsible for review, correctness, and ethical use.
    - [GitHub Copilot](https://docs.github.com/en/copilot) AI pair programmer. [Paid][I]
    - [Tabnine Docs](https://docs.tabnine.com/) Privacy-first autocomplete. [Free/Paid][I]
    - [AGENTS.md](https://agents.md/) Experimental catalog of AI-agentic practices. [Free][I]
  - IDEs and development tools  
    - [VS Code Docs](https://code.visualstudio.com/docs) Feature-rich modern IDE. [Free][B–I]  
    - [Vim Documentation](https://www.vim.org/docs.php) Minimalist, scriptable editor. [Free][I–A]  
  - Languages  
    Type systems prevent invalid operations. Static systems (TypeScript, Rust) catch errors at compile time; dynamic systems (Python, JavaScript) detect them at runtime. Type safety avoids bugs like calling `.map()` on `undefined`.
    - [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) Official docs. [Free][B–I]
    - [Total TypeScript](https://www.totaltypescript.com/) Workshops and exercises. [Paid][I–A]
    - [Effective TypeScript](https://effectivetypescript.com/) Pragmatic usage guide. [Paid][I–A]
  - Paradigms  
    - [Structure and Interpretation of Computer Programs](https://sarabander.github.io/sicp/html/index.xhtml) Classic introduction. [Free][I]  
    - [Functional Programming in JavaScript (Kyle Simpson, Frontend Masters)](https://frontendmasters.com/courses/functional-js/) [Paid][I]  
  - Package managers  
    Package managers install and track external libraries that applications depend on. They standardize environments so builds are repeatable across machines and deployments. In full stack projects, package managers streamline setup and help avoid dependency conflicts. Tools also surface security and licensing issues early.
    - [npm Docs](https://docs.npmjs.com/) Official reference. [Free][B–I]
    - [Yarn Docs](https://yarnpkg.com/getting-started) Alternative package manager. [Free][B–I]
    - [pnpm Docs](https://pnpm.io/motivation) Efficient, monorepo-friendly. [Free][I]
  - Working with the command line  
    The command line is a text-based interface for controlling a computer. It enables automation, remote management, and efficient execution of developer tools. Mastering shells and scripting streamlines tasks like builds, deployments, and data processing. Familiarity with pipes (`|`) and redirection (`>`, `<`) encourages composing small programs into powerful workflows.
    - [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line) Concise field guide. [Free][B–I]
    - [explainshell](https://explainshell.com/) Breaks down shell commands. [Free][B]
  - Version control (Git and GitHub)  
    Version control records changes to code so developers can collaborate and revert with confidence. Git's branching model supports experimentation without risking main code paths. GitHub adds pull requests, issue tracking, and continuous integration hooks that align teams. Using version control rigorously ensures traceability and simplifies code reviews.
    - [Pro Git](https://git-scm.com/book/en/v2) Free comprehensive book. [Free][B–A]
    - [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials) Practical workflows. [Free][B–I]
    - [GitHub Skills](https://skills.github.com/) Interactive GitHub modules. [Free][B]
  - Milestones  
    Milestones are planned checkpoints that group related work toward a goal. They give teams intermediate targets, enabling feedback and course corrections. In full stack projects, milestones synchronize frontend and backend schedules and communicate progress to stakeholders. Clear milestones help manage scope and maintain momentum.
    - [Agile Alliance: Iterations](https://www.agilealliance.org/glossary/iteration/) On milestones and iteration planning. [Free][B–I]

- Security  
  Security is the discipline of defending software and data against misuse and damage.
  - Principles  
    Foundational concepts like the CIA triad and least privilege guide secure system design.
    - [CIA Triad Explained](https://csrc.nist.gov/glossary/term/cia-triad) NIST definitions. [Free][B]
    - [Least Privilege (OWASP)](https://owasp.org/www-community/Least_privilege) [Free][B–I]
  - Common Threats  
    Typical attack vectors such as injection, cross-site scripting, and supply chain risks.
    - [OWASP Top 10](https://owasp.org/Top10/) [Free][B–I]
    - [PortSwigger Web Security Academy](https://portswigger.net/web-security) Interactive labs. [Free][I–A]
  - Practices  
    Secure coding guidelines, cryptography, and proper secrets management help protect applications.
    - [MDN Web Docs: Security](https://developer.mozilla.org/en-US/docs/Web/Security) Secure coding guidance. [Free][B–I]
    - [NIST Crypto Guidelines](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines) [Free][A]
  - Secure Development Lifecycle  
    Processes like threat modeling and security testing integrated into each development phase.
    - [Microsoft SDL](https://learn.microsoft.com/en-us/security/sdl/) [Free][I–A]

- Testing  
  Testing verifies that code behaves as intended.  
  - [Google Testing Blog](https://testing.googleblog.com/) Real-world practices. [Free][I–A]  
  - [Cypress Docs](https://docs.cypress.io/) Browser E2E testing. [Free][B–I]
  - [Playwright Docs](https://playwright.dev/) Cross-browser testing. [Free][B–I]
  - [Martin Fowler: Test Doubles](https://martinfowler.com/bliki/TestDouble.html) Core concepts. [Free][I]
  - Performance testing
    Measures an application's speed and responsiveness under load.
    - [WebPageTest Docs](https://docs.webpagetest.org/) Tools for benchmarking web speed. [Free][B–I]
    - [Google Web Vitals](https://web.dev/vitals/) Key metrics for fast sites. [Free][B–I]
  - Accessibility testing
    Verifies that interfaces work for people with disabilities and meet standards like WCAG.
    - [W3C WAI: Evaluate Accessibility](https://www.w3.org/WAI/test-evaluate/) Techniques and tools. [Free][B–I]
    - [Deque axe DevTools](https://www.deque.com/axe/devtools/) Automated accessibility audits. [Free][B–I]
  - Usability testing
    Observes real users to discover UX issues and improve ease of use.
    - [Nielsen Norman Group: Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) Overview and best practices. [Free][B]
    - [Usability.gov: Conducting Usability Testing](https://www.usability.gov/how-to-and-tools/methods/usability-testing.html) Step-by-step guide. [Free][B]

- Full-stack architecture  
  Full-stack architecture describes how client interfaces, server logic, and data storage combine.  
  - [System Design Primer](https://github.com/donnemartin/system-design-primer) [Free][I–A]  
  - [The Twelve-Factor App](https://12factor.net/) [Free][B–I]  
  - [Martin Fowler: Microservices & Architecture](https://martinfowler.com/architecture/) [Free][I–A]  

- Hosting and deployment  
  Hosting and deployment cover running applications.  
  - [Vite Docs](https://vitejs.dev/guide/) [Free][B–I]  
  - [Webpack Docs](https://webpack.js.org/concepts/) [Free][I]  
  - [Parcel Docs](https://parceljs.org/getting-started/webapp/) [Free][B]  
  - [GitHub Actions Docs](https://docs.github.com/en/actions) CI/CD pipelines. [Free][I]
