import { test, expect } from '@playwright/test';

test('Simulador muestra resultado con monto válido P1', async ({ page }) => {
  await page.goto(new URL('../pages/simulador.html', import.meta.url).toString());

  await expect(page.locator('#simuladorForm')).toBeVisible();

  await page.fill('input[name="monto"]', '1000');
  await page.fill('input[name="plazo"]', '12');
  await page.click('button[type="submit"]');

  await expect(page.locator('.resultado')).toBeVisible();
});

test('Simulador muestra error con monto 0 P1 (negativo)', async ({ page }) => {
  await page.goto(new URL('../pages/simulador.html', import.meta.url).toString());

  await page.fill('input[name="monto"]', '0');
  await page.fill('input[name="plazo"]', '12');
  await page.click('button[type="submit"]');

  await expect(page.locator('.error-message')).toBeVisible();
});

test('BUG - Simulador acepta monto cero P1', async ({ page }) => {
  await page.goto(new URL('../pages/simulador.html', import.meta.url).toString());

  await page.fill('input[name="monto"]', '0');
  await page.fill('input[name="plazo"]', '12');
  await page.click('button[type="submit"]');

  // BUG: el sistema permite monto 0
  await expect(page.locator('.error-message')).toBeVisible();
});