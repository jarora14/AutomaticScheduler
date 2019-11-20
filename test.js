//const writeUserData = require('./index.js');// Import requirement packages



require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout automatic scheduler', function () {
    let driver;

    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Check Title', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        
        // Find the search box by id
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it
        
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > h1'));
        let titleText;
        await title.getText().then(function (text) {
            console.log(text);
            titleText = text;
            console.log(titleText);
         });
        assert.equal(titleText, 'OVERTURE SCHEDULING');
    });
    it('Check Admin and Verify title', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        
        // Find the search box by id
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div:nth-of-type(2) > label > b')), 10000);
        let title = await driver.findElement(By.css('div#id03 > form > div:nth-of-type(2) > label > b'));
        let titleText;
        await title.getText().then(function (text) {
            console.log(text);
            titleText = text;
            console.log(titleText);
         });
        assert.equal(titleText, 'Admin Password');
    });

    it('Verify Admin Login with correct input', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        
        // Find the search box by id
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it

        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.wait(until.elementLocated(By.css('input#adminPass')), 10000);
        await driver.findElement(By.css('input#adminPass')).sendKeys('1234',Key.RETURN);

        await driver.switchTo().alert().accept();

        let title = await driver.findElement(By.css('html > body > div > div > div > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log(text);
            titleText = text;
            console.log(titleText);
         });
        assert.equal(titleText, 'Logout');
    });
    it('Login Valid User', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        
        // Find the search box by id
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it
      

        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        
        await driver.findElement(By.css('input#emailLogin')).sendKeys('dont',Key.RETURN);
        
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('delete',Key.RETURN);
        
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();

        let title = await driver.findElement(By.css('html > body > div > div:nth-of-type(4) > div > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log(text);
            titleText = text;
            console.log(titleText);
         });
        assert.equal(titleText, 'Logout');
    });

    // close the browser after running tests
    this.afterEach(() => 
        
        driver && driver.quit());
})