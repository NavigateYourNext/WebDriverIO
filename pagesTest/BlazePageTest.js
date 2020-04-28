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
});