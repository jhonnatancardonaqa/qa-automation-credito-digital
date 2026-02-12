import { test, expect } from '@playwright/test';
import { ProductosPage } from '../pages/ProductosPage';

test.describe('P2 - Productos', () => {

  test('Lista visible', async ({ page }) => {
    const productos = new ProductosPage(page);
    await productos.goto();
    const cantidad = await productos.obtenerCantidadProductos();
    expect(cantidad).toBeGreaterThan(0);
  });

  test('Validar mínimo 1 producto', async ({ page }) => {
    const productos = new ProductosPage(page);
    await productos.goto();
    const cantidad = await productos.obtenerCantidadProductos();
    expect(cantidad).toBeGreaterThanOrEqual(1);
  });

  test('Validar que existen productos en DOM', async ({ page }) => {
    const productos = new ProductosPage(page);
    await productos.goto();
    await expect(productos.listaProductos.first()).toBeVisible();
  });

  test('Validar conteo exacto mayor a 0', async ({ page }) => {
    const productos = new ProductosPage(page);
    await productos.goto();
    const cantidad = await productos.obtenerCantidadProductos();
    expect(cantidad).not.toBe(0);
  });

});