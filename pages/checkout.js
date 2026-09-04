import { actionClass } from '../actions/actions.js';

const action = new actionClass();

export class Checkout {

  constructor(page) {
    this.page = page;

    // Locators
    this.basketIcon = "//i[contains(@class,'ast-icon-shopping-basket')]";
    this.proceedToCheckout = "//div[@class='wc-proceed-to-checkout']//a";
    this.firstName = "//input[@name='billing_first_name']";
    this.lastName = "//input[@name='billing_last_name']";
    this.address = "//input[@name='billing_address_1']";
    this.city = "//input[@name='billing_city']";
    this.postcode = "//input[@id='billing_postcode']";
    this.placeOrder = "//button[@id='place_order']";
  }

  async clickBasketIcon() {
    await action.clickElementByXpathVisible(this.page, this.basketIcon);
  }

  async clickProceedToCheckout() {
    await action.clickElementByXpathVisible(this.page, this.proceedToCheckout);
  }

  async enterFirstName(firstName) {
    await action.forceEnableAndSetTextByXpath(this.page, this.firstName, firstName);
  }

  async enterLastName(lastName) {
    await action.forceEnableAndSetTextByXpath(this.page, this.lastName, lastName);
  }

  async enterAddress(address) {
    await action.forceEnableAndSetTextByXpath(this.page, this.address, address);
  }

  async enterCity(city) {
    await action.forceEnableAndSetTextByXpath(this.page, this.city, city);
  }

  async enterPostcode(postcode) {
    await action.forceEnableAndSetTextByXpath(this.page, this.postcode, postcode);
  }

  async clickPlaceOrder() {
    await action.clickElementByXpath(this.page, this.placeOrder);
  }

  async checkout(firstName, lastName, address, city, postcode) {
    await this.clickBasketIcon();
    await this.clickProceedToCheckout();
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterAddress(address);
    await this.enterCity(city);
    await this.enterPostcode(postcode);
    await this.clickPlaceOrder();
  }
}