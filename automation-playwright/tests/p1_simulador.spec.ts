import { test, expect } from '@playwright/test';
import { SimuladorPage } from '../pages/SimuladorPage';

test.describe('P1 - Simulador', () => {

  test('Simulación válida', async ({ page }) => {
    const simulador = new SimuladorPage(page);
    await simulador.goto();
    await simulador.simularCredito('5000000', '12');
    await expect(simulador.resultado).toBeVisible();
  });

  test('Monto vacío', async ({ page }) => {
    const simulador = new SimuladorPage(page);
    await simulador.goto();
    await simulador.simularCredito('', '12');
  });

  test('Plazo vacío', async ({ page }) => {
    const simulador = new SimuladorPage(page);
    await simulador.goto();
    await simulador.simularCredito('5000000', '');
  });

  test('Monto muy alto', async ({ page }) => {
    const simulador = new SimuladorPage(page);
    await simulador.goto();
    await simulador.simularCredito('999999999', '60');
  });

});