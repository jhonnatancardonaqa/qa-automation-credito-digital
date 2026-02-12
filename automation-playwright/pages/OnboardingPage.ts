import { Page, Locator } from '@playwright/test';

export class OnboardingPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitBtn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitBtn = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.success-message');
  }

  async goto() {
    const filePath = new URL('../mock/register.html', import.meta.url).toString();
    await this.page.goto(filePath);
  }

  async completarFormulario(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }
}