import { expect } from '@playwright/test';

export class actionClass {

  // =========================
  // CLICK OPERATIONS
  // =========================

  clickElement(page, locator) {
    return page.locator(locator).click({ timeout: 15000 });
  }

  clickOutsideModal(page) {
    return page.locator('body').click({ position: { x: 0, y: 0 } });
  }

  clickSampleElement(page, locator) {
    return locator.click();
  }

  clickRadioButton(page, locator) {
    return page.locator(locator).click({ timeout: 15000 });
  }

  forceEnableAndSetText(page, locator, text) {
    return page.locator(locator).fill(text, { timeout: 15000 });
  }

  forceEnableAndSetTextByXpath(page, locator, text) {
    return page.locator(`xpath=${locator}`).fill(text, { timeout: 15000 });
  }

  forceEnableAndSetTextFirstByXpath(page, locator, text) {
    return page.locator(`xpath=${locator}`).first().fill(text, {
      timeout: 15000
    });
  }

  forceEnableElement(page, locator) {
    return page.locator(locator).click({
      timeout: 15000,
      force: true
    });
  }

  forceEnableElementByXpath(page, locator) {
    return page.locator(`xpath=${locator}`).click({
      timeout: 15000,
      force: true
    });
  }

  forceEnableFirstElementByXpath(page, locator) {
    return page.locator(`xpath=${locator}`).first().click({
      timeout: 15000,
      force: true
    });
  }

  forceMultiEnableElementByXpath(page, locator) {
    return page.locator(`xpath=${locator}`).click({
      timeout: 15000,
      force: true
    });
  }

  async clickElementByXpathVisible(page, locator) {
    const element = page.locator(`xpath=${locator}`).first();

    await expect(element).toBeVisible({ timeout: 15000 });
    await element.click({
      timeout: 15000,
      force: true
    });
  }


  // =========================
  // SCROLL
  // =========================

  async scrollDown(page) {
    await page.evaluate(() => {
      window.scrollTo(0, 500);
    });

    const scrollbar = page.locator('.rc-virtual-list-scrollbar-thumb');

    if (await scrollbar.count() > 0) {
      await scrollbar.scrollIntoViewIfNeeded();
    }
  }

  async scrollTop(page) {
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }


  // =========================
  // TEXT INPUT
  // =========================

  setText(page, locator, value) {
    return page.locator(locator).fill(value);
  }

  async fuzzySearchDropDown(page, locator1, value, locator2) {
    await page.locator(locator1).fill(value);

    await page.waitForTimeout(6000);

    await page.locator(`xpath=${locator2}`).click({
      timeout: 15000,
      force: true
    });
  }

  async fuzzySearchDropDownByXpath(page, locator1, value, locator2) {
    await page.locator(`xpath=${locator1}`).fill(value);

    await page.waitForTimeout(500);

    await page.locator(`xpath=${locator2}`).click({
      timeout: 15000,
      force: true
    });
  }


  // =========================
  // CHECKBOX
  // =========================

  checked(page, locator, value = true) {
    return page.locator(locator).setChecked(value, {
      timeout: 15000
    });
  }

  checkedByXpath(page, locator, value = true) {
    return page.locator(`xpath=${locator}`).setChecked(value, {
      timeout: 15000
    });
  }


  // =========================
  // DROPDOWN
  // =========================

  async selectDropDownValue(page, locator, value) {
    await page.locator(locator).selectOption(value, {
      timeout: 15000
    });

    const selectedValue = await page.locator(locator).inputValue();

    console.log('Selected value:', selectedValue);

    return selectedValue;
  }

  async selectDropDownValueByXpath(page, locator, value) {
    await page.locator(`xpath=${locator}`).selectOption(value, {
      timeout: 15000
    });

    const selectedValue = await page
      .locator(`xpath=${locator}`)
      .inputValue();

    console.log('Selected value:', selectedValue);

    return selectedValue;
  }

  async selectFirstValueDD(page, locator) {
    const dropdown = page.locator(locator);

    const secondValue = await dropdown
      .locator('option')
      .nth(1)
      .getAttribute('value');

    await dropdown.selectOption(secondValue);

    return secondValue;
  }

  selectDDValueByXpath(page, locator, value) {
    return page
      .locator(`xpath=${locator}`)
      .selectOption(value, { timeout: 30000 });
  }

