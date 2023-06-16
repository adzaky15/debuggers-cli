// Test scenario:
// Business logic 9: Confirm that all paid services, including W3Schools Spaces and PRO features, function as expected and are easy to use.

const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to the W3Schools website
    await driver.get('https://www.w3schools.com/');

    // Open the Services dropdown
    await driver.findElement(By.id('navbtn_services')).click();

    // Click the PRO feature link
    await driver.findElement(By.linkText('PRO features')).click();

    // Verify that the PRO features page loads
    let proFeaturesHeader = await driver.findElement(By.tagName('h1')).getText();
    assert.strictEqual(proFeaturesHeader, 'W3Schools PRO Features');

    // Click the 'Start Now' button on the pricing page
    await driver.findElement(By.linkText('Start Now')).click();

    // Switch to the iframe containing the Spaces editor
    await driver.switchTo().frame('w3spaces');

    // Verify that the Spaces editor loads
    let spacesHeaderText = await driver.findElement(By.tagName('h1')).getText();
    assert.strictEqual(spacesHeaderText, 'Create a Website with W3Schools Spaces');

    // Click the 'Start Now' button on the Spaces editor page
    await driver.findElement(By.xpath("//div[contains(text(), 'Start Now')]")).click();
    await driver.wait(until.urlContains('spaces'), 5000);

    // Verify that the Spaces editor loads
    let newSpacesHeaderText = await driver.findElement(By.tagName('h1')).getText();
    assert.strictEqual(newSpacesHeaderText, 'My Spaces');

    // Click the 'Create New Space' button
    await driver.findElement(By.linkText('Create New Space')).click();
    await driver.wait(until.urlContains('newspace'), 5000);

    // Verify that the New Space page loads
    let newSpaceHeaderText = await driver.findElement(By.tagName('h1')).getText();
    assert.strictEqual(newSpaceHeaderText, 'Create a New Space');

    console.log('Paid services test successful');
  } catch(err) {
    console.log('Error: ' + err.message);
  } finally {
    await driver.quit();
  }
})();