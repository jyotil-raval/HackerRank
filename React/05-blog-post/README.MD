# Blog Post

## Problem Overview

Build a React component that displays a list of blog posts.
Each post can be expanded or collapsed to show more or less information.

The goal is to manage UI state per blog post and render content conditionally
based on that state.

---

## Blog Post Structure

Each blog post contains:

- Title
- Short description
- Full content

---

## Functional Requirements

1. Render a list of blog posts.
2. For each blog post:
   - Always display the title.
   - Display the full content.
3. Each post should manage its Create/Delete state independently.

---

## Constraints

- Use React functional components.
- Use React Hooks for state management.
- Do not mutate state directly.
- Each blog post must toggle independently.

---

## Expected Behavior

- Only one view (description or content) is visible per post at a time.
- Expanding or collapsing one post does not affect other posts.
- UI updates immediately after user interaction.

---

## Notes

- Conditional rendering is required.
- State updates must be immutable.
- Test IDs and DOM structure must be respected exactly.
