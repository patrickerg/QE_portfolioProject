import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";

import * as dotenv from "dotenv";

test.describe("Full cart flow tests", () => {
  test(" @smoke Add item to cart and verify", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    // Navigate to login page and log in
    await loginPage.navigate();
    await loginPage.login(
      process.env.VALID_EMAIL!,
      process.env.VALID_PASSWORD!
    );
    await loginPage.assertSuccessfulLogin();

    // Add an item to the cart
    await cartPage.addItemToCart("Sample Item");

    // Verify the item is added to the cart
    await cartPage.assertItemInCart("Sample Item");

    test("Remove item from cart and verify", async ({ page }) => {
      const loginPage = new LoginPage(page);
      const cartPage = new CartPage(page);

      // Navigate to login page and log in
      await loginPage.navigate();
      await loginPage.login(
        process.env.VALID_EMAIL!,
        process.env.VALID_PASSWORD!
      );
      await loginPage.assertSuccessfulLogin();

      // Remove an item from the cart
      await cartPage.removeItemFromCart("Sample Item");

      // Verify the item is removed from the cart
      await cartPage.assertItemNotInCart("Sample Item");
    });
  });
});

dotenv.config();
