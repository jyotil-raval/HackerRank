# [Employee Validation 🔗](https://www.hackerrank.com/challenges/employee-validation/problem)

## Problem Overview

Build a React application that validates employee details entered in a form.
The form should enforce specific validation rules and display error messages
when the input does not meet the required criteria.

The application should only allow submission when all fields are valid.

---

## Employee Form Fields

The form includes the following fields:

- Name
- Email
- Employee ID

---

## Validation Rules

1. **Name**
    - Must contain only alphabets and spaces.
    - Cannot be empty.

2. **Email**
    - Must be a valid email address format.
    - Cannot be empty.

3. **Employee ID**
    - Must be a numeric value.
    - Must be exactly 6 digits long.
    - Cannot be empty.

4. **Joining Date**
    - Must be a valid date in the format YYYY-MM-DD.
    - Cannot be empty.
    - Cannot be in the future.

---

## Functional Requirements

1. Render a form with inputs for Name, Email, and Employee ID.
2. Validate each field based on the specified rules.
3. Display validation error messages when input is invalid.
4. Prevent form submission if any field is invalid.
5. Allow form submission only when all inputs are valid.

---

## Constraints

- Use React functional components.
- Use React Hooks for state management.
- Do not mutate state directly.
- Validation must occur on user interaction (input or submit).

---

## Expected Behavior

- Error messages appear when invalid data is entered.
- Error messages disappear once the input becomes valid.
- The form submits successfully only when all fields pass validation.
- Validation logic should be deterministic and predictable.

---

## Notes

- Validation logic must be explicit and rule-based.
- UI behavior must strictly follow validation results.
- Test IDs and DOM structure must be preserved as expected.
