const crmpage = require("../pages/ClassicCrmPage");

describe("Scroll Into View Elements",function(){
    it("Should Scroll Till Particular Element",function(){
        browser.url("https://classic.crmpro.com/");

        console.log("In View Port: "+crmpage.forgotLink.isDisplayedInViewport());

        crmpage.forgotLink.scrollIntoView();

        console.log("In View Port: "+crmpage.forgotLink.isDisplayedInViewport());

    });
});