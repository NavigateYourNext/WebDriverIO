const iptest = require("../pages/InternetPage2");

describe("Handle Alert Pop",function(){
    it("Accept Alert",function()
    {

        browser.url("http://the-internet.herokuapp.com/javascript_alerts");

        iptest.clickOnAlertButton(1);

        let alertText = browser.getAlertText();

        assert.equal(alertText,"I am a JS Alert");
        
        browser.acceptAlert();

        console.log(iptest.resultText);

    });

        it("Dismiss Alert",function()
        {
    
            browser.url("http://the-internet.herokuapp.com/javascript_alerts");

            browser.pause(2000);
    
            iptest.clickOnAlertButton(2);
    
            let alertText_1 = browser.getAlertText();
    
            assert.equal(alertText_1,"I am a JS Confirm");
            
            browser.dismissAlert();
    
            console.log(iptest.resultText);
    
        });

        it("Set Value In Alert",function()
        {
    
            browser.url("http://the-internet.herokuapp.com/javascript_alerts");

            browser.pause(2000);
    
            iptest.clickOnAlertButton(3);
    
            browser.sendAlertText("Hello");
            
            browser.pause(2000);
            browser.acceptAlert();
    
            assert.equal(iptest.resultText,'You entered: Hello');
    
        });
});