  selectDDValue(page, locator, value) {
    return page
      .locator(locator)
      .selectOption(value, { timeout: 15000 });
  }

  async selectMultipleForceDropDownValueByXpath(page, locator, value) {
    await page.locator(`xpath=${locator}`).click({
      timeout: 15000,
      force: true
    });

    await page.locator(`xpath=${value}`).click({
      timeout: 15000,
      force: true
    });
  }


  // =========================
  // CLEAR TEXT
  // =========================

  clearText(page, locator) {
    return page.locator(locator).clear({ timeout: 15000 });
  }

  clearTextByXpath(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .clear({ timeout: 15000 });
  }

  clearTextByXpathLast(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .last()
      .clear({ timeout: 15000 });
  }


  // =========================
  // TEXT INPUT - XPATH
  // =========================

  setTextByXpath(page, locator, value) {
    return page
      .locator(`xpath=${locator}`)
      .fill(value, { timeout: 15000 });
  }

  setTextFirstElementByXpath(page, locator, value) {
    return page
      .locator(`xpath=${locator}`)
      .first()
      .fill(value, { timeout: 15000 });
  }

  setTextLastElementByXpath(page, locator, value) {
    return page
      .locator(`xpath=${locator}`)
      .last()
      .fill(value, { timeout: 15000 });
  }


  // =========================
  // GET TEXT
  // =========================

  getTextByElement(page, locator) {
    return page
      .locator(locator)
      .textContent({ timeout: 15000 });
  }

  getTextByElementByXpath(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .textContent({ timeout: 15000 });
  }


  // =========================
  // ENTER
  // =========================

  async typeAndEnterByXpath(page, locator, value) {
    const element = page.locator(`xpath=${locator}`);

    await element.fill(value, { timeout: 15000 });
    await element.press('Enter');
  }

  async typeAndEnter(page, locator, value) {
    const element = page.locator(locator);

    await element.fill(value, { timeout: 15000 });
    await element.press('Enter');
  }

  hitEnter(page, locator) {
    return page.locator(locator).press('Enter');
  }


  // =========================
  // WAIT
  // =========================

  wait(page) {
    return page.waitForTimeout(4000);
  }

  smallwait(page) {
    return page.waitForTimeout(1000);
  }

  async waitNoExist(page, locator) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toHaveCount(0, {
      timeout: 15000
    });

