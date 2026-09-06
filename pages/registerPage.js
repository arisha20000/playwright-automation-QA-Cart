import { actionClass } from '../actions/actions.js';

const action = new actionClass();

export class RegisterPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.emailInput = "//input[@id='reg_email']";
    this.registerButton = "//button[@name='register']";
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async enterEmail(email) {
    await action.forceEnableAndSetTextByXpath(this.page, this.emailInput, email);
  }

  async clickRegister() {
    await action.clickElementByXpath(this.page, this.registerButton);
  }

  async register(email) {
    await this.enterEmail(email);
    await this.clickRegister();
  }
}