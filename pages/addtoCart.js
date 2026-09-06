import { actionClass } from '../actions/actions.js';

const action = new actionClass();

export class AddToCart {

  constructor(page) {
    this.page = page;

    // Locators
    this.ordersLink = "//li[contains(@class,'woocommerce-MyAccount-navigation-link--orders')]//a";
    this.browseProductsLink = "//a[text()='Browse products']";
    this.demoShopLink = "//li[@id='menu-item-3621']//a";
    this.product3675 = "//a[@data-product_id='3675' and @role='button']";
    this.product3671 = "//a[@data-product_id='3671']";
    this.basketIcon = "//i[contains(@class,'ast-icon-shopping-basket')]";
    this.proceedToCheckout = "//div[@class='wc-proceed-to-checkout']//a";
    this.myAccountLink ="//li[@id='menu-item-5541']//a";
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async clickDemoShop() {
    await action.clickElementByXpathVisible(this.page, this.demoShopLink);
  }

//   async clickBrowseProducts() {
//     //await action.waitBeVisibleByXpath(this.page, this.browseProductsLink);
//     await action.clickElementByXpathVisible(this.page, this.browseProductsLink);
//   }

  async clickFirstProduct() {
    //await action.waitBeVisibleByXpath(this.page, this.demoShopLink);
    await action.clickElementByXpathVisible(this.page, this.product3675);
  }

  async clickSecondProduct() {
    await action.clickElementByXpathVisible(this.page, this.product3671);
  }
  

//   async clickBasketIcon() {
//     await action.clickElementByXpathVisible(this.page, this.basketIcon);
//   }

//   async clickProceedToCheckout() {
//     await action.clickElementByXpathVisible(this.page, this.proceedToCheckout);
//   }

  async addToCart() {
    await this.clickDemoShop();
    //await this.clickBrowseProducts();
    await this.clickFirstProduct();
    await this.clickSecondProduct();
    // await this.clickBasketIcon();
    // await this.clickProceedToCheckout();
  }
  async myaccount(){
await action.clickElementByXpath(this.page, this.myAccountLink);
  }
}