import { Page, Locator } from '@playwright/test';

export class SimuladorPage {
  readonly page: Page;
  readonly montoInput: Locator;
  readonly plazoInput: Locator;
  readonly submitBtn: Locator;
  readonly resultado: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.montoInput = page.locator('input[name="monto"]');
    this.plazoInput = page.locator('input[name="plazo"]');
    this.submitBtn = page.locator('button[type="submit"]');
    this.resultado = page.locator('.resultado');
    this.errorMessage = page.locator('.error-message');
  }

  async goto() {
    const filePath = new URL('../mock/simulador.html', import.meta.url).toString();
    await this.page.goto(filePath);
  }

  async simularCredito(monto: string, plazo: string) {
    await this.montoInput.fill(monto);
    await this.plazoInput.fill(plazo);
    await this.submitBtn.click();
  }
}