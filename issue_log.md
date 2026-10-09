# Lab 01 — Manual Code Review Issue Log

Project: Grocery Receipt Application  
Role: Individual Student — Reviewer, Scribe, and Author  
Status: All identified issues fixed in `fixed_receipt.ts`.

1. Manual Code Review

| Line | Issue | Explanation | Suggested Fix | Status |
|---|---|---|---|---|
| 12 | Empty array entry | An extra comma creates an empty position in the list. | Remove the extra comma. | Fixed |
| 17 | Syntax error | The code uses `=` instead of `:` for object properties. | Use `{ name, price }`. | Fixed |
| 21–24 | Wrong deletion | The program removes the last item instead of the selected item. | Use `findIndex()` and `splice()`. | Fixed |
| 27–31 | Incorrect subtotal | The loop and calculation are incorrect. | Use `reduce()` to add all prices. | Fixed |
| 34–36 | Incorrect tax | The tax rate is added instead of multiplied. | Multiply the subtotal by the tax rate. | Fixed |
| 42–44 | Incorrect loop | The receipt does not access or display items correctly. | Loop through items and display their names and prices. | Fixed |
| 47 | Missing function call | The code uses `total` instead of `total()`. | Call the function to calculate the subtotal. | Fixed |
| 48–49 | Formatting errors | Incorrect quotation marks and values cause errors. | Correct the strings and calculations. | Fixed |
| 16–19 | Missing validation | The program accepts invalid names and prices. | Check names and prices before adding items. | Fixed |
| 34–36 | Invalid tax rates | Negative or invalid tax rates are not rejected. | Validate the tax rate. | Fixed |

# 2. Root Cause, Error, Defect, and Failure

- Root Cause: The original code did not properly handle data types and calculations.
- Error: The programmer incorrectly used `3` as an iterable value in the subtotal loop.
- Defect: The `deleteItem()` function removes the wrong grocery item.
- Failure: After correcting the syntax errors, deleting a selected item could remove a different item instead.

# 3. ESLint Results

Command: `npx eslint receipt.ts`

ESLint successfully analyzed the original file and reported:

- Location: Line 21, column 27
- Error: Parsing error — `':' expected`
- Total: 1 error, 0 warnings

The error is caused by incorrect TypeScript syntax. ESLint could not complete its normal analysis because the file contains a parsing error.

Screenshot: `screenshots/02-original-eslint.png`

4. Jest Test Results

Original Code:
- Result: Failed during TypeScript compilation.
- Tests executed: 0.
- Screenshot: `screenshots/01-original-jest.png`

Corrected Code:
- Result: Passed.
- Test suites: 1 passed.
- Tests: 6 passed.
- Screenshot: `screenshots/03-fixed-jest.png`

5. Final Review

I reviewed the original grocery receipt program, identified errors, and documented the suggested fixes. The corrected code is saved in `fixed_receipt.ts`. I also used ESLint to check the original code and Jest to test the corrected program. All six tests passed successfully.

