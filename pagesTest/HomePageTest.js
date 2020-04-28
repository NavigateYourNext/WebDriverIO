const homePage = require("../pages/HomePage");

describe("Check Home Page Methods",function()
{
    it("Verify Home Page Name",function()
    {   
          browser.url("https://www.freshworks.com/");
          let pageHeader = homePage.pageHeader.getText();
          console.log(pageHeader);
    });

    it("Verify Sub-Heading",function()
    {   
          browser.url("https://www.freshworks.com/");
          let pageHeader = homePage.subHeading.getText();
          console.log(pageHeader);
    });

    it("Click Support Link",function()
    {   
          browser.url("https://www.freshworks.com/");
          let pageHeader = homePage.supportLink.click();
          browser.pause(2000);
    });
});