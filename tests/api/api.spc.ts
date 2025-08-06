import { test, expect, request } from "@playwright/test";

test("Login via API", async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.post(
    "https://automationexercise.com/api/login",
    {
      data: { email: "test@example.com", password: "password123" },
    }
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.message).toContain("User logged in");
});
