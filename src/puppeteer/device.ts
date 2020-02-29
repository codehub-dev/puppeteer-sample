import puppeteer from 'puppeteer';
import devices from 'puppeteer/DeviceDescriptors';

export enum DeviceType {
  PC_2K = '2K',
  PC_4K = '4K',
  SP = 'iPhone X',
  TABLET = 'iPad Pro',
}

export const deviceSelector = async (
  page: puppeteer.Page,
  device: DeviceType
) => {
  switch (device) {
    case DeviceType.PC_2K:
      await page.setViewport({ width: 1920, height: 1080 });
      break;
    case DeviceType.PC_4K:
      await page.setViewport({ width: 3840, height: 2160 });
      break;
    default:
      await page.emulate(devices[device]);
      break;
  }
};
