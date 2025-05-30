# Infometis Playwright Test Automation Project

## Project Description
This project provides end-to-end test automation for the AtPoint application using the Playwright test framework. The tests automatically verify job application scenarios and forms in different languages (German and English). Detailed test reports can be generated using Allure.

## Installation
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd infometis
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running Tests
- To run all tests:
  ```bash
  npm test
  ```
- To run tests only in Chromium browser:
  ```bash
  npm run testchrome
  ```
- To automatically perform all steps (cleanup, test, report generation, and opening the report):
  ```bash
  npm run all
  ```

## Reporting
After the tests are executed, an Allure report is generated. To view the report:
```bash
npm run generate
npx allure open allure-report
```

## Directory Structure
- `tests/` : Actual test scenarios
- `fixtures/` : Playwright fixture definitions used in tests
- `page-objects/` : Page objects and page manager classes
- `pojos/` : Data objects used in tests (e.g., application form)
- `env/` : Test data, environment, and fake data providers
- `allure-results/` and `allure-report/` : Test results and reports
- `tests-examples/` : Example tests related to Playwright

## Contributing and Development
- You can create a new `.spec.ts` file in the `tests/` directory to add new tests.
- Use the relevant directories for page objects and helper functions.
- Ensure all tests pass before submitting your code.

## Requirements
- Node.js >= 16
- NPM >= 8

## Contact
For any questions or contributions, please contact the project manager.
# infometis_playwright
