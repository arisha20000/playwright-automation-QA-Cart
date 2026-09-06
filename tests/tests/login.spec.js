import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import env from '../../test-data/env.json' with { type: 'json' };

test('User can open the website', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto(env.url);
  await page.pause();
 //await loginPage.login(env.username, env.password);
});