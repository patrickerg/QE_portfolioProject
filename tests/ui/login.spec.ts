import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import * as dotenv from "dotenv";
dotenv.config();

test.describe("Login tests", () => {
  test(" @smoke Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      process.env.VALID_EMAIL!,
      process.env.VALID_PASSWORD!
    );
    await loginPage.assertSuccessfulLogin();
  });

  test("Login with incorrect password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.VALID_EMAIL!, "wrongPassword123");
    await loginPage.assertLoginError();
  });
});
