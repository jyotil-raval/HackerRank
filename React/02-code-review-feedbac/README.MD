# Code Review Feedback

## Problem Overview

Create a React component that allows users to submit feedback during a code review process.

Each feedback entry consists of:

- Reviewer name
- Feedback comment

Submitted feedback should be displayed in a list below the form.

---

## Functional Requirements

1. Render a form with:
   - Input field for reviewer name
   - Input field for feedback comment
   - Submit button

2. On submit:
   - Both fields must be non-empty
   - A new feedback entry should be added to the list
   - Input fields should reset

3. Display all submitted feedback entries in order of submission.

---

## Constraints

- Use React functional components
- Use hooks for state management
- Do not mutate state directly

---

## Expected Behavior

- Form inputs are controlled
- UI updates immediately after submission
- Each feedback item is rendered consistently
