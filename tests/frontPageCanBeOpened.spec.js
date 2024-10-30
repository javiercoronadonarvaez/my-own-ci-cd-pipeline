const { test, describe, expect, beforeEach } = require("@playwright/test");

beforeEach(async ({ page }) => {
  await page.waitForTimeout(1000);
  await page.goto("/");
});

describe("Front Page", () => {
  test("front page can be opened", async ({ page }) => {
    //await page.goto('/')
    await expect(page.getByText("Jorge Montes")).toBeVisible();
    await expect(page.getByText("Javier Coronado")).toBeVisible();
  });
});
