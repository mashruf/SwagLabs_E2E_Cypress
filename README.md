# Swag Labs E2E Tests with Cypress and GitHub Actions CI

This repository contains **end-to-end (E2E) tests** for the [Swag Labs](https://www.saucedemo.com/) application, implemented using **Cypress**. The tests are integrated with **GitHub Actions** for Continuous Integration (CI) and generate test reports automatically.

---

## Project Overview

- **Test Framework**: Cypress
- **Target Application**: Swag Labs (https://www.saucedemo.com/)
- **CI/CD**: GitHub Actions
- **Reports**: Automatically generated and published via GitHub Actions

---

## Test Coverage

The test suite covers:

- User authentication (valid and invalid scenarios)
- Product browsing and sorting
- Cart functionality (add/remove items)
- Checkout process (form validation and order completion)
- Session management (login/logout)
- Negative test cases to ensure robust validation and error handling

---

## Getting Started

### Prerequisites

- Node.js (version 14+ recommended)
- npm or yarn installed

### Installation

#### 1. Clone the repo:

   ```
   git clone https://github.com/mashruf/SwagLabs_E2E_Cypress.git

   cd SwagLabs_E2E_Cypress
   ```

#### 2. Install dependencies:
  
   ```
   npm install
   ```

### Running Tests Locally

#### You can run the full Cypress test suite using either headed or headless mode:

Headed mode (opens Cypress Test Runner UI):

   ```
   npx cypress open
```
Headless mode (recommended for CI):
   
   ```
   npx cypress run
```
![cypress_allure](https://github.com/user-attachments/assets/2c042efd-47b2-465e-b55b-55e3ccc9fddc)


