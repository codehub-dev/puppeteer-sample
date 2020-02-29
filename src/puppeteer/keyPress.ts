import puppeteer from 'puppeteer';

export enum KeyCode {
  Enter = 'Enter',
}

export const keyPress = async (page: puppeteer.Page, key: KeyCode) => {
  await page.keyboard.press(key);
};
