import { test, expect } from '@playwright/test';

test.describe("playwright.dev", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://playwright.dev/");
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });

})

test.describe("dotlife.store", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    // Go to the starting url before each test.
    await page.goto("https://dictionary.cambridge.org/");
  });


  test('menu link', async ({ page }) => {
    // click to the menu
    const link = page.getByRole('link', { name: 'Dictionary', exact: true })
    await link.click();
    //expects the url
    await expect(page).toHaveURL(/.*dictionary/)
  })
});