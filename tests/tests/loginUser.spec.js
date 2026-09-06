import { test } from '@playwright/test';
import { LoginUser } from '../../pages/loginUser.js';
import env from '../../test-data/env.json' with { type: 'json' };
import login from '../../test-data/login.json' with { type: 'json' };
import { Logout } from '../../pages/logout.js';

test('User can login with valid credentials', async ({ page }) => {
  const loginUser = new LoginUser(page);
  const logout = new Logout(page);

  await loginUser.goto(env.url);
  await loginUser.login(login.email, login.password);
  await logout.clickLogout();
  //await page.pause();
});