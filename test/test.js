//const writeUserData = require('./index.js');// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
let name = "test3";
let email = "test3";
let password = "test3";

describe('Automatic Scheduler Sign-in Page', function () {
    let driver;
    
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
 /*   
    /////////////////////////////////////HOME PAGE/////////////////////////////////////

    it('Check Title is displayed on page...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
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

    /////////////////////////////////////ADMIN BUTTON/////////////////////////////////////

    it('Click Admin button and verify user taken to correct Page...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div:nth-of-type(2) > button')), 10000);
        
        await driver.wait(until.elementLocated(By.css('div#id03 > form')), 10000);
        
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
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div:nth-of-type(3) > button')), 10000);
        let element = await driver.findElement(By.css("div#id03 > form > div:nth-of-type(3) > button"));
        driver.executeScript("arguments[0].click()",element);
        await driver.sleep(250);
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
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#adminPass')), 10000);
        await driver.findElement(By.css('input#adminPass')).sendKeys('1234',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.sleep(250);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Button Label found: ",text);
            titleText = text;
            console.log("Button Label expected: ","Create Event");
         });
        assert.equal(titleText, 'Create Event');
    });


    //TODO UPDATE WHEN ADMIN PAGE IS DEVELOPED
    it('Enter Incorrect Admin password, should be notified the credentials are invalid...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.sleep(250);
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
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id01 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id01 > form')), 10000);
        
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
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id01 > form > div:nth-of-type(3) > button')), 10000);
        let element = await driver.findElement(By.css("div#id01 > form > div:nth-of-type(3) > button"));
        driver.executeScript("arguments[0].click()",element);
        await driver.sleep(250);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > h1'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Title Found: ",text);
            console.log("Title Desired: ","OVERTURE SCHEDULING");
            titleText = text;

         });
        assert.equal(titleText, 'OVERTURE SCHEDULING');
    });
    
 
    it('Login with valid user and verify user is brough to employee home screen...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('test',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('test',Key.RETURN);
    
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.sleep(250);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(6) > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Button Label Found: ",text);
            titleText = text;
            console.log("Button Label Expected: ",'Set availablility');
         });
        assert.equal(titleText, 'Set availability');
    });
  
    it('Attempt Login with invalid Credentials, accept alert and verify user is not logged in...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('invalid',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('credentials',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        let title = await driver.findElement(By.css('div#id01 > form > div:nth-of-type(2) > label > b'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Email");
            titleText = text;
         });
        assert.equal(titleText, 'Email');

    });

    it('Attempt Login with invalid Credentials once, verify 2 attempts left...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('invalid',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('credentials',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","You have left 2 attempt;");
        assert.equal(text, 'You have left 2 attempt;');
    });
 
    it('Attempt Login with invalid Credentials 2 times, verify 1 attempts left...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('invalid',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('credentials',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000); 
        await driver.findElement(By.css('button#submit')).click();
        await driver.wait(until.alertIsPresent());
        
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","You have left 1 attempt;");
        assert.equal(text, 'You have left 1 attempt;');
    });
 
    it('Attempt Login with invalid Credentials 3 times, verify 0 attempts left...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('invalid',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('credentials',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000); 
        await driver.findElement(By.css('button#submit')).click();
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000); 
        await driver.findElement(By.css('button#submit')).click();
        await driver.wait(until.alertIsPresent());
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","You have left 0 attempt;");
        assert.equal(text, 'You have left 0 attempt;');
    });

    it('Attempt Login with invalid Credentials 3 times, Login button disabled', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys('invalid',Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys('credentials',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000); 
        await driver.findElement(By.css('button#submit')).click();
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000); 
        await driver.findElement(By.css('button#submit')).click();
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.css('button#submit')), 10000);

        let loginButton =  await driver.findElement(By.css('button#submit')).isEnabled();
        console.log("Boolean Found: ",loginButton);
        console.log("Boolean Desired: ",false);
        assert.equal(false,loginButton);
    });

    /////////////////////////////////////SIGN UP BUTTON/////////////////////////////////////

    
   it('Click Sign up button and verify user taken to correct Page...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(3) > b')), 10000);
        
        let title = await driver.findElement(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(3) > b'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Create Password");
            titleText = text;
        });
        assert.equal(titleText, 'Create Password');
    });

    it('Click Sign up button then cancel and verify user taken to correct Page...', async function() {
        // Load the page
       await driver.get('http://127.0.0.1:5000');
       await driver.sleep(250);
       await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
       await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
       await driver.sleep(250);
       await driver.wait(until.elementLocated(By.css('div#id02 > span')), 10000);
       let element = await driver.findElement(By.css("div#id03 > form > div:nth-of-type(3) > button"));
       driver.executeScript("arguments[0].click()",element);
       await driver.sleep(250);
       let title = await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > h1'));
       let titleText;
       await title.getText().then(function (text) {
           console.log("Title Found: ",text);
           console.log("Title Desired: ","OVERTURE SCHEDULING");
           titleText = text;

        });
       assert.equal(titleText, 'OVERTURE SCHEDULING');
    });

    it('Click Sign up button and create new user then log in with user. . .', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('input#userNameRegister')), 10000);

        await driver.findElement(By.css('input#userNameRegister')).sendKeys(name);
        await driver.findElement(By.css('input#emailRegister')).sendKeys(email);
        await driver.findElement(By.css('input#passwordRegister')).sendKeys(password);
        await driver.findElement(By.css('input#passwordRegister2')).sendKeys(password);
        await driver.findElement(By.css('div#id02 > form > div:nth-of-type(2) > button')).click();

        await driver.sleep(250);
        await driver.wait(until.alertIsPresent());
        await driver.sleep(250);
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Account Created!");
        assert.equal(text, 'Account Created!');
    
    });

    it('Login with new user and verify user is brough to employee home screen...', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#emailLogin')), 10000); 
        await driver.findElement(By.css('input#emailLogin')).sendKeys(email,Key.RETURN);
        await driver.findElement(By.css('input#passwordLogin')).sendKeys(password,Key.RETURN);
    
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.sleep(250);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(6) > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Button Label Found: ",text);
            titleText = text;
            console.log("Button Label Expected: ",'Set availablility');
         });
        assert.equal(titleText, 'Set availability');
    });

    it('Click Sign up button and attempt to create user with used email. . .', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('input#userNameRegister')), 10000);

        await driver.findElement(By.css('input#userNameRegister')).sendKeys(name);
        await driver.findElement(By.css('input#emailRegister')).sendKeys(email);
        await driver.findElement(By.css('input#passwordRegister')).sendKeys(password);
        await driver.findElement(By.css('input#passwordRegister2')).sendKeys(password);
        await driver.findElement(By.css('div#id02 > form > div:nth-of-type(2) > button')).click();

        await driver.wait(until.alertIsPresent());
        await driver.sleep(250);
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Email already registered.");
        assert.equal(text, 'Email already registered.');
    });

    it('Click Sign up button and verify all fields are required. . .', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('input#userNameRegister')), 10000);
        await driver.sleep(250);
        let text = await driver.findElement(By.css("input#userNameRegister")).getAttribute("validationMessage"); 
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Please fill out this field.");
        assert.equal(text, "Please fill out this field.");
        
    });

    it('Click Sign up button and verify all fields are required. . .', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('input#emailRegister')), 10000);
        await driver.sleep(250);
        let text = await driver.findElement(By.css("input#emailRegister")).getAttribute("validationMessage"); 
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Please fill out this field.");
        assert.equal(text, "Please fill out this field.");
        
    });
    it('Click Sign up button and verify all fields are required. . .', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('input#passwordRegister')), 10000);
        await driver.sleep(250);
        let text = await driver.findElement(By.css("input#passwordRegister")).getAttribute("validationMessage"); 
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Please fill out this field.");
        assert.equal(text, "Please fill out this field.");
        
    });
    it('Click Sign up button and verify all fields are required. . .', async function() {
        // Load the page
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')), 10000);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(3)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label > b')), 10000);
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div:nth-of-type(2) > label:nth-of-type(2) > b')), 10000);
        
        await driver.wait(until.elementLocated(By.css('input#passwordRegister2')), 10000);
        await driver.sleep(250);
        let text = await driver.findElement(By.css("input#passwordRegister2")).getAttribute("validationMessage"); 
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Please fill out this field.");
        assert.equal(text, "Please fill out this field.");
        
    });
    

*/


    // close the browser after running tests
    this.afterEach(() => 
        driver && driver.quit());
})