    await page.waitForTimeout(3000);
  }

  async waitNotVisible(page, locator) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toBeHidden({
      timeout: 15000
    });

    await page.waitForTimeout(3000);
  }

  async waitBeVisibleByXpath(page, locator) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toBeVisible({
      timeout: 60000
    });

    await page.waitForTimeout(3000);
  }


  // =========================
  // FILE UPLOAD
  // =========================

  fileUploaderByXpath(page, locator, FilePath) {
    return page
      .locator(`xpath=${locator}`)
      .setInputFiles(FilePath);
  }

  fileUploader(page, locator, FilePath) {
    return page
      .locator(locator)
      .setInputFiles(FilePath);
  }

  attachFileByXpath(page, locator, fileName) {
    return page
      .locator(`xpath=${locator}`)
      .setInputFiles(fileName);
  }


  // =========================
  // XPATH CLICK
  // =========================

  clickElementByXpath(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .click({ timeout: 15000 });
  }

  async clickElementByXpathMultiple(page, locator, n) {
    for (let i = 0; i < n; i++) {
      await page
        .locator(`xpath=${locator}`)
        .last()
        .click({ timeout: 60000 });
    }
  }

  clickLastElement(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .last()
      .click({ timeout: 15000 });
  }


  // =========================
  // VERIFICATION
  // =========================

  async shouldContains(page, email) {
    const td = page.locator('td', {
      hasText: email
    });

    await expect(td).toBeVisible({
      timeout: 15000
    });

    await expect(td).toHaveText(email);
  }

  async shoudVerifyURLPath(page, path) {
    await expect(page).toHaveURL(
      new RegExp(path),
      {
        timeout: 30000
      }
    );
  }

  async shouldContainsByXpath(page, locator, text) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toHaveText(text, {
      timeout: 10000
    });
  }


  // =========================
  // ENABLED / DISABLED
  // =========================

  async shouldEnabled(page, locator) {
    await expect(
      page.locator(locator)
    ).toBeEnabled({
      timeout: 15000
    });
  }

  async shouldDisabled(page, locator) {
    await expect(
      page.locator(locator)
    ).toBeDisabled({
      timeout: 15000
    });
  }

  async shouldHaveByXpath(page, locator, text) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toHaveText(text, {
      timeout: 15000
    });
  }


  // =========================
  // VISIBILITY
  // =========================

  async shouldVisibleByXpath(page, locator) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toBeVisible({
      timeout: 8000
    });

    return true;
  }

  async shouldVisibleByXpathEnable(page, locator) {
    const element = page
      .locator(`xpath=${locator}`)
      .first();

    await expect(element).toBeVisible({
      timeout: 7000
    });

    await expect(element).toBeEnabled({
      timeout: 7000
    });

    return true;
  }


  // =========================
  // TABLE
  // =========================

  async shouldVisibleInTable(page, locator, tagname, text) {
    const element = page
      .locator(locator)
      .locator(tagname, {
        hasText: text
      });

    await expect(element).toBeVisible({
      timeout: 15000
    });
  }

  async shouldVisibleInTableByXpath(
    page,
    locator,
    tagname,
    text
  ) {
    const element = page
      .locator(`xpath=${locator}`)
      .locator(tagname, {
        hasText: text
      });

    await expect(element).toBeVisible({
      timeout: 15000
    });
  }

  async shouldVerifyCountByXpath(
    page,
    locator,
    tagname,
    text
  ) {
    const count = await page
      .locator(`xpath=${locator}`)
      .locator(tagname)
      .count();

    expect(count).toBe(Number(text));
  }


  // =========================
  // CONTAINS
  // =========================

  async contains(page, locator, text) {
    await expect(
      page.locator(locator)
    ).toContainText(text, {
      timeout: 15000
    });
  }

  async containsByXpath(page, locator, text) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toContainText(text, {
      timeout: 15000
    });
  }


  // =========================
  // EXIST / NOT EXIST
  // =========================

  async shouldVisible(page, locator) {
    await expect(
      page.locator(locator)
    ).toBeVisible({
      timeout: 70000
    });
  }

  async shouldNotVisible(page, locator) {
    await expect(
      page.locator(locator)
    ).toHaveCount(0, {
      timeout: 70000
    });
  }

  async shouldNotVisibleByXpth(page, locator) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toHaveCount(0, {
      timeout: 60000
    });
  }


  // =========================
  // VISIBLE + CONTAINS
  // =========================

  async shouldVisibleAndContains(page, locator, text) {
    const element = page.locator(locator);

    await expect(element).toBeVisible({
      timeout: 15000
    });

    await expect(element).toContainText(text);
  }

  async clickElementByContainsText(page, locator, text) {
    await page
      .locator(locator)
      .getByText(text)
      .click({
        timeout: 15000
      });
  }

  async clickElementByXpathByContainsText(
    page,
    locator,
    text
  ) {
    await page
      .locator(`xpath=${locator}`)
      .getByText(text)
      .click({
        timeout: 15000
      });
  }


  // =========================
  // EXPECT
  // =========================

  async expectEqual(page, locator, text) {
    await expect(
      page.locator(locator)
    ).toHaveText(text, {
      timeout: 15000
    });
  }

  async expectEqualByXpath(page, locator, text) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toHaveText(text, {
      timeout: 15000
    });
  }

  async expectVisible(page, locator) {
    await expect(
      page.locator(locator)
    ).toBeVisible({
      timeout: 15000
    });
  }

  async expectVisibleByXpath(page, locator) {
    await expect(
      page.locator(`xpath=${locator}`)
    ).toBeVisible({
      timeout: 15000
    });
  }

  async expectVisibleAndEqual(page, locator, text) {
    const element = page.locator(locator);

    await expect(element).toBeVisible({
      timeout: 15000
    });

    await expect(element).toHaveText(text);
  }

  async expectVisibleAndEqualByXpath(
    page,
    locator,
    text
  ) {
    const element = page
      .locator(`xpath=${locator}`)
      .first();

    await expect(element).toBeVisible({
      timeout: 15000
    });

    await expect(element).toHaveText(text);
  }


  // =========================
  // FIRST / LAST ELEMENT
  // =========================

  clickOnFirstName(page, locator, value) {
    return page
      .locator(`xpath=${locator}`)
      .first()
      .fill(value);
  }

  clickOnFirstElement(page, locator) {
    return page
      .locator(locator)
      .first()
      .click({
        timeout: 15000
      });
  }

  clickOnFirstElementByXpath(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .first()
      .click({
        timeout: 4500
      });
  }

  clickOnLastElementByXpath(page, locator) {
    return page
      .locator(`xpath=${locator}`)
      .last()
      .click({
        timeout: 15000
      });
  }


  // =========================
  // DATE PICKER
  // =========================

  async GetDateFromDatePicker(page, locator, date) {
    const input = page.locator(locator);

    await input.fill(date);

    await input.press('Tab');
  }

  async GetDateFromDatePickerByXpath(
    page,
    locator,
    date
  ) {
    const input = page
      .locator(`xpath=${locator}`)
      .last();

    await input.fill(date);

    await input.press('Tab');
  }


  // =========================
  // CLEAR COOKIES
  // =========================

  async clearCookies(page) {
    await page.context().clearCookies();

    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  }


  // =========================
  // VERIFY INPUT VALUE
  // =========================

  async verifyDataAtLocator(
    page,
    locator,
    expectedData
  ) {
    const element = page.locator(locator);

    await expect(element).toBeVisible();

    await expect(element).toHaveValue(expectedData);
  }

  async verifyDataAtLocatorbyXpath(
    page,
    locator,
    expectedData
  ) {
    const element = page
      .locator(`xpath=${locator}`);

    await expect(element).toBeVisible();

    await expect(element).toHaveValue(expectedData);
  }


  // =========================
  // URL / HASH
  // =========================

  async verifyUrlChange(page, value) {
    await expect.poll(
      async () => new URL(page.url()).hash,
      {
        timeout: 15000
      }
    ).toBe(value);
  }


  // =========================
  // BOOLEAN
  // =========================

  shouldBeTrue(boolValue) {
    expect(boolValue).toBe(true);
  }


  // =========================
  // COUNT
  // =========================

  async countVisibleByXpath(page, locator) {
    return await page
      .locator(`xpath=${locator}`)
      .count();
  }


  // =========================
  // RANDOM NUMBER
  // =========================

  ranodomNum() {
    const randomInt =
      Math.floor(Math.random() * (50 - 10 + 1)) + 10;

    console.log(randomInt);

    return randomInt;
  }


  // =========================
  // GET INPUT VALUE
  // =========================

  async getStringvalue(page, locator) {
    const inputValue = await page
      .locator(locator)
      .inputValue();

    console.log(inputValue);

    return inputValue;
  }
}


