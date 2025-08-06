# 🧪 AutomationExercise E2E Project with Playwright

## 📌 Opis projektu

Projekt testów automatycznych dla strony [automationexercise.com](https://automationexercise.com) z wykorzystaniem Playwright (TypeScript) w podejściu Page Object Model. Projekt zawiera testy UI oraz testy API, integrację CI/CD przez GitHub Actions, generowanie raportów Allure oraz pełną dokumentację testów.

## 🛠️ Użyte technologie

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Allure Reports](https://docs.qameta.io/allure/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Postman / Newman (dla API)](https://www.postman.com/)
- Page Object Model (POM)

## 🧪 Scenariusze testowe

### UI:

- ✅ Rejestracja nowego użytkownika
- ✅ Logowanie (poprawne/błędne dane)
- ✅ Dodawanie produktu do koszyka
- ✅ Finalizacja zakupu
- ✅ Wylogowanie
- ✅ Testy negatywne: puste hasło, niedozwolona ilość
- ✅ Smoke test: pełny flow zakupu

### API:

- ✅ Logowanie przez API
- ✅ Dodanie produktu do koszyka
- ✅ Walidacja JSON response
- ✅ Obsługa błędów (np. 401)

## 🚀 Jak uruchomić projekt lokalnie

1. **Sklonuj repozytorium:**
   ```bash
   git clone https://github.com/twoj-login/automationexercise-playwright.git
   cd automationexercise-playwright
   ```
