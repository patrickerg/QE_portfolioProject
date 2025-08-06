// tests/ui/login.spec.ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login with invalid data", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("fake@example.com", "wrongpassword");
  await loginPage.assertLoginError();
});
