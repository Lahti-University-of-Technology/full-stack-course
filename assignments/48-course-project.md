# Course Project Assignment

## Overview

The core of this course is a semester-long **full stack project**. You will **design, build, and deploy** a non-trivial minimum viable product (MVP) that demonstrates creativity, originality, and technical depth.

The project is the primary component of your grade.

You will work individually, but you may exchange ideas, learnings and tips with classmates.  

The goal is for you to **own a complete stack**: frontend, backend, database, and deployment.

---

## Constraints

- **Scope**
  - It must have **one clear, defined purpose**.
  - Non-trivial. It cannot be a toy or simplistic.
  - Original concept. It cannot be a duplicate or clone of existing projects.
    - Creative, whimsical, or bold ideas are encouraged.
  - Minimum Viable Product (MVP)
- **Architecture**
  - Must be a full-stack application with a clear client and server.
  - Deployment and source code must be public on GitHub.
  - Must use this stack (alternatives only if justified and approved):
    - Backend must use **Node.js** (JavaScript or TypeScript).
    - Frontend must use **SvelteKit**
    - **Netlify** for serverless hosting
    - Database can be **Supabase** or **MongoDB**
  - Most projects will also need
    - *REST* API
    - Cloud-based, hosted database
      - Probably Postgres or MongoDB
- **Repository**
  - Hosted publicly on **GitHub**.
  - Repository must be named `fsd-project-2025`.
  - Repository history must be **incremental and transparent**.
    - Show your progress! No “big bang” commits. Commit regularly and incrementally.
    - No deleting or replacing repositories or changing them to private.
    - A sudden appearance of a finished project will fail the course.
- **Documentation**
  - A clear `README.md` is required, explaining purpose, setup, and usage.
- **Ethics**: be familiar with the course [ethical obligations](../notes/ethics.md)

## Evaluation criteria

- Clear and consistent GitHub history.
- Full stack design and implementation.
- Publicly accessible deployment.
- Secure handling of secrets.
- Non-trivial and original scope.
- Ambition and innovation.
- Documentation and presentation quality.
- Evidence of steady, ethical progress.

## Minimum Viable Product (MVP)
  - The smallest complete version of your application that fulfills its stated purpose.
  - It must allow a user to experience the core value of your idea through a basic but functional user flow.
    - Example: if your project is a recipe-sharing platform, the MVP is being able to create an account, post one recipe, and have another user view it.
  - MVP is not a prototype or mockup: it must run, be deployed, and demonstrate the main functionality live.
  - Nice-to-have features (styling, edge cases, advanced options) can come later, but the MVP proves the app “does the thing it claims to do.”

## Milestones

A *milestone* is an intermediate goal in the progress of your project.
In this course, each milestone is also an **assignment**: when you reach a milestone, you will submit documents, diagrams, code, or deployments for feedback.

Milestones serve two purposes:

1. They break a large, complex project into smaller, achievable steps.
2. They ensure visible, incremental progress that can be evaluated.

By completing milestones, you are not only moving your project forward, you are also building the documentation and artifacts that will support your final submission and presentation.

Course lectures and assigned readings are designed to correspond with upcoming milestones. The milestones are described here, but I also wrote a rough-and-tumble *how to* document here. This is not designed to be a step-by-step guide, so much as walkthrough of what to expect.

### Milestone: Project is conceived and described

- Set up platform and boilerplate
- Conceptualization phase
  - Review similar projects
  - How are they successful?  How are they less successful?
  - Come up with several interesting ideas
  - Talk to people about your ideas. Listen to their ideas.
  - Interview potential users without describing your plan.

- Narrow on one of the ideas. This will be your project.
  - Write a description of the project. Be as detailed as possible.
  - Refine the idea. Iterate.
  - Get feedback. From me, from your peers, from random strangers.

### Milestone: UXD document first draft is written and submitted

- Think through the user experience
  - How will users accomplish the single, defined purpose of the software?
  - Use paper and pencil. Draw wireframes, arrows. Plan how information will be presented to the user. How will the user find the information they want?
  - Make a paper mockup. Ask potential users to accomplish specific tasks using your flow. Identify problems. Interview your users about their experience.
  - Sketch UX flow or wireframes.  Include this in documentation.

### Milestone: Data Model draft

- Think through the data flow on an *abstract level*
  Just go for it. There is no right or wrong at this point, and even experienced people feel lost at this stage. What you're looking for here is a general conceptual model of how data flows and is transformed and stored and presented in order to accomplish the goal of your application.
  - What is the primary data your project reads or creates?
    - *Name* the data: e.g. cities, pictures, scores, addresses, medical visits
  - What are the sources of data? User input? 3rd party API? Generated? Scraped? File uploads?
  - What and how is the data presented in your application?
  - What data needs to be filtered, sorted, deleted, updated, transformed?
  - Does this data need to be stored? Does data need to be stored *together*? Does it need to be *retrieved*? How much data is there? Does the data need to be *secure*?
  - Draw diagrams, with arrows and labels and captions. This is for you to understand and *communicate* your understanding.
  - Get feedback! Brainstorm. Talk to fellow engineers. Read articles. See how others have done what you are attempting to do.
  - Use your UXD document as a guide. Refine the UXD document as you go.

### Milestone: Architecture document written

- Think through the *non-presentation* layers:
  - Is there a search and filtering of data?
  - Is there a modification, update or mutation of data?
  - Does the data *persist*?  That is, does the user update data and then come back to it later, expecting it to remain?
  - What are the *operations* on the data? Does CRUD apply?
  - Does this happen on the server?
  - Does REST apply?
    - Can you think of the data and operations as *manipulation of resources*?
    - If so, what *are* the resources?

