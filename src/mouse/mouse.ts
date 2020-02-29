import puppeteer from 'puppeteer';
import { xType } from '@/puppeteer/xPath';
import { mouseHelper } from '@/puppeteer/mouseHelper';

const mouse1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 },
    slowMo: 100,
  });
  (async () => {
    const page = await browser.newPage();
    await page.goto('https://www.google.com/', { waitUntil: 'load' });

    // @ts-ignore
    await page.evaluate(mouseHelper);
    await page.mouse.move(200, 200);

    await xType(
      page,
      '//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input',
      'R6SRS6R6SRS6R6SRS6R6SRS6'
    );

    await page.waitFor(1000);

    await page.mouse.move(900, 450);
    await page.mouse.click(900, 450);

    await page.waitForNavigation();

    await page.waitFor(10000);
  })().finally(async () => {
    await browser.close();
  });
};
mouse1();
