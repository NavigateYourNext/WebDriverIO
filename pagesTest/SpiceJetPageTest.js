const spiceJetObject = require('../pages/SpiceJetPage');

describe("Page actions on SpiceJet Page",function(){
    it("Move to element function", function(){

        browser.url("https://www.spicejet.com/");

        browser.maximizeWindow();
        browser.pause(2000);
        spiceJetObject.moveToElement(spiceJetObject.loginSignUpLink);
        spiceJetObject.moveToElement(spiceJetObject.spiceClubMem);
        spiceJetObject.clickElement(spiceJetObject.memberLogin);

        browser.pause(2000);

    });

});