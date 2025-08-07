import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";

let cartPage: CartPage;

test.describe("Cart flow tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    cartPage = new CartPage(page); // initialize here to reuse in tests

    await loginPage.navigate();
    await loginPage.login(
      process.env.VALID_EMAIL!,
      process.env.VALID_PASSWORD!
    );
    await loginPage.assertSuccessfulLogin();
  });

  test(" @smoke Add a product to cart and verify", async ({ page }) => {
    await cartPage.goToProductPage();
    await cartPage.addToCart();
    await cartPage.assertAddedToCart();
  });
  test(" @smoke Remove a product from cart and verify", async ({ page }) => {});
  test(" @smoke Verify cart is empty after removing product", async ({
    page,
  }) => {});
});
