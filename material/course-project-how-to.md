# How to Build Your Project  

This is a very rough guide, but is an initial plan for the future.

Given a range, e.g. Week 36-38, begin thinking about and learning the topic during the first week (e.g. 36), and try to have all submissions completed by the last week (e.g. the last day of week 38)

---

## Week 36: Basic platform setup  

- Set up your development platform and boilerplate project.  
- Early deployment avoids surprises later.  
- Make sure your GitHub repo and Netlify deployment are working from day one, even if the app is just “Hello World.”  

- [ ] Submit the project repository  
- [ ] Submit the working production URL  

---

## Week 36-37: Conceive the project  

All projects start with an idea. The best start with 99 ideas.

- Look around at projects of similar scope.  
  - What makes them successful? Where do they fall short?  
- Brainstorm on your own. Brainstorm with classmates. Brainstorm with AI.
  - Generate 20 absurd, dumb, ridiculous, weird, strange, impractical ideas.  ideas.
  - Hear from your classmates 200 weird, strange, impractical ideas.
  - Don't judge. Be creative. Just write them all down.
- Talk with classmates, friends, or potential users about these ideas.
  - Listen carefully. If they laugh, that might be a good idea.
- Try short interviews with potential users — ask about their problems without pitching your plan.  
- From your list, narrow down to one idea.
  - Refine it. Iterate.  
  - Ask for feedback (from me, from peers, from strangers if possible).
  - When it is a single, well-defined purpose that hopefully delights you and your classmates,
  - ... this is your project.

- [ ] Submit all of your ideas, as well you a paragraph or two about why you choose the one you did.
- [ ] You will need my approval for this idea.

---

## Week 36–38: Describe the project  

A good description keeps development oriented and focused. Start by clarifying the big picture.  

- Create a README file in the root directory of your project.
  - Name the project.  
  - Describe it clearly and directly.  
    - Avoid marketing speak or buzzwords.  
    - Use the present tense.  
      - ☒ “This application will help users identify animals.”  
      - ☑ “This application helps users identify animals.”

- Your description should explain in simple, straightforward, declarative language:  
  - What does the application do?
  - What is its single, well-defined purpose?
  - What problem does the project solve, if any?
  - Who is it for?
  - What is *not* in scope (non-goals)?
  - If it is similar to other projects, how is it different?

This description is often called a *Vision Statement*

**Submission**  

- [ ] Submit your README URL

---

## Week 36–39: Design the User Experience  

All applications are an *experience* of some sort for their users. What sort of experience will your users have? Successful projects center the user's needs.  

- Think about how users will achieve the main purpose of the software.  
- Start with paper and pencil: draw wireframes, arrows, and flows.  
  - Eventually, you might use tools like <https://draw.io> or <https://excalidraw.com>  
- Make a paper mockup. Ask potential users to perform specific tasks with it. Observe, note problems, and ask about their experience.  
- Sketch the UX flow. Add these sketches to your documentation.  
- Describe the User Experience for your app clearly and directly.  
  - Avoid marketing speak or buzzwords.  
  - Use the present tense.  
    - ☒ “This application will help users identify animals.”  
    - ☑ “This application helps users identify animals.”  

- [ ] Create a `UXD.md` document in a `/docs` folder, include linked images, and submit its GitHub URL  

---

## Week 37–39: Data Model draft  

Every application moves and shapes data. At this stage, focus on **how data flows through your app** and, if useful, how it is stored. This will make later design and coding decisions clearer.  

- Think about the **flow of data** in your application. For example:  
  - A user enters data in the UI → request goes to server → server transforms or checks it → data is stored → later retrieved → displayed back to the user.  
- Create a **Data Flow Diagram (DFD)** to illustrate these steps. Use boxes, arrows, and labels to make it understandable. Hand-drawn or digital is fine.  
- If your project uses a relational database, also make an **Entity Relationship Diagram (ERD)** to show the main entities (tables), their attributes (columns), and relationships. If not, you can skip the ERD.  
- Keep the diagrams simple. They are drafts to show your current thinking, not final truth.  
- Use your UX sketches as a guide, and refine them as you go.  
- Talk through your diagrams with others and adjust.  

