import { actionClass } from '../actions/actions.js';

const action = new actionClass();

export class LoginUser {

  constructor(page) {
    this.page = page;

    // Locators
    this.userName = "//input[@id='username']";
    this.userPassword = "//input[@id='password']";
    this.userLogin="//button[@name='login']";
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async enteruserName(email) {
    await action.forceEnableAndSetTextByXpath(this.page, this.userName, email);
  }

  async enterpassword(password) {
    await action.forceEnableAndSetTextByXpath(this.page, this.userPassword, password);
  }


  async clickLogin() {
    await action.clickElementByXpath(this.page, this.userLogin);
  }

  async login(email,password) {
    await this.enteruserName(email);
    await this.enterpassword(password);
    await this.clickLogin();
  }
}