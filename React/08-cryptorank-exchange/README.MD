# [CryptoRank Exchange 🔗](https://www.hackerrank.com/challenges/cryptorank-exchange/problem)

## Problem Overview

Build a React application that displays cryptocurrency exchange rates
and allows users to calculate converted values based on selected currencies.

The application should dynamically update conversion results when the
user changes input values or selected currencies.

---

## Functional Requirements

1. Display a list of available cryptocurrencies.
2. Allow the user to:
    - Select a **source currency**
    - Select a **target currency**
    - Enter an **amount** to convert
3. Calculate and display the converted amount based on exchange rates.
4. Update results immediately when:
    - The amount changes
    - Either selected currency changes
5. Prevent invalid conversions such as:
    - Missing selections
    - Invalid or empty input values

---

## Exchange Rate Data

- Exchange rates are provided as a static data source.
- Each currency has a fixed conversion rate relative to a base currency.
- Conversion must use these rates accurately.

---

## UI Behavior

- Inputs must be controlled components.
- Conversion result should update automatically without manual submission.
- Appropriate placeholders or default selections should be shown on load.
- The UI must remain consistent with user interactions at all times.

---

## Constraints

- Use React functional components.
- Use React Hooks (`useState`, `useEffect` if required).
- Do not mutate state directly.
- Follow the provided DOM structure and `data-testid` attributes strictly.

---

## Expected Behavior

- Conversion result is correct for all valid currency combinations.
- UI reacts immediately to any input or selection change.
- No runtime errors for edge cases (empty input, same currency, etc.).
- The application passes all provided test cases.

---

## Notes

- Conversion logic should be deterministic and test-friendly.
- Avoid unnecessary derived state.
- Tests may rely on exact DOM structure and update timing.
