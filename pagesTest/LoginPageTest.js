const loginPageObject = require("../pages/LoginPage");

describe("Login Page Module",function(){

    it("Login Module Handling",function(){

        browser.url("http://the-internet.herokuapp.com/login");
        
        
        loginPageObject.enterUsername("tomsmith");
        assert.equal('tomsmith',loginPageObject.username.getValue());

        
        loginPageObject.enterPassword("SuperSecretPassword");
        assert.equal('SuperSecretPassword',loginPageObject.password.getValue());

        
        loginPageObject.clickLoginButton();
    });


});