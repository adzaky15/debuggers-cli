// Begin test scenario:
/* 
7. Verify that the data analytics section includes tutorials on statistics, AI, and other critical topics. 
*/

const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');
const url = 'https://www.w3schools.com/';

describe('Data Analytics Tutorials', function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(url);
  });

  it('Should navigate to the Data Analytics section', async function () {
    await driver.findElement(By.linkText('Data Analytics')).click();
    const pageTitle = await driver.getTitle();
    assert.equal(pageTitle, 'Data Analytics Tutorials | W3Schools');
  });

  it('Should have a tutorial on statistics', async function () {
    const statisticsLink = await driver.findElement(By.linkText('Learn Statistics'));
    assert.notEqual(statisticsLink, null);
  });

  it('Should have a tutorial on AI', async function () {
    const aiLink = await driver.findElement(By.linkText('Learn AI'));
    assert.notEqual(aiLink, null);
  });

  it('Should have tutorials on other critical topics', async function () {
    const otherTopics = await driver.findElements(By.css('.w3-col.m4.l3 > .w3-card.w3-hover-shadow'));
    assert(otherTopics.length > 0);
  });

  after(async function () {
    await driver.quit();
  });
});

// End test scenario.