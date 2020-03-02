const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://books.toscrape.com/");
  await page.screenshot({ path: "screenshots/teste.pdf" });
  await page.pdf({ path: "screenshots/teste.pdf", format: "A4" });

  await browser.close();
})();
