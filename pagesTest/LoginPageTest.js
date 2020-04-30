const loginPageObject = require("../pages/LoginPage");
const loginData = require("../testDataFolder/loginData");

describe("Login Page Module",function(){

    it("Login Module Handling",function(){

        browser.url("http://the-internet.herokuapp.com/login");
        
        
        loginPageObject.enterUsername(loginData.username);
        assert.equal('tomsmith',loginPageObject.username.getValue());

        
        loginPageObject.enterPassword(loginData.password);
        assert.equal('SuperSecretPassword',loginPageObject.password.getValue());

        
        loginPageObject.clickLoginButton();
    });


});