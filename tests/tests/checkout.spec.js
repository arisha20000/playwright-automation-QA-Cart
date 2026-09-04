import { test } from '@playwright/test';
import { AddToCart } from '../../pages/addtoCart.js';
import { Checkout } from '../../pages/checkout.js';
import { LoginUser } from '../../pages/loginUser.js';
import env from '../../test-data/env.json' with { type: 'json' };
import login from '../../test-data/login.json' with { type: 'json' };
import checkoutData from '../../test-data/checkout.json' with { type: 'json' };

test('User can complete checkout with billing details', async ({ page }) => {
  const addToCart = new AddToCart(page);
  const loginUser = new LoginUser(page);
  const checkout = new Checkout(page);

  await addToCart.goto(env.url);
  await loginUser.login(login.email, login.password);
  await addToCart.addToCart();
  await checkout.checkout(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.address,
    checkoutData.city,
    checkoutData.postcode
  );
  await page.pause();
});