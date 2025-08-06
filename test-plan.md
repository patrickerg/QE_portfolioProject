```markdown
# 📋 Plan Testów - AutomationExercise

## 🎯 Cel testów

Celem testów jest weryfikacja poprawności działania kluczowych funkcji sklepu online automationexercise.com, w tym rejestracji, logowania, zakupów oraz integracji API.

## 🧱 Zakres testów

### UI:

- Rejestracja i logowanie
- Dodawanie produktów do koszyka
- Finalizacja zakupu
- Wylogowanie
- Testy negatywne
- Smoke testy

### API:

- Autoryzacja użytkownika
- Operacje na koszyku
- Walidacja odpowiedzi JSON
- Obsługa błędów

## 🧪 Podejście do testowania

- Zautomatyzowane testy UI z wykorzystaniem Playwright i Page Object Model
- Testy API z wykorzystaniem Postman + Newman
- Raportowanie Allure
- Automatyzacja przez GitHub Actions

## ✅ Pokrycie funkcjonalne

| Funkcja                 | Pokryta testem UI | Pokryta testem API |
| ----------------------- | ----------------- | ------------------ |
| Rejestracja             | ✅                | ❌                 |
| Logowanie               | ✅                | ✅                 |
| Dodanie do koszyka      | ✅                | ✅                 |
| Finalizacja zakupu      | ✅                | ❌                 |
| Obsługa błędów          | ✅                | ✅                 |
| Smoke test (happy path) | ✅                | ❌                 |
```
