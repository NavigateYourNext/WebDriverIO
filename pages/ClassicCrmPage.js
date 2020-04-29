class ClassicCrmPage
{
    get forgotLink()
    {
        return $('=Forgot Password?');
    }

    moveToElement(element)
    {
        element.waitForDisplayed();
        element.moveTo();
    }
}

module.exports = new ClassicCrmPage();