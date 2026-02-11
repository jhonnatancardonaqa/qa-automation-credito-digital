import { test, expect } from '@playwright/test';
import path from 'path';

test('Registro exitoso P0', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/register.html');
  await page.goto(`file://${filePath}`);

  // Validar que el formulario exista
  await expect(page.locator('#registerForm')).toBeVisible();
  // Simular submit
  await page.click('button[type="submit"]');
  // Validar resultado esperado
  await expect(page.locator('.success-message')).toBeVisible();
});

test('Formulario de registro visible P0', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/register.html');
  await page.goto(`file://${filePath}`);
  // Validación básica crítica (P0)
  await expect(page.locator('form')).toBeVisible();
});
test('Registro NO debe permitir submit sin datos P0', async ({ page }) => {
  const filePath = path.join(__dirname, '../pages/register.html');
  await page.goto(`file://${filePath}`);

  // 1. NO llenamos email ni password
  // 2. Hacemos submit
  await page.click('button[type="submit"]');

  // 3. VALIDACIÓN esperada (pero hoy FALLA)
  await expect(page.locator('.success-message')).toBeHidden();
});