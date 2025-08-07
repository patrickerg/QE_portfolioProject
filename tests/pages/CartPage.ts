import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async goToProductPage() {
    await this.page.locator("a", { hasText: "View Product" }).first().click();
  }
  async addToCart() {
    // Click cart
    await this.page
      .locator(".cart")
      .waitFor({ state: "visible", timeout: 5000 });
    await this.page.locator(".cart").click();
  }
  async assertAddedToCart() {
    // Assert continue shopping is visible
    await expect(
      this.page.getByRole("button", { name: "Continue Shopping" })
    ).toBeVisible();
  }
}
