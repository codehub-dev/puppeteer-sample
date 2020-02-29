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
    await page.goto('https://map.ultra-zone.net/g/', { waitUntil: 'load' });

    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://www.google.com/', [
      permissionsList.geolocation,
    ]);

    const client = await page.target().createCDPSession();
    await client.send('Emulation.setGeolocationOverride', {
      latitude: 35.681236,
      longitude: 139.767125,
      accuracy: 100,
    });

    const result = await page.evaluate(() => {
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      });
    });
    console.log(result);

    await page.waitFor(10000);
  })().finally(async () => {
    await browser.close();
  });
};
sample1();
