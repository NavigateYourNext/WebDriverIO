class InternetPage2
{
    getAlertButton(index)
    {
        return $(`ul li:nth-child(${index}) button`);
    }

    clickOnAlertButton(index)
    {
        this.getAlertButton(index).waitForDisplayed();

        this.getAlertButton(index).click();
    }

    get result()
    {
        return $('#result');
    }

    get resultText()
    {
        return this.result.getText();
    }
}

module.exports = new InternetPage2();