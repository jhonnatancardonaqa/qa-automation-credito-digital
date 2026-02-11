import { test, expect } from '@playwright/test';

test('Lista de productos visible P2', async ({ page }) => {
  await page.goto(new URL('../pages/productos.html', import.meta.url).toString());

  await expect(page.locator('#productos')).toBeVisible();

  const productos = page.locator('.product-item');
  const cantidad = await productos.count();

  expect(cantidad).toBeGreaterThan(0);
});

test('Botón solicitar deshabilitado por defecto P2', async ({ page }) => {
  await page.goto(new URL('../pages/productos.html', import.meta.url).toString());

  await expect(page.locator('#solicitar')).toBeDisabled();
});

test('BUG - Lista de productos vacía P2', async ({ page }) => {
  await page.goto(new URL('../pages/productos.html', import.meta.url).toString());

  const productos = page.locator('.product-item');
  const cantidad = await productos.count();

  // BUG: debería haber productos
  expect(cantidad).toBeGreaterThan(0);
});