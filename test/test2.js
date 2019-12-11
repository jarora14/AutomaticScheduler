//const writeUserData = require('./index.js');// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
let name = "test3";
let email = "test3";
let password = "test3";

describe('Automatic Scheduler Employee Home Page', function () {
    let driver;
    
    this.beforeAll(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('test',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('test',Key.RETURN);
    
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.sleep(250000);
    });
    
    /////////////////////////////////////HOME PAGE/////////////////////////////////////

    it('Check ', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a')), 10000);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')), 10000);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > h1'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Title Found: ",text);
            console.log("Title Desired: ","OVERTURE SCHEDULING");
            titleText = text;

         });
        assert.equal(titleText, 'OVERTURE SCHEDULING');
    });





    // close the browser after running tests
    this.afterAll(() => 
        driver && driver.quit());
})