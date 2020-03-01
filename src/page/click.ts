import puppeteer from 'puppeteer';
import { mouseHelper } from '../puppeteer/mouseHelper';

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
    await page.evaluate(mouseHelper);

    await page.waitForNavigation();

    await page.click('#hptl > a:nth-child(1)', { button: 'left' });
    await page.waitForNavigation();

    await page.goBack();
    await page.waitForNavigation();

    await page.hover(
      '#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b'
    );
  })().finally(async () => {
    await browser.close();
  });
};
sample1();
