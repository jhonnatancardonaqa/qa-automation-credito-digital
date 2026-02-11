import { test, expect } from '@playwright/test';


test('Registro exitoso sin datos reales', async ({ page }) => {
  const filePath = new URL('../pages/register.html', import.meta.url).toString();
  await page.goto(filePath);
  await page.fill('input[name="email"]', 'test@mail.com');
  await page.fill('input[name="password"]', 'Password123');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});

