import { test } from '@playwright/test';
import { RegisterPage } from '../../pages/registerPage.js';
import env from '../../test-data/env.json' with { type: 'json' };
import register from '../../test-data/register.json' with { type: 'json' };

test('User can register with a valid email', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goto(env.url);
  await registerPage.register(register.email);
  await page.pause();
});