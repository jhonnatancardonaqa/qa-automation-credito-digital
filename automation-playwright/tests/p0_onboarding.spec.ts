import { test, expect } from '@playwright/test';


test('Registro exitoso P0', async ({ page }) => {
  const filePath = new URL('../pages/register.html', import.meta.url).toString();
await page.goto(filePath);

  // Validar que el formulario exista
  await expect(page.locator('#registerForm')).toBeVisible();
  // Simular submit
  await page.click('button[type="submit"]');
  // Validar resultado esperado
  await expect(page.locator('.success-message')).toBeVisible();
});

test('Formulario de registro visible P0', async ({ page }) => {
  const filePath = new URL('../pages/register.html', import.meta.url).toString();
await page.goto(filePath);
  // Validación básica crítica (P0)
  await expect(page.locator('form')).toBeVisible();
});
test('Registro NO debe permitir submit sin datos P0', async ({ page }) => {
  const filePath = new URL('../pages/register.html', import.meta.url).toString();
  await page.goto(filePath);

  // 1. NO llenamos email ni password
  // 2. Hacemos submit
  await page.click('button[type="submit"]');

  // 3. VALIDACIÓN esperada (pero hoy FALLA)
  await expect(page.locator('.success-message')).toBeHidden();
})
test('BUG - Permite email con formato inválido', async ({ page }) => {
  const filePath = new URL('../pages/register.html', import.meta.url).toString();
  await page.goto(filePath);

  // Email inválido
  await page.fill('input[name="email"]', 'correo-invalido');
  await page.fill('input[name="password"]', 'Password123');
  await page.click('button[type="submit"]');

  // Debería bloquear el registro (pero hoy probablemente lo permite)
  await expect(page.locator('.success-message')).toBeHidden();
});

test('BUG - Permite contraseña demasiado corta', async ({ page }) => {
  const filePath = new URL('../pages/register.html', import.meta.url).toString();
  await page.goto(filePath);

  await page.fill('input[name="email"]', 'test@mail.com');
  await page.fill('input[name="password"]', '123');
  await page.click('button[type="submit"]');

  // Debería bloquear el registro (pero hoy probablemente lo permite)
  await expect(page.locator('.success-message')).toBeHidden();
});