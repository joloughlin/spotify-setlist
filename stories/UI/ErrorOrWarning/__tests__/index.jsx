const puppeteer = require('puppeteer');

describe('ErrorOrWarning', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:9001');
  });

  it('should match the image snapshot', async () => {
    await page.keyboard.down('Shift');
    await page.keyboard.down('ControlLeft');
    await page.keyboard.down('F');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
