import { test, expect } from '@playwright/test';
const URL = 'http://localhost:3000';

test("Test Title: Name",async ({page}) => {
  // Given
  await page.goto(URL);
  // Expect
  await expect(page).toHaveTitle("Foreveryou")
})

test("Test Meta: UTF",async ({page}) => {
  // Given
  await page.goto(URL);
  // Expect
  await expect(await page.locator('meta[charSet="utf-8"]')).not.toBeNull();
})

test("Test Meta: Viewport",async ({page}) => {
  // Given
  await page.goto(URL);
  // Expect
  await expect(await page.locator('meta[name="viewport"]')).toHaveAttribute("content")
})

test("Test Meta: Description",async ({page}) => {
  // Given
  await page.goto(URL);
  // Expect
  await expect(await page.locator('meta[name="description"]')).toHaveAttribute("content")
})



test("Test Navigation: Navbar", async({page}) => {
  await page.goto(URL);

  const testElem = page.getByRole('navigation').locator('div').first();

  await expect(testElem).toBeVisible();
})



test('Test Navigation: Link', async ({ page }) => {
  await page.goto(URL);

  const testElem = page.getByLabel('Main website page')

  await expect(testElem).toBeVisible();

});




test("Test Hero: Name", async({page}) => {
  await page.goto(URL);

  const heroTitle = page.getByRole('heading', { name: 'Clinically Tested Make Up for Your Skin!' })

  await expect(heroTitle).toBeVisible();
})




test("Test Hero: Button", async({page}) => {
  await page.goto(URL);

  const heroButton = page.getByRole('button', { name: 'Get a Free Example' })

  await expect(heroButton).toBeVisible();
})



test("Test Product Section: Title", async({page}) => {
  await page.goto(URL);

  const testElem = page.locator('h1').filter({ hasText: 'Reviews' })

  await expect(testElem).toBeVisible();
})



test("Test Product Section: Color Section", async({page}) => {
  await page.goto(URL);

  const testElem = page.getByRole('heading', { name: 'Color' })

  await expect(testElem).toBeVisible();
})



test("Test Product Section: Product Information", async({page}) => {
  await page.goto(URL);

  const testElem = page.getByText('Product information$150 $')

  await expect(testElem).toBeVisible();
})


test("Test Email Input: Placeholder", async({page}) => {
  await page.goto(URL);

  const testElem = page.getByPlaceholder("Enter Your Email");

  await expect(testElem).toBeVisible();
})



