# 🧪 AutomationExercise E2E Project with Playwright

## 📌 Project description

Automation test project for [automationexercise.com](https://automationexercise.com) using Playwright with TypeScript and the Page Object Model approach. Project includes UI and API tests, CI/CD integration via GitHub Actions, Allure Report generation and a full test documentation.

## 🛠️ Used technologies

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Allure Reports](https://docs.qameta.io/allure/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Postman / Newman (for API)](https://www.postman.com/)
- Page Object Model (POM)

## 🧪 Test case scenarios

### UI:

- ✅ New user registration
- ✅ Login (with valid and invalid data)
- ✅ Adding to cart
- ✅ Checkout
- ✅ Logging out
- ✅ Negative tests: empty password, wrong amount of products in cart
- ✅ Smoke test: full shopping flow

### API:

- ✅ Login via API
- ✅ Adding to cart
- ✅ JSON response validation
- ✅ Error handling (e.g. 401)

## 🚀 How to run project locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/twoj-login/automationexercise-playwright.git
   cd automationexercise-playwright
   ```
