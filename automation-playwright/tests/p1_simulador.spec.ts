import { test, expect } from '@playwright/test';
import path from 'path';

test('Simulador muestra resultado con monto válido P1', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/simulador.html');
  await page.goto(`file://${filePath}`);

  await expect(page.locator('#simuladorForm')).toBeVisible();

  await page.fill('input[name="monto"]', '1000');
  await page.fill('input[name="plazo"]', '12');
  await page.click('button[type="submit"]');

  await expect(page.locator('.resultado')).toBeVisible();
});

test('Simulador muestra error con monto 0 P1 (negativo)', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/simulador.html');
  await page.goto(`file://${filePath}`);

  await page.fill('input[name="monto"]', '0');
  await page.fill('input[name="plazo"]', '12');
  await page.click('button[type="submit"]');

  await expect(page.locator('.error-message')).toBeVisible();
});
