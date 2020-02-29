import puppeteer from 'puppeteer';
import gotoOptions from '@/puppeteer/gotoOptions';

const sample1 = async () => {
  const url = 'https://www.google.com/';
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url, gotoOptions.load);

  await browser.close();
};
