# How to Build Your Project  

This guide gives you a sense of the steps involved in taking an idea from concept to a working application.  
It is deliberately rough: lectures, seminars, and readings will add depth.  
Think of this document as a roadmap. It shows the terrain, but you’ll fill in the details as you travel.  

Each phase occurs over a period of time, concurrent with other phases. You won't complete one before moving onto the next, but will rather be working on several tasks in concert with each other.

---

## Week 37: Basic platform setup  

- Set up your development platform and boilerplate project.  
- Make sure your GitHub repo and Netlify deployment are working from day one, even if the app is just “Hello World.”  
- Early deployment avoids surprises later.
- [] submit the project repository
- [] submit the working production URL

---

## Week 37 and 38: Conceive the project

All successful projects start with an idea.

- Look around at projects of similar scope.  
  - What makes them successful? Where do they fall short?  
- Brainstorm several possible ideas of your own. Don’t judge them yet.  
- Talk with classmates, friends, or potential users. Listen carefully.  
- Try short interviews with potential users — ask about their problems without pitching your plan.  
- From your list, narrow down to one idea. This is your project.  
  - Refine it. Iterate.  
  - Ask for feedback (from me, from peers, from strangers if possible).  
- [] Submit related assignments

---

## Week 37–39: Describe and document the project  

A good description keeps development oriented and focused.

- Create a README in your project repo that explains your project in simple, declarative language.  
  - Name the project.  
  - Describe it clearly and directly.  
    - Avoid marketing speak or buzzwords.  
    - Use the present tense.  
      - ☒ “This application will help users identify animals.”  
      - ☑ “This application helps users identify animals.”  
- Your README should answer:  
  - What does the application do?  
  - What is its single, well-defined purpose?  
  - Who is it for?  
  - If it is similar to other projects, how is it different?  

- [] Submit your README URL

---

## Week 37-40: Design the User Experience  

All applications are an *experience* of some sort for their users. What sort of experience will your users have? Successful projects center the user's needs.

- Think about how users will achieve the main purpose of the software.  
- Start with paper and pencil: draw wireframes, arrows, and flows.  
  - Eventually, you might use a tool like <https://draw.io>
- Make a paper mockup. Ask potential users to perform specific tasks with it. Observe, note problems, and ask about their experience.  
- Sketch the UX flow. Add these sketches to your documentation.
- Describe the User Experience for your app clearly and directly.
  - Avoid marketing speak or buzzwords.  
  - Use the present tense.  
    - ☒ “This application will help users identify animals.”  
    - ☑ “This application helps users identify animals.”  

- [] Create a UXD.md document in a `/docs` folder, include linked images, and submit its GitHub URL.
- [] Submit its GitHub URL.

---

## Week 38-40: Data Model draft

In some sense, all applications manipulate and present *data*, and that is all they do. If you think deeply about how data flow and manipulation happens in your project, then downstream technical decisions become easier.

- Imagine how data flows through your application, from input to storage to presentation.  
- There is no single “correct” answer — this is about exploring possibilities.  
- Ask:  
  - What is the main data your app creates or uses? (e.g. cities, pictures, scores)  
  - Where does the data come from? (user input, APIs, uploads, etc.)  
  - How is the data displayed to the user?  
  - What operations need to happen: filtering, sorting, updating, deleting?  
  - Does the data need to be stored? How much? How secure?  
- Draw diagrams to show your thinking. Label arrows and flows.  
- Use your UX sketches as a guide, and refine them as you go.  
- Talk through your ideas with others and adjust.

- [] Create and upload to your repo a `/docs/DATA_MODEL.md` file.
- [] Submit its GitHub URL.

---

## Week 39-41: Architecture document  

- Move from data to “behind the scenes” design.  
- Ask yourself:  
  - Does the app need search or filtering?  
  - Will users modify or update data?  
  - Should the data persist when users return later?  
  - Do CRUD operations apply?  
  - Where do these operations run — client, server, or both?  
  - Does the project fit a REST style? If so, what are its *resources*?  
- Write this down as your first architecture draft.  

- [] Create and upload `/docs/ARCHITECTURE.md`
- [] Submit its GitHub URL.

---

## Week 39-41: UI wireframe  

