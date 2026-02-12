import { test, expect } from '@playwright/test';
import { OnboardingPage } from '../pages/OnboardingPage';

test.describe('P0 - Onboarding', () => {

  test('Registro válido', async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.goto();
    await onboarding.completarFormulario('test@mail.com', 'Password123');
    await expect(onboarding.successMessage).toBeVisible();
  });

  test('BUG 1 - No debería permitir registro sin datos', async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.goto();
    await onboarding.completarFormulario('', '');
    await expect(onboarding.successMessage).not.toBeVisible();
  });

  test('BUG 2 - No debería permitir email inválido', async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.goto();
    await onboarding.completarFormulario('correo-invalido', 'Password123');
    await expect(onboarding.successMessage).not.toBeVisible();
  });

  test('BUG 3 - No debería permitir contraseña corta', async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.goto();
    await onboarding.completarFormulario('test@mail.com', '123');
    await expect(onboarding.successMessage).not.toBeVisible();
  });

});