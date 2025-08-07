import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async checkThatLogged() {
    const loggedInURL = "https://automationexercise.com";
    await expect(this.page.url()).toBe(loggedInURL);
  }

  async waitForProductsToLoad() {
    const product = this.page.locator(".single-products").first();
    await expect(product).toBeVisible({ timeout: 10000 });
  }
  async addItemToCart(productName: string) {
    const product = this.page.locator(
      `.single-products:has-text("${productName}")`
    );
    await expect(product).toBeVisible();
    await product.locator('button:has-text("Add to cart")').click();
    await expect(this.page.locator(".modal-body")).toBeVisible();
    await this.page.locator('button:has-text("Continue Shopping")').click();
  }
  async removeItemFromCart(itemName: string) {
    await this.page.click(`button[data-test="remove-${itemName}"]`);
  }
  async assertItemInCart(itemName: string) {
    // Example implementation: check if item is visible in cart
    await expect(this.page.locator(`text=${itemName}`)).toBeVisible();
  }
  async assertItemNotInCart(itemName: string) {
    // Check that the item is not visible in the cart
    await expect(this.page.locator(`text=${itemName}`)).not.toBeVisible();
  }
}
