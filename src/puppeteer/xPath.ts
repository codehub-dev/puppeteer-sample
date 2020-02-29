import puppeteer from 'puppeteer';

export const xElement = async (page: puppeteer.Page, xPath: string) => {
  await page.waitForXPath(xPath);
  const elementHandleList = await page.$x(xPath);
  return elementHandleList[0];
};

export const xClick = async (page: puppeteer.Page, xPath: string) => {
  const element = await xElement(page, xPath);
  await element.click();
};

export const xType = async (
  page: puppeteer.Page,
  xPath: string,
  typeString: string
) => {
  const element = await xElement(page, xPath);
  await element.type(typeString);
};
