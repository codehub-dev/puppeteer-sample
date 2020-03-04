import puppeteer from 'puppeteer';
import { KeyCode } from '@/puppeteer/keyboard';

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

    await page.screenshot({
      path: 'google.jpg',
      quality: 100,
      fullPage: true,
      encoding: 'binary',
    });

    // await page.pdf({ path: 'google.pdf' });

    // 範囲指定キャプチャ
    await page.goto('https://google.co.jp');
    await page.type(
      '#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input',
      'Puppeteer 翻訳'
    );
    await page.keyboard.press(KeyCode.Tab);
    await page.click(
      '#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b'
    );

    const targetElementSelector = '#tw-container';
    // await page.waitFor(targetElementSelector);

    await page.screenshot({ path: 'page-ss.png' });

    const clip = await page.evaluate(s => {
      const el = document.querySelector(s);

      // エレメントの高さと位置を取得
      const { width, height, top: y, left: x } = el.getBoundingClientRect();
      return { width, height, x, y };
    }, targetElementSelector);

    await page.screenshot({ clip, path: 'tw-container-ss.png' });

  })().finally(async () => {
    await browser.close();
  });
};
sample1();
