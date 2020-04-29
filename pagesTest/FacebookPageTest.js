const fb = require('../pages/FacebookPage');

describe("Get List Of All DropDown Elements",function(){
    it("Get List",function()
    {
        browser.url("https://www.facebook.com");

        fb.listOfAllDropdownValues;
    });
});