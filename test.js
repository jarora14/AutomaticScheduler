//const writeUserData = require('./index.js');// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Automatic Scheduler Sign-in Page', function () {
    let driver;
    
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    
    /////////////////////////////////////HOME PAGE/////////////////////////////////////

    it('Check Title is displayed on page...', async function() {
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
            console.log("Title Found: ",text);
            console.log("Title Desired: ","OVERTURE SCHEDULING");
            titleText = text;

         });
        assert.equal(titleText, 'OVERTURE SCHEDULING');
    });

    /////////////////////////////////////ADMIN BUTTON/////////////////////////////////////

    it('Click Admin button and verify user taken to correct Page...', async function() {
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
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div:nth-of-type(2) > button')), 10000);
        
        let title = await driver.findElement(By.css('div#id03 > form > div:nth-of-type(2) > label > b'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Admin Password");
            titleText = text;
         });
        assert.equal(titleText, 'Admin Password');
    });

    it('Click Admin button, then click cancel button, verify user can see homepage...', async function() {
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
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div:nth-of-type(3) > button')), 10000);
        let element = await driver.findElement(By.css("div#id03 > form > div:nth-of-type(3) > button"));
        driver.executeScript("arguments[0].click()",element);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > h1'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Title Found: ",text);
            console.log("Title Desired: ","OVERTURE SCHEDULING");
            titleText = text;

         });
        assert.equal(titleText, 'OVERTURE SCHEDULING');
    });

    //TODO UPDATE WHEN ADMIN PAGE IS DEVELOPED
    it('Enter Correct Admin password and be brought to admin page...', async function() {
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
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();

        let title = await driver.findElement(By.css('html > body > div > div > div > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Button Label found: ",text);
            titleText = text;
            console.log("Button Label expected: ","Logout");
         });
        assert.equal(titleText, 'Logout');
    });
    //TODO UPDATE WHEN ADMIN PAGE IS DEVELOPED
    it('Enter Incorrect Admin password, should be notified the credentials are invalid...', async function() {
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
        await driver.findElement(By.css('input#adminPass')).sendKeys('123',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        let text = await driver.switchTo().alert().getText();

        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Invalid Admin credentials");

        assert.equal(text, 'Invalid Admin credentials');
    });

    /////////////////////////////////////LOGIN BUTTON/////////////////////////////////////

    it('Click Login button and verify user taken to correct Page...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        // Find the search box by id
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.wait(until.elementLocated(By.css('div#id01 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000);
        
        let title = await driver.findElement(By.css('div#id01 > form > div:nth-of-type(2) > label > b'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Email");
            titleText = text;
         });
        assert.equal(titleText, 'Email');
    });

    it('Click Login button, then click cancel button, verify user can see homepage...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        // Find the search box by id
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.wait(until.elementLocated(By.css('div#id01 > form > div:nth-of-type(3) > button')), 10000);
        let element = await driver.findElement(By.css("div#id01 > form > div:nth-of-type(3) > button"));
        
        driver.executeScript("arguments[0].click()",element);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > h1'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Title Found: ",text);
            console.log("Title Desired: ","OVERTURE SCHEDULING");
            titleText = text;

         });
        assert.equal(titleText, 'OVERTURE SCHEDULING');
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
        
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000);
        
        await driver.findElement(By.css('input#emailLogin')).sendKeys('dont',Key.RETURN);
        
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('delete',Key.RETURN);
        
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();

        let title = await driver.findElement(By.css('html > body > div > div:nth-of-type(4) > a:nth-of-type(2)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Button Label Found: ",text);
            titleText = text;
            console.log("Button Label Expected: ",'View schedule');
         });
        assert.equal(titleText, 'View schedule');
    });

    // close the browser after running tests
    this.afterEach(() => 
        driver && driver.quit());
})