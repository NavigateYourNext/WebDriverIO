const internetPage = require('../pages/InternetPage');

describe("Handling Checkboxes", function(){

    it("Check Browser URL",function(){

        browser.url("http://the-internet.herokuapp.com/");

        expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/");


    });


    it("Should click on checkbox",function(){

        browser.url("http://the-internet.herokuapp.com/");

        internetPage.clickOnLinkElement(6);

        internetPage.titleOfPage.waitForDisplayed();

        internetPage.clickOnCheckbox(1);

        browser.pause(2000);

        //chai assertion
        expect(internetPage.getCheckboxElement(1).isSelected()).equals(true);


    });

    it("Check Checkbox Page Header",function(){

        browser.url("http://the-internet.herokuapp.com/");

        internetPage.getLinkElement(6).click();
        internetPage.titleOfPage.waitForDisplayed();
        const pageText = internetPage.titleOfPage.getText();
        expect(pageText).equals("Checkboxes");


    });


});