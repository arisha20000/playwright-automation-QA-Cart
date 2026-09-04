import { actionClass } from '../actions/actions.js';

const action = new actionClass();

export class LoginPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = "input[name='username']";
    this.passwordInput = "input[name='password']";
    this.loginButton = "button[type='submit']";
    this.errorMessage = "//div[@class='error-msg']";
  }

  async goto(url) {
    await this.page.goto(url);
  }

//   async enterUsername(username) {
//     await action.setText(this.page, this.usernameInput, username);
//   }

//   async enterPassword(password) {
//     await action.setText(this.page, this.passwordInput, password);
//   }

//   async clickLogin() {
//     await action.clickElement(this.page, this.loginButton);
//   }

//   async login(username, password) {
//     await this.enterUsername(username);
//     await this.enterPassword(password);
//     await this.clickLogin();
//   }

//   async isErrorVisible() {
//     return await action.shouldVisibleByXpath(this.page, this.errorMessage.replace('//', ''));
//   }
}