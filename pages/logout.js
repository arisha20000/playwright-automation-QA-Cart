import { actionClass } from '../actions/actions.js';

const action = new actionClass();

export class Logout {

  constructor(page) {
    this.page = page;

    // Locators
    this.logoutLink = "//li[contains(@class,'customer-logout')]//a";
  }

  async clickLogout() {
    await action.clickElementByXpath(this.page, this.logoutLink);
  }
}