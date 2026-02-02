# [React Slideshow 🔗](https://www.hackerrank.com/challenges/react-slideshow-1/problem)

## Problem Overview

Build a React component that displays a slideshow of items.
The slideshow allows users to navigate through a predefined list
using **Previous** and **Next** buttons.

Only one slide should be visible at a time.

---

## Slideshow Behavior

- The slideshow starts at the **first slide**.
- Each slide contains:
  - A title
  - A description

---

## Functional Requirements

1. Render a slideshow showing one slide at a time.
2. Provide a **Previous** button:
   - Moves to the previous slide.
   - Disabled when the first slide is active.
3. Provide a **Next** button:
   - Moves to the next slide.
   - Disabled when the last slide is active.
4. Display the current slide’s title and description.
5. Buttons should enable or disable correctly based on the current slide index.

---

## Constraints

- Use React functional components.
- Use React Hooks for state management.
- Do not mutate state directly.
- Navigation must stay within slide boundaries.

---

## Expected Behavior

- Initial load shows the first slide.
- Clicking **Next** advances the slideshow.
- Clicking **Previous** moves backward.
- The slideshow does not wrap around.
- Disabled buttons cannot be interacted with.

---

## Notes

- Only one slide is visible at any time.
- Navigation is index-based.
- UI state must be predictable and consistent.
