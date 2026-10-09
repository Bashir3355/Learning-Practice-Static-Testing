# Lab 01 — Steps to Complete and Submit

Project: Introduction to Testing and Static Testing

The original `receipt.ts` remains unchanged. The corrected code, Jest tests, and issue log are ready for review.

# Step 1: Install Dependencies
Open the Lab01 folder in VS Code and run:

`npm install`

Status: Completed.

# Step 2: Test the Original Code
- Change the import in `receipt.test.ts` to `'./receipt'`.
- Run `npx jest receipt.test.ts`.
- Take a screenshot of the results, even if Jest reports errors.
- Save it as `screenshots/01-original-jest.png`.

# Step 3: Review the Code
- Review the original `receipt.ts`.
- Identify errors and problems.
- Document the issues and suggested fixes in `issue_log.md`.

# Step 4: Run ESLint
- Run `npx eslint receipt.ts`.
- Take a screenshot of the results.
- Save it as `screenshots/02-original-eslint.png`.
- Add any new findings to `issue_log.md`.

# Step 5: Test the Corrected Code
- Change the import in `receipt.test.ts` back to `'./fixed_receipt'`.
- Run `npx jest receipt.test.ts`.
- Make sure all tests pass.
- Save the screenshot as `screenshots/03-fixed-jest.png`.

# Step 6: Upload to GitHub
- Create a new **public GitHub repository**.
- Upload the project files, tests, issue log, and screenshots.
- Do not upload `node_modules`.
- Confirm that the repository is public.

# Step 7: Submit on Canvas
Copy your public GitHub repository URL and submit it to your Lab 01 assignment on Canvas.

# Final Checklist
- [ ] Original Jest test screenshot
- [ ] Manual review and `issue_log.md`
- [ ] ESLint screenshot
- [ ] Corrected Jest test screenshot showing all tests passing
- [ ] Original and corrected TypeScript files
- [ ] Public GitHub repository
- [ ] GitHub URL submitted on Canvas

