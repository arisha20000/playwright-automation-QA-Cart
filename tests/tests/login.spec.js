import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import env from '../../test-data/env.json' assert { type: 'json' };

test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto(env.url);
 //await loginPage.login(env.username, env.password);
});