// =====================================================
// PAGINATION
// =====================================================

export async function clickThroughPagination(
  page,
  nextButtonSelector,
  maxAttempts = 100
) {
  let attempts = 0;

  while (attempts < maxAttempts) {

    const button = page.locator(nextButtonSelector);

    if (await button.count() === 0) {
      console.log(
        'Reached the last page. Next button not found.'
      );
      break;
    }

    const isVisible = await button.isVisible();

    if (!isVisible) {
      console.log(
        'Reached the last page. Next button not visible.'
      );
      break;
    }

    const isDisabled = await button.isDisabled();

    if (isDisabled) {
      console.log(
        'Reached the last page. Next button disabled.'
      );
      break;
    }

    await button.click();

    await page.waitForTimeout(1500);

    attempts++;
  }

  if (attempts >= maxAttempts) {
    console.log(
      'Maximum pagination attempts reached.'
    );
  }
}


// =====================================================
// CLICK LAST VIEW BUTTON
// =====================================================

export async function clickLastViewButton(
  page,
  locator
) {
  const lastRow = page
    .locator(locator)
    .locator('tr')
    .last();

  await lastRow
    .locator('td')
    .last()
    .locator('.bi.bi-eye-fill')
    .click({
      timeout: 15000
    });
}


// =====================================================
// ADD DAYS TO DATE
// =====================================================

export function addDaysToDate(daysToAdd) {
  const futureDate = new Date();

  futureDate.setDate(
    futureDate.getDate() + daysToAdd
  );

  const year = futureDate.getFullYear();

  const month = String(
    futureDate.getMonth() + 1
  ).padStart(2, '0');

  const day = String(
    futureDate.getDate()
  ).padStart(2, '0');

  return `${year}-${month}-${day}`;
}