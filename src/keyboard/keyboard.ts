import puppeteer from 'puppeteer';
// import sleep from '@/puppeteer/sleep';
import { permissionsList } from '@/puppeteer/permissions';

const sample1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 },
    slowMo: 100,
  });
  (async () => {
    const page = await browser.newPage();
    await page.goto('https://www.google.com/', { waitUntil: 'load' });

    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://www.google.com/', [
      permissionsList.geolocation,
    ]);

    await page.focus('input[name="q"]');

    // 「A」を入力
    await page.keyboard.down('Shift');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Shift');

    // 「N」を入力
    await page.keyboard.sendCharacter('N');

    // 左に一個移動してバックスペース
    // 「AN」が入力されているので「N」になる
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Backspace');

    // Enterキー入力
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    await page.focus('input[name="q"]');

    // 入力時に遅延
    await page.keyboard.type('レインボーシックスシージ　year5', { delay: 100 });
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    await page.keyboard.press('Enter');

    await page.waitFor(10000);
  })().finally(async () => {
    await browser.close();
  });
};
sample1();
