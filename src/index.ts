import puppeteer from 'puppeteer';

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
  })().finally(async () => {
    await browser.close();
  });
};
sample1();
