import { Page, Locator } from '@playwright/test';

export class ProductosPage {
  readonly page: Page;
  readonly listaProductos: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listaProductos = page.locator('.product-item');
  }

  async goto() {
    const filePath = new URL('../mock/productos.html', import.meta.url).toString();
    await this.page.goto(filePath);
  }

  async obtenerCantidadProductos() {
    return await this.listaProductos.count();
  }
}