**Submission**  

- [ ] Add your diagrams (images or PDF) to `/docs/DATA_MODEL.md` with a short description.  

---

## Weeks 37–40: Persistence layer

Every project needs to explain where its data lives. Start with a **Data Flow Diagram (DFD)**, then document the form of persistence your app uses.  

### Step 1: Make a DFD (required for all projects)

- Show how data moves: User → UI → API → storage or external service → back.  
- Include one unhappy path (e.g. validation error).  
- Add the diagram to `/docs/DATA_MODEL.md`.  

### Step 2: Document your persistence  

Your DFD will reveal one of three cases:  

#### Case A: Database (SQL or NoSQL)  

- If relational (Supabase/Postgres): draw an **ERD** with tables, keys, and relationships.  
- If document (MongoDB): write small **example documents** for each main collection.  
- Add a short note on any key constraints or indexes.  

#### Case B: External API only  

- If your app doesn’t store data itself, list the **external APIs** you depend on.  
- For each, include:  
  - the endpoints you will call,  
  - what data comes back (shape of the response),  
  - any errors you must handle.  

#### Case C: Frontend-only storage  

- If you use localStorage, IndexedDB, or in-memory state as persistence:  
  - List what you store (keys and value shape).  
  - Note how long it lasts (session, until cleared, etc.).  
  - Explain why local storage is enough for your project.  

### Step 3: Link to your API  

For at least one core resource, describe how data flows end-to-end:  

- UI input → storage/API → response → UI update.  
Write this in 5–8 lines of text inside `/docs/PERSISTENCE.md`.  

---

**Deliverables**  

- `/docs/DATA_MODEL.md` — your DFD.  
- `/docs/PERSISTENCE.md` — one of:  
  - ERD or document schema (if DB),  
  - API notes (if external API),  
  - local storage notes (if frontend-only).

---

## Week 38–40: Architecture document  

Now move from thinking about *data* to thinking about the *system as a whole*. Architecture describes the **big pieces** of your application, how they connect, and how users and data flow through them.  

- Create a **Context Diagram**: show your app as a box, with users and any external systems (like APIs) around it, and arrows for interactions.  
- Create a **Container Diagram**: break your app into its main pieces (frontend/client, backend/API, database, external services). Show how they connect.  
- List the **Resources and Operations (CRUD)** your app will need. For example: *Tasks → create, read, update, delete*.
- (Optional) Create a **Sequence Diagram** for one core use case (e.g. user logs in, backend checks DB, returns session).  
- (Optional) Create a **Component Diagram** for one container (like your backend). Show the main modules or components and how they depend on each other.  
- Keep diagrams simple: boxes and arrows, hand-drawn or digital, with short labels.  

**Submission**  

- [ ] Add your diagrams and notes to `/docs/ARCHITECTURE.md`  
  
**Glossary (plain language)**  

- **Context Diagram**: Big-picture view. Shows your app, the users, and outside systems, and how they connect.  
- **Container Diagram**: Shows the main pieces inside your app (like frontend, backend, database) and how they talk to each other.  
- **Component Diagram**: Shows how one piece (like the backend) is broken down into smaller modules.  
- **Sequence Diagram**: Shows the order of steps in a single use case, like a timeline of messages between user, frontend, backend, and database.  
- **CRUD**: Create, Read, Update, Delete — the four basic operations you can do with stored data.  

---

## Week 38–40: UI wireframe  

- Now return to the presentation layer. This is how users interact with the data and operations you’ve defined.  
- Using your UX work as a foundation:  
  - Decide how actions should look (delete with a trash icon? confirm with a dialog?).  
  - Think about how pages, panels, and buttons are organized.  
  - Identify different application *states*: login, loading, error, success.  
- Tools: paper, whiteboard, Figma, <https://wireframe.cc> — whatever lets you move quickly.  
- Focus on structure, not polish. Treat the wireframe as a visual map of how your app works.  
- Mark components that share data, that change state, or that depend on responses from the server.  

