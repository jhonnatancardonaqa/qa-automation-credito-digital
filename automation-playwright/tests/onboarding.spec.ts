import { test, expect } from '@playwright/test';
import path from 'path'; // Para manejar rutas locales

test('Registro exitoso sin datos reales', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/register.html');
  await page.goto(`file://${filePath}`);
  await page.fill('input[name="email"]', 'test@mail.com');
  await page.fill('input[name="password"]', 'Password123');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});

