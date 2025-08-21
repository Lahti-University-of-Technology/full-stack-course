# Paper Prototype

A paper prototype is a set of hand drawn screens that simulate your interface. You move pieces by hand to mimic clicks and state changes. It is fast, cheap, and good at exposing confusing flows before you write code.

[Live paper prototyping session (mobile app)](https://youtu.be/yafaGNFu8Eg) real think aloud test with a facilitator swapping paper screens, useful to see how to play the computer and prompt tasks <https://youtu.be/yafaGNFu8Eg>  
[Paper prototyping overview](https://youtu.be/85muhAaySps) quick walkthrough of why paper prototypes work and how to build one, useful for first timers to scope materials and steps <https://youtu.be/85muhAaySps>

## What it is good for
- Catching navigation, labeling, and flow problems early
- Making ideas concrete so teammates can critique
- Exploring alternatives quickly without sunk cost
- Forcing clear states: empty, loading, success, error
- Teaching focus on tasks instead of pixels

## Problems it helps you find
- Missing steps or dead ends in a task
- Vague labels or icons that do not match user language
- Lack of feedback after actions
- Overloaded screens and unclear hierarchy
- Mobile constraints that break layouts

## Materials
- Plain paper or index cards
- Pencil and a dark marker
- Sticky notes and tape, scissors if you like movable parts
- A phone sized rectangle traced on paper for mobile work

## How to craft one (pencil and paper)
1. Pick one key task that matters. Example: sign up and create the first item.
2. Sketch each screen on separate sheets or cards. Keep boxes and text simple.
3. Use sticky notes for dynamic bits such as dialogs, errors, and menus.
4. Mark states explicitly with small tags such as Loading, Error, Empty.
5. Number screens or add arrows so you can keep track of the flow.
6. Stop at good enough. You are testing ideas, not art.

## How to run a short session (10 to 15 minutes)
1. Recruit 2 to 3 classmates who are not on your team.
2. Ask permission:  
   “This is a class assignment. May I observe you using a paper prototype for about 10 minutes. I will take notes on the interface only. You can stop at any time.”
3. Give the task:  
   “Please try to [task]. Think out loud. I can answer non design questions only.”
4. Play the computer. Swap screens and sticky notes as they interact.
5. Observe. Note where they hesitate, backtrack, or ask for help. Time the task.
6. Ask two questions at the end:  
   “What felt confusing” and “What felt slow”
7. Decide the top 3 changes. Make them in your next commit. Repeat once if time allows.

## Heuristic checklist
- Labels use the user’s words, not internal jargon
- The next step is visible and obvious
- System status is visible for loading, success, and error
- Forms guide the user with inline validation and clear errors
- Actions are reversible when possible
- Keyboard focus order makes sense, basic accessibility holds
- Contrast is readable, touch targets are large enough
- Mobile layout works, no hover only interactions
- Errors explain what to do next, no dead ends
- Performance feels snappy, use skeletons instead of blocking spinners

## Deliverables for the course
- One page in your repo with a photo or export of the prototype, brief notes, and the 3 changes you made
- If you repeat the test, add a short before and after note

## Not required
- No surveys, analytics, or A B tests
- No formal PRDs or long reports
- No interviews beyond the short hallway test

## Ethics and constraints
- Ask permission before testing
- Do not collect names, emails, phone numbers, or other personal data
- Do not test with minors
- Do not record audio or video. If you must record a screen demo, ask first and delete within 7 days
- Use neutral labels like Participant A in notes. Do not write down personal information

## Tie in to state management
- Model each step of the task as states in your code: empty, loading, success, error
- Show visible feedback for each state in the UI
- Provide recovery paths such as retry, cancel, or undo
- Use optimistic updates only when you can recover safely