- [ ] Create and upload `/docs/UI.md` and associated image files  
- [ ] Submit its GitHub URL  

---

## Week 38–40: Application Programming Interface (API) design  

An API is the way that a client *interfaces* with the server. Using your Data Model documentation and your Architectural document, begin deciding how the client will tell the server what to do. For your sanity, use REST as a working paradigm. Begin the design of your API in step with the conceptual design of your frontend. Think about how they will interact.  

- Write down what *resources* your app manipulates: tasks, posts, images, etc.  
- For each:  
  - Define the operations (read, create, update, delete).  
  - Describe requests (URL, method, parameters).  
  - Describe responses (status codes, JSON shape).  
- Include example requests and responses.  
- Decide how errors are reported.  
- Document this design before you code.  

**Submission**  

- [ ] Upload and submit `/docs/API.md` (that may have a link to an OpenAPI3 file)  

---

## Week 39–41: Visual design  

- Add visual identity to your wireframe.  
- Choose simple typography, color, and spacing. Keep usability first.  
- Consider accessibility: contrast, legible fonts, colorblind-safe palettes.  
- Apply the design to a few key screens.  
- Share your designs and ask: “is this clear at a glance?”
- Design frameworks can help

- [ ] Upload and submit `/docs/VISUAL.md` with any images, and descriptions of the design and its intent  

---

## Week 39–43: Implement the User Interface  

Iterate between the API implementation and UI implementation.  

- Begin building real Svelte components from your wireframes and designs.  
- Start with layout and navigation. Add interactive elements connected to mock data.  
- Build reusable components where possible.  
- Implement basic states (loading, error, empty).  
- Deploy regularly — don’t wait until the UI is “done.”  

- [ ] Describe your progress and struggles in your weekly reports  
- [ ] Code reviews  

---

## Week 39–43: Implement the API (backend)  

Using Netlify functions as REST resource endpoints, begin accepting requests from the UI and sending responses.  

- Build the routes you planned.  
- Start small — one route working end-to-end — then expand.  
- Connect to your persistence layer (database, API, or mock).  
- Validate input, return consistent responses.  
- Handle errors gracefully.  
- Test endpoints with Postman or curl before hooking up the frontend.  

- [ ] Describe your progress and struggles in your weekly reports  
- [ ] Code reviews  

---

## Week 39–47: Core feature end-to-end  

- Connect the frontend to the backend.  
- Build the single most important feature of your app fully:  
  - UI → API → storage → API → UI.  
- Replace mock data with real data.  
- Confirm loading, error, and empty states appear correctly.  
- Have another person use your app for the core task without guidance.  

- [ ] Describe your progress and struggles in your weekly reports  
- [ ] Code reviews  

---

## Week 46-48: Minimum Viable Product (MVP) completed  

Congratulations! This is what you have been working towards.  

- Your app’s main purpose now works on production.  
- The flow is usable: no dead ends, no glaring bugs in the core path.  
- Document setup and usage in the README.  
- Add screenshots or a demo clip.  
- Verify the app works on multiple devices/browsers.  
- This is not “final” but shows your concept clearly.  

- [ ] Submit your repo  
- [ ] Submit your production URL  
- [ ] Ensure that the repo source builds and deploys the product  

---

## Week 47–49: Presentations  

Show your classmates what you have been doing all this time!  

- Prepare a short live demo.  
- Show the core feature working end-to-end.  
- Explain briefly: what problem does this app solve? how do users accomplish that?  
- Highlight one or two design or technical choices.  
- Enjoy your colleagues’ project demos. Ask questions. Compliment.  

---

## Week 47–49: Peer Evaluations  

- You will evaluate 3 or 4 projects.  
  - You will be graded on the quality of your evaluations.  
- Evaluations consider:  
  - Originality and scope  
  - Functionality of the MVP  
  - Code and commit hygiene  
  - Documentation and presentation  
- Feedback will focus on both strengths and areas to improve for future work.
