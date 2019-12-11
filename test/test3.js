require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');


describe('Automatic Scheduler Manager Home Page', function () {
    let driver;
    
    this.beforeEach(async function() {
         
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5000');
        await driver.sleep(250);
        await driver.findElement(By.css('html > body > div:nth-of-type(4) > div > div > a:nth-of-type(2)')).click();
        await driver.sleep(250);
        await driver.wait(until.elementLocated(By.css('input#adminPass')), 10000);
        await driver.findElement(By.css('input#adminPass')).sendKeys('1234',Key.RETURN);
        await driver.wait(until.alertIsPresent());
        await driver.switchTo().alert().accept();
        await driver.sleep(250);
    });
    
    /////////////////////////////////////EMPLOYEE HOME PAGE/////////////////////////////////////

    it('Check the Schedule button is present. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a')), 10000);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Schedule");
            titleText = text;

         });
        assert.equal(titleText, 'Schedule');
    });

    it('Check View Create Event button is present. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)')), 10000);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Create Event");
            titleText = text;

         });
        assert.equal(titleText, 'Create Event');


    });

    it('Check Time off requests button is present. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)')), 10000);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Time off requests");
            titleText = text;

         });
        assert.equal(titleText, 'Time off requests');


    });


    it('Check Logout button is present. . .', async function() {
        // Load the page
        
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > div > a')), 10000);
        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > div > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Logout");
            titleText = text;

         });
        assert.equal(titleText, 'Logout');


    });

    
    it('Check the Schedule button loads correct form. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(2) > a')).click();
        
        await driver.wait(until.elementLocated(By.css('div#id01 > form > table > thead > tr > th')), 10000);
        


        let title = await driver.findElement(By.css('div#id01 > form > table > thead > tr > th'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Employee");
            titleText = text;

         });
        assert.equal(titleText, 'Employee');
    });

    it('Check the cancel button on the Schedule page is functional . . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(2) > a')).click();
        await driver.sleep(250);

        await driver.wait(until.elementLocated(By.css('div#id01 > span')), 10000);
        driver.findElement(By.css('div#id01 > span')).click();

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a')), 10000);
        


        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Schedule");
            titleText = text;

         });
        assert.equal(titleText, 'Schedule');
    });
    

    

    it('Check the Create event button loads correct form. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)')).click();

        
        
        await driver.wait(until.elementLocated(By.css('div#id02 > form > div')), 10000);
        let title = await driver.findElement(By.css('div#id02 > form > div'));
        let titleText;
        await title.getText().then(function (text) {
            
            console.log("Boolean Found: ", text.includes("Name of Event:"));
            console.log("Boolean Desired: ",true);
            titleText = text;

         });
        assert.equal(titleText.includes("Name of Event:"), true);
    });

    it('Check the cancel button on the View schedule page is functional . . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)')).click();
        await driver.sleep(250);

        await driver.wait(until.elementLocated(By.css('div#id02 > span')), 10000);
        driver.findElement(By.css('div#id02 > span')).click();

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)')), 10000);
        


        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(2)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Create Event");
            titleText = text;

         });
        assert.equal(titleText, 'Create Event');
    });
    
 
    
    it('Check the Time off requests button loads correct form. . .', async function() {
        // Load the page
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)')).click();
        
        await driver.wait(until.elementLocated(By.css('div#id03 > form > div > button:nth-of-type(2)')), 10000);
        let title = await driver.findElement(By.css('div#id03 > form > div > button:nth-of-type(2)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log(text);
            console.log("Label Found: ", text);
            console.log("Label Desired: ","Submit");
            titleText = text;

         });
        assert.equal(titleText, 'Submit');

       
    });

    it('Check the cancel button on the Request Time off form is functional . . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)')).click();
        await driver.sleep(250);

        await driver.wait(until.elementLocated(By.css('div#id03 > span')), 10000);
        driver.findElement(By.css('div#id03 > span')).click();

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)')), 10000);
        


        let title = await driver.findElement(By.css('html > body > div:nth-of-type(2) > a:nth-of-type(3)'));
        let titleText;
        await title.getText().then(function (text) {
            console.log("Label Found: ",text);
            console.log("Label Desired: ","Time off requests");
            titleText = text;

         });
        assert.equal(titleText, 'Time off requests');
    });


    it('Verify Logout button works. . .', async function() {
        // Load the page
        
        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(2) > div > a')), 10000);
        driver.findElement(By.css("html > body > div:nth-of-type(2) > div > a")).click();
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
    
    /*
    it('Verify set availability submission works. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(6) > a')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(6) > a')).click();

        await driver.sleep(250);

        driver.findElement(By.css('input#mondayStart')).sendKeys("01021");
        driver.findElement(By.css('input#mondayStop')).sendKeys("03021");

        driver.findElement(By.css('input#tuesdayStart')).sendKeys("01021");
        driver.findElement(By.css('input#tuesdayStop')).sendKeys("03021");

        driver.findElement(By.css('input#wednesdayStart')).sendKeys("01021");
        driver.findElement(By.css('input#wednesdayStop')).sendKeys("03021");

        driver.findElement(By.css('input#thursdayStart')).sendKeys("01021");
        driver.findElement(By.css('input#thursdayStop')).sendKeys("03021");

        driver.findElement(By.css('input#fridayStart')).sendKeys("01021");
        driver.findElement(By.css('input#fridayStop')).sendKeys("03021");

        driver.findElement(By.css('input#saturdayStart')).sendKeys("01021");
        driver.findElement(By.css('input#saturdayStop')).sendKeys("03021");

        driver.findElement(By.css('input#sundayStart')).sendKeys("01021");
        driver.findElement(By.css('input#sundayStop')).sendKeys("03021");

        driver.findElement(By.css('select#numHours>option:nth-child(3)')).click();
        
        driver.findElement(By.css('form#setAvailibilityForm > div:nth-of-type(2) > button:nth-of-type(2)')).click();
        await driver.sleep(500);
        await driver.wait(until.alertIsPresent());
        
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Availability Submitted Successfully");
        assert.equal(text, 'Availability Submitted Successfully');
    });

    
    it('Verify set availability submission works. . .', async function() {
        // Load the page
        

        await driver.wait(until.elementLocated(By.css('html > body > div:nth-of-type(6) > a:nth-of-type(3)')), 10000);
        driver.findElement(By.css('html > body > div:nth-of-type(6) > a:nth-of-type(3)')).click();

        await driver.sleep(250);

        driver.findElement(By.css('input#from_date')).sendKeys("01022023");
        driver.findElement(By.css('input#to_date')).sendKeys("01052023");

        driver.findElement(By.css('input#start')).sendKeys("01021");
        driver.findElement(By.css('input#end')).sendKeys("03021");
        
        driver.findElement(By.css('div#id02 > form > div:nth-of-type(5) > button:nth-of-type(2)')).click();
        await driver.sleep(500);
        await driver.wait(until.alertIsPresent());
        
        let text = await driver.switchTo().alert().getText();
        console.log("Alert Found: ",text);
        console.log("Alert Desired: ","Request Submitted Successfully");
        assert.equal(text, 'Request Submitted Successfully');
    });

    */

    // close the browser after running tests
    this.afterEach(() => 
        driver && driver.quit());
})