# QA Take-Home – Cypress Test Suite

This project contains Cypress end-to-end automated tests using TypeScript for validating the cart functionality on [Demoblaze](https://www.demoblaze.com).

---

## Test Cases Implemented

| Test Case ID | Description                                     | Status |
|--------------|-------------------------------------------------|--------|
| TC-001       | Browse and open product detail page             | Pass |
| TC-002       | Add product to cart and confirm via alert       | Pass |
| TC-003       | View cart after adding product                  | Pass |
| TC-004       | Add multiple products and verify in cart        | Pass |
| TC-005       | Submit invalid data in checkout (expected bug)  | Fail |

---

## Project Structure

```
/TAKE-HOME
├── cypress/
│   ├── e2e/
│   │   └── cartFlow.cy.ts       # Cypress test cases
│   ├── fixtures/
│   └── support/
├── cypress.config.ts            # Cypress config
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript config
├── .gitignore                   # Ignores node_modules, videos, etc.
└── README.md                    # You're here!
```

---

### Install dependencies

```bash
npm install
```

### Run Tests

Interactive Mode:

```bash
npx cypress open
```

Headless Mode:

```bash
npx cypress run
```

---

## Tech Stack

- Cypress 14.x
- TypeScript
- Node.js
- Visual Studio Code

---

**Beyza Ozer**  
Date Executed: May 29, 2025  
Test Environment: Google Chrome (Desktop)

---

## 📝 Notes

- The `.gitignore` file ensures that `node_modules`, videos, and screenshots are excluded from the GitHub repo.
- TC-005 is expected to fail due to a known frontend validation bug in the Demoblaze site.