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

    await page.once('load', () => console.log('Page loaded!'));

    await page.on('console', msg => {
      for (let i = 0; i < msg.args().length; ++i)
        console.log(`${i}: ${msg.args()[i]}`);
    });
    await page.evaluate(() => console.log('hello', 5, { foo: 'bar' }));

    // JavaScriptを有効にするか
    await page.setJavaScriptEnabled(true);
    // オフラインモード
    await page.setOfflineMode(false);

    // リロード
    await page.reload();

  })().finally(async () => {
    await browser.close();
  });
};
sample1();
