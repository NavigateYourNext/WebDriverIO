class LoginPage
{
    get username()
    {
        return $('#username');
    }

    get password()
    {
        return $('#password');
    }

    get loginButton()
    {
        return $('button');
    }

    enterUsername(text)
    {
        this.username.waitForDisplayed();

        this.username.setValue(text);
    }

    enterPassword(text)
    {
        this.password.waitForDisplayed();

        this.password.setValue(text);
    }

    clickLoginButton()
    {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }
}

module.exports = new LoginPage();