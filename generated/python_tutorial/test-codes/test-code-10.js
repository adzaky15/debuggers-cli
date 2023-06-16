/* 
    Test Case:
    [10] Check that the online bootcamps are well-organized and provide valuable learning opportunities for students.

    Steps:
    1. Navigate to the W3Schools homepage
    2. Click on the "Bootcamps" link in the navigation menu
    3. Verify that the "Online Bootcamps" section is displayed on the page
    4. Click on the "View Details" button for the first bootcamp listed
    5. Verify that the bootcamp details page is displayed
    6. Check that the page includes information on the course structure, syllabus, and instructor qualifications
    7. Click on the "Enroll Now" button
    8. Verify that the registration page is displayed
    9. Enter valid user information into the registration form and click "Submit"
    10. Verify that the payment page is displayed
    11. Enter valid payment information and click "Submit"
    12. Verify that the confirmation page is displayed and includes information on next steps and course access

*/

const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('W3Schools Bootcamp E2E Test', function() {

  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('should navigate to online bootcamps section and enroll in first bootcamp', async function() {
    // Step 1: Navigate to the W3Schools homepage
    await driver.get('https://www.w3schools.com');

    // Step 2: Click on the "Bootcamps" link in the navigation menu
    const bootcampLink = await driver.findElement(By.linkText('Bootcamps'));
    await bootcampLink.click();

    // Step 3: Verify that the "Online Bootcamps" section is displayed on the page
    const onlineBootcampSection = await driver.findElement(By.xpath('//h2[contains(text(), "Online Bootcamps")]'));
    assert.ok(await onlineBootcampSection.isDisplayed());

    // Step 4: Click on the "View Details" button for the first bootcamp listed
    const bootcampDetailsLink = await driver.findElement(By.xpath('//a[contains(@href, "bootcamp")]'));
    await bootcampDetailsLink.click();

    // Step 5: Verify that the bootcamp details page is displayed
    const bootcampDetailsPage = await driver.findElement(By.xpath('//h1[contains(text(), "Bootcamp Details")]'));
    assert.ok(await bootcampDetailsPage.isDisplayed());

    // Step 6: Check that the page includes information on the course structure, syllabus, and instructor qualifications
    const courseStructure = await driver.findElement(By.xpath('//h3[contains(text(), "Course Structure")]'));
    const syllabus = await driver.findElement(By.xpath('//h3[contains(text(), "Syllabus")]'));
    const instructorQualifications = await driver.findElement(By.xpath('//h3[contains(text(), "Instructor Qualifications")]'));
    assert.ok(await courseStructure.isDisplayed());
    assert.ok(await syllabus.isDisplayed());
    assert.ok(await instructorQualifications.isDisplayed());

    // Step 7: Click on the "Enroll Now" button
    const enrollNowButton = await driver.findElement(By.xpath('//button[contains(text(), "Enroll Now")]'));
    await enrollNowButton.click();

    // Step 8: Verify that the registration page is displayed
    const registrationPage = await driver.findElement(By.xpath('//h1[contains(text(), "Registration")]'));
    assert.ok(await registrationPage.isDisplayed());

    // Step 9: Enter valid user information into the registration form and click "Submit"
    const firstNameInput = await driver.findElement(By.name('firstName'));
    await firstNameInput.sendKeys('Test');
    const lastNameInput = await driver.findElement(By.name('lastName'));
    await lastNameInput.sendKeys('User');
    const emailInput = await driver.findElement(By.name('email'));
    await emailInput.sendKeys('testuser@example.com');
    const passwordInput = await driver.findElement(By.name('password'));
    await passwordInput.sendKeys('test123');
    const confirmPasswordInput = await driver.findElement(By.name('confirmPassword'));
    await confirmPasswordInput.sendKeys('test123');
    const submitButton = await driver.findElement(By.xpath('//button[contains(text(), "Submit")]'));
    await submitButton.click();

    // Step 10: Verify that the payment page is displayed
    const paymentPage = await driver.findElement(By.xpath('//h1[contains(text(), "Payment")]'));
    assert.ok(await paymentPage.isDisplayed());

    // Step 11: Enter valid payment information and click "Submit"
    const cardNumberInput = await driver.findElement(By.name('cardNumber'));
    await cardNumberInput.sendKeys('4111111111111111');
    const expirationMonthInput = await driver.findElement(By.name('expirationMonth'));
    await expirationMonthInput.sendKeys('01');
    const expirationYearInput = await driver.findElement(By.name('expirationYear'));
    await expirationYearInput.sendKeys('2024');
    const cvvInput = await driver.findElement(By.name('cvv'));
    await cvvInput.sendKeys('123');
    await submitButton.click();

    // Step 12: Verify that the confirmation page is displayed and includes information on next steps and course access
    const confirmationPage = await driver.findElement(By.xpath('//h1[contains(text(), "Confirmation")]'));
    const confirmationMessage = await driver.findElement(By.xpath('//p[contains(text(), "Congratulations, you are now enrolled!")]'));
    const courseAccessLink = await driver.findElement(By.xpath('//a[contains(text(), "Access the Course")]'));
    assert.ok(await confirmationPage.isDisplayed());
    assert.ok(await confirmationMessage.isDisplayed());
    assert.ok(await courseAccessLink.isDisplayed());
  });

  after(async function() {
    driver.quit();
  });

});