### Milestone: UI wireframe

- Think through the *presentation* layer.
  This is the frontend/client. It is how the user will perform the operations on data that you identified in the last section. Another word for this is User Interface (UI). It is how the user interfaces with your data.
  - Using your UXD as a guide:
    - How can you represent the operations on the data visually?
      - e.g. In order to delete pictures, should the user drag and drop them onto a trash icon? Click on an `x` in the upper right? Should there be confirmation?
    - How can you categorize and separate data and operations to make the purpose intuitive and easy for the user?
      - e.g. Are there pages? Are there buttons? How are they laid out?
    - Can you think of your application in terms of different modes or *state*? That is, is there a *log in* state, or a *fatal error* state, or an *loading* state?
  - Use tools like a pencil and paper, or Figma, to craft the look and feel of your application.
    - At this stage, you're less concerned with colors and fonts. The abstraction level is more *components*: pages, panels, buttons, input fields, lists: what they do, how they are layed out.
    - You are building towards a *wireframe*, an abstract but visual plan of how your application works.

- Create your UI wireframe
  A *wireframe* is an abstract visual representation of your software UI. It is deliberately visually minimal, usually just white boxes, black borders, and clear labels. The focus here is not on how things look, but how they *work*. Try to conceive of the UI in terms of boxes with different purposes. Display, input, interaction. Think in terms of *reusability*, *state changes* and *interactivity*.
  - Svelte is a frontend framework that conceives of the application in terms of reusable *components*. Your wireframe contains boxes representing panels, buttons, pages, image displays. Can these boxes be the components of your application?
  - Do these components share data (share "state")? e.g. When a comment is *read*, does a counter component that shows the number of unread messages *decrement*? Indicate that on the wireframe.
  - Do these components change state themselves? Are there any components that change their appearance or purpose when the server responds with data? For instance, a box that says *downloading...* and then shows a video when a data download is complete?
  - Indicate any changes of *state*: *error state*, *normal state*. Use a different paper if necessary. - How are these differences represented visually?

### Milestone: Visual design

- Take your wireframe and begin adding visual identity.
- Decide on typography, color palette, spacing, and overall aesthetic. Keep it simple: focus on clarity and usability rather than decoration.
- Use a design tool (Figma, Sketch, etc.) or extend your paper sketches with color and annotation.
- Consider accessibility: text contrast, font sizes, colorblind-safe palettes.
- Apply the design choices to your key screens, not every corner of the app yet.
- Iterate with feedback: show it to a classmate or potential user and ask, “is this easy to understand at a glance?”

### Milestone: User interface implemented

- Translate your wireframes and visual designs into actual Svelte components.
- Begin with the basic layout: navigation, main panels, placeholders for content.
- Add interactive elements (buttons, inputs, forms) but connect them to mock data first.
- Keep components small and reusable. If you repeat something, make it a component.
- Implement state transitions (loading, empty, error) with placeholder logic.
- Deploy often — even if the data is fake, make sure the UI works on Netlify.

### Milestone: API design

- Write down what resources your application exposes (e.g. “tasks”, “posts”, “images”).
- For each resource, define:
- The operations users need (read, create, update, delete).
- What each request looks like (URL, method, parameters).
- What each response looks like (status codes, JSON shape).
- Include examples of a request and response in your documentation.
- Decide how errors will be returned (e.g. { "error": "message" }).
- Think about edge cases: empty lists, invalid input, missing data.
- This stage is about designing on paper — do not code yet.

### Milestone: API implementation

- Build the routes you designed in the previous milestone.
- Start with one route, get it working, then expand.
- Connect routes to your persistence layer (database, external API, or mock storage).
- Validate inputs: reject bad requests clearly.
- Return consistent, documented responses.
- Handle errors gracefully: don’t let the server crash on unexpected input.
- Test the API separately with a tool like Postman or curl before connecting the frontend.

### Milestone: Core feature end-to-end

- Connect the frontend UI to the backend API.
- Implement the single most important feature of your application all the way through:
- User interacts with the UI → request goes to API → API updates or fetches data → response flows back → UI updates.
- Replace any remaining mock data with real data.
- Confirm loading, error, and empty states display correctly.
- Show this flow to another person and ask them to complete the task without help.

### Milestone: Minimum Viable Product (MVP) Complete

- Ensure the main purpose of the application is functional on production.
- Add enough polish so the app is usable by others (no dead ends, obvious bugs, or missing screens in the core flow).
- Document setup instructions in your README.
- Add screenshots or a short demo clip to help others understand the project.
- Deploy the MVP to Netlify and verify it works on multiple devices/browsers.
- This is not the “final product,” but it must prove the concept works.
- You are almost done!

### Milestone: Presentation

- Prepare a short live-  demo showing the core feature end-to-end.
- Walk through the user experience: what problem does your app solve, and how.
- Highlight one or two design/technical choices (data model, API, or UX flow).
- Keep it concise: focus on clarity, not on showing every corner of your code.
- Anticipate questions: know where your app is strong and where it is limited.

### Milestone: Evaluation

- Submit your final repo and live URL.
- Confirm the commit history shows steady progress.
- Ensure documentation is complete enough for another developer to run the project.
- Instructor and peers will evaluate:
- Originality and scope
- Functionality of MVP
- Code and commit hygiene
- Documentation and presentation
- Feedback will emphasize what worked well and where you can improve for future projects.
