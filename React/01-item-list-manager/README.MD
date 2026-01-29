# [Item List Manager 🔗](https://www.hackerrank.com/challenges/item-list-manager/problem)

## Problem Overview

Build a simple React component that allows users to manage a list of items.

The application should support:

- Adding new items to a list
- Removing existing items from the list
- Displaying the current list of items

This problem focuses on React fundamentals such as state management, event handling, and rendering lists.

---

## Functional Requirements

1. The application should render:
   - An input field for entering item names
   - A button to add the item to the list
   - A list displaying all added items

2. When the user:
   - Types a value and clicks **Add**, the item should appear in the list
   - Clicks **Remove** next to an item, that item should be deleted

3. Empty items should not be added.

---

## Constraints

- Use React functional components
- Use React Hooks for state management
- Do not mutate state directly

---

## Expected Behavior

- The UI should update immediately on add/remove actions
- Each list item should have a stable key
- The solution should be simple and readable
