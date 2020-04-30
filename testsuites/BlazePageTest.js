const blazePageTest = require("../pages/BlazePage");

describe("Get list of all li elements",function(){
    it("Get the list of all li elements",function(){

        browser.url("https://www.blazemeter.com/");
        
        blazePageTest.textOfChildElements;


    });

    it("Get specific element",function(){

        browser.url("https://www.blazemeter.com/");
        
        blazePageTest.specificChildElement(3);


    });

    it("Main Heading Displayed or Not",function(){

        browser.url("https://www.blazemeter.com/");
        
        console.log("Element displayed status is: "+blazePageTest.mainHeader.isDisplayed());


    });

    it("Main Heading Enabled or Not",function(){

        browser.url("https://www.blazemeter.com/");
        
        console.log("Element enabled status is: "+blazePageTest.mainHeader.isEnabled());


    });

    it("Main Heading Exist or Not",function(){

        browser.url("https://www.blazemeter.com/");
        
        console.log("Element existence status is: "+blazePageTest.mainHeader.isExisting());


    });

    it("Main Heading Displayed in viewport or Not",function(){

        browser.url("https://www.blazemeter.com/");
        
        console.log("Element view port status is: "+blazePageTest.mainHeader.isDisplayedInViewport());


    });

    it("Element Displayed in viewport or Not",function(){

        browser.url("https://www.blazemeter.com/");
        
        console.log("Element view port status is: "+blazePageTest.notPresentInViewportWindow.isDisplayedInViewport());


    });
});