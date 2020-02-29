import puppeteer from 'puppeteer';
import { xType } from '@/puppeteer/xPath';

const sample1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 },
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/', { waitUntil: 'load' });

  await xType(
    page,
    '//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input',
    'wiki'
  );
  await page.keyboard.press('Enter');

  await browser.close();
};

export default sample1;
