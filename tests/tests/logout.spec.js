import { test } from '@playwright/test';
import { LoginUser } from '../../pages/loginUser.js';
import { Logout } from '../../pages/logout.js';
import env from '../../test-data/env.json' with { type: 'json' };
import login from '../../test-data/login.json' with { type: 'json' };

test('User can logout after logging in', async ({ page }) => {
  const loginUser = new LoginUser(page);
  const logout = new Logout(page);

  await loginUser.goto(env.url);
  await loginUser.login(login.email, login.password);
  await logout.clickLogout();
});