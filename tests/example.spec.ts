import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://www.dotlife.store/");
  });

  test('menu link', async ({ page }) => {

    // click to the menu
    await page.getByRole('link', { name: 'Category: SmartWatch. 8 sub-categories' }).click();

    //expects the url
    await expect(page).toHaveURL(/.*smartwatch.html/)
  })
});