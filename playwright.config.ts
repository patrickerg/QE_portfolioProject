import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config(); // <- musi być przed defineConfig

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || "https://automationexercise.com",
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  reporter: [["list"], ["allure-playwright"]],
});
