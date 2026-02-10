import { test, expect } from '@playwright/test';
import path from 'path';

test('Lista de productos visible P2', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/productos.html');
  await page.goto(`file://${filePath}`);

  await expect(page.locator('#productos')).toBeVisible();

  const productos = page.locator('.product-item');
  expect(await productos.count()).toBeGreaterThan(0);
});

test('Botón solicitar deshabilitado por defecto P2', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/productos.html');
  await page.goto(`file://${filePath}`);

  await expect(page.locator('#solicitar')).toBeDisabled();
});
