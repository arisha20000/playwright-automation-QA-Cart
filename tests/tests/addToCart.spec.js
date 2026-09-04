import { test } from '@playwright/test';
import { AddToCart } from '../../pages/addtoCart.js';
import env from '../../test-data/env.json' with { type: 'json' };
import login from '../../test-data/login.json' with { type: 'json' };
import { LoginUser } from '../../pages/loginUser.js';
import { Logout } from '../../pages/logout.js';

test('User can add products to cart and proceed to checkout', async ({ page }) => {
  const addToCart = new AddToCart(page);
  const loginUser = new LoginUser(page);
  const logout = new Logout(page);

  await addToCart.goto(env.url);
  await loginUser.login(login.email, login.password);
  await addToCart.addToCart();
  await addToCart.myaccount();
  await logout.clickLogout();
  await page.pause();
});