- Now return to the presentation layer. This is how users interact with the data and operations you’ve defined.  
- Using your UX work as a foundation:  
  - Decide how actions should look (delete with a trash icon? confirm with a dialog?).  
  - Think about how pages, panels, and buttons are organized.  
  - Identify different application *states*: login, loading, error, success.  
- Tools: paper, whiteboard, Figma — whatever lets you move quickly.  
- Focus on structure, not polish. Treat the wireframe as a visual map of how your app works.  
- Mark components that share data, that change state, or that depend on responses from the server.  

- [] Create and upload `/docs/UI.md` and associated image files.
- [] Submit its GitHub URL.

---

## Week 39-41: Application Programming Interface (API) design  

An API is the way that a client *interfaces* with the server. Using your Data Model documentation and your Architectural document, begin deciding how the client will tell the server what to do. For your sanity, use REST as a working paradigm. Begin the design of your API in step with the conceptual design of your frontend. Think about how they will interact.

- Write down what *resources* your app manipulates: tasks, posts, images, etc.  
- For each:  
  - Define the operations (read, create, update, delete).  
  - Describe requests (URL, method, parameters).  
  - Describe responses (status codes, JSON shape).  
- Include example requests and responses.  
- Decide how errors are reported.  
- Document this design before you code.

- Upload and submit `/docs/API.md` (that may have a link to an OpenAPI3 file).

---

## Week 40-42: Visual design  

- Add visual identity to your wireframe.  
- Choose simple typography, color, and spacing. Keep usability first.  
- Consider accessibility: contrast, legible fonts, colorblind-safe palettes.  
  - Consider a design framework.
- Apply the design to a few key screens.  
- Share your designs and ask: “is this clear at a glance?”  

- Upload and submit `/docs/VISUAL.md` with any images, and descriptions of the design and its intent.

---

## Week 40-44: Implement the User Interface

Iterate between the API implementation and UI implementation.

- Begin building real Svelte components from your wireframes and designs.  
- Start with layout and navigation. Add interactive elements connected to mock data.  
- Build reusable components where possible.
- Implement basic states (loading, error, empty).  
- Deploy regularly — don’t wait until the UI is “done.”

- [] Describe your progress and struggles in your weekly reports.
- [] Code reviews.

---

## Week 40-44: Implement the API

Using Netlify functions as REST resource endpoints, begin accepting requests from the UI and sending responses.

- Build the routes you planned.  
- Start small — one route working end-to-end — then expand.  
- Connect to your persistence layer (database, API, or mock).  
- Validate input, return consistent responses.  
- Handle errors gracefully.  
- Test endpoints with Postman or curl before hooking up the frontend.  

- [] Describe your progress and struggles in your weekly reports.
- [] Code reviews.

---

## Week 40-48: Core feature end-to-end  

- Connect the frontend to the backend.  
- Build the single most important feature of your app fully:  
  - UI → API → storage → API → UI.  
- Replace mock data with real data.  
- Confirm loading, error, and empty states appear correctly.  
- Have another person use your app for the core task without guidance.  

- [] Describe your progress and struggles in your weekly reports.
- [] Code reviews.

---

## Week 47 and 49: Minimum Viable Product (MVP) completed

Congratulations! This is what you have been working towards.

- Your app’s main purpose now works on production.  
- The flow is usable: no dead ends, no glaring bugs in the core path.  
- Document setup and usage in the README.  
- Add screenshots or a demo clip.  
- Verify the app works on multiple devices/browsers.  
- This is not “final” but shows your concept clearly.  

- [] Submit your repo
- [] Submit your production URL
- [] Ensure that the repo source builds and deploys the product

---

## Week 48-50: Presentations

Show your classmates what you have been doing all this time!

- Prepare a short live demo.  
- Show the core feature working end-to-end.  
- Explain briefly: what problem does this app solve? how do users accomplish that?  
- Highlight one or two design or technical choices.  
- Enjoy your colleagues project demos. Ask questions. Compliment.

---

## Week 48-50: Peer Evaluations

- You will evaluate 3 or 4 projects.
  - You will be graded on the quality of your evaluations
- Evaluations consider:  
  - Originality and scope  
  - Functionality of the MVP  
  - Code and commit hygiene  
  - Documentation and presentation  
- Feedback will focus on both strengths and areas to improve for future work.  
