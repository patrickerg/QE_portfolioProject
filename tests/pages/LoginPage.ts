import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async handleCookiePopupIfVisible() {
    const consentModal = this.page.locator(
      "text=This site asks for consent to use your data"
    );
    const consentButton = this.page.locator('button:has-text("Consent")');

    if (await consentModal.isVisible()) {
      await expect(consentButton).toBeVisible({ timeout: 5000 });
      await expect(consentButton).toBeEnabled();

      await consentButton.click();
    }
  }

  async navigate() {
    await this.page.goto(`${process.env.BASE_URL}/login`);
    await this.handleCookiePopupIfVisible();
    await expect(
      this.page.locator('h2:has-text("Login to your account")')
    ).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.handleCookiePopupIfVisible();
    await this.page.fill('input[data-qa="login-email"]', email);
    await this.page.fill('input[data-qa="login-password"]', password);
    await this.page.click('button[data-qa="login-button"]');
  }

  async assertSuccessfulLogin() {
    await expect(this.page.locator('a[href="/logout"]')).toBeVisible();
  }

  async assertLoginError() {
    await expect(
      this.page.locator('p:has-text("Your email or password is incorrect!")')
    ).toBeVisible();
  }
}
