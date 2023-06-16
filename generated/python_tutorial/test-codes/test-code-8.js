// Test Scenario: 
// 8. Test that the RWD tutorial includes clear explanations of responsive design principles and best practices.

const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe("W3Schools RWD Tutorial", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("https://www.w3schools.com/css/css_rwd_intro.asp");
  });

  after(async () => {
    await browser.close();
  });

  it("should have a clear explanation of responsive design principles", async () => {
    const headerText = await page.$eval("h2", (el) => el.textContent);
    expect(headerText).to.contain("Responsive Web Design - Introduction");

    const sectionTitle = await page.$eval("#section1 h3", (el) => el.textContent);
    expect(sectionTitle).to.contain("What is Responsive Web Design");

    const sectionContent = await page.$eval("#section1 p", (el) => el.textContent);
    expect(sectionContent).to.contain("Responsive web design makes your web page look good on all devices.");

    const imageAlt = await page.$eval("#section1 img", (el) => el.alt);
    expect(imageAlt).to.contain("RWD Infographic");
  });

  it("should include best practices for responsive design", async () => {
    const sectionTitle = await page.$eval("#section3 h3", (el) => el.textContent);
    expect(sectionTitle).to.contain("Responsive Web Design - Best Practices");

    const sectionContent = await page.$eval("#section3 p", (el) => el.textContent);
    expect(sectionContent).to.contain("Follow these best practices to ensure that your website is fully responsive:");

    const tipList = await page.$$eval("#section3 ul li", (list) => list.map((item) => item.textContent.trim()));
    expect(tipList).to.include("Use relative units for all lengths and font sizes");
    expect(tipList).to.include("Avoid fixed widths for elements");
    expect(tipList).to.include("Use breakpoints to define your layout");
  });
});