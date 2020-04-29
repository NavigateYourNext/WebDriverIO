class InternetPage
{
    get titleOfPage()
    {
        return $('h3');
    }

    getLinkElement(index)
    {
        return $(`ul>li:nth-child(${index}) > a`);
    }

    clickOnLinkElement(index)
    {
        this.getLinkElement(index).waitForDisplayed();

        this.getLinkElement(index).click();
    }

    getCheckboxElement(index)
    {
       return $(`form#checkboxes>input:nth-child(${index})`);
    }

    get search()
    {
        return $('#target');
    }

    get resultLabel()
    {
        return $('#result');
    }

    getResultLabelText()
    {   
        this.resultLabel.waitForDisplayed();
        return this.resultLabel.getText();
    }

    enterSearch(value)
    {
        this.search.waitForDisplayed();
        this.search.setValue(value);
    }

    clickOnCheckbox(index)
    {
        this.getCheckboxElement(index).waitForDisplayed();

        this.getCheckboxElement(index).click();
    }
}

module.exports = new InternetPage();