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

    clickOnCheckbox(index)
    {
        this.getCheckboxElement(index).waitForDisplayed();

        this.getCheckboxElement(index).click();
    }
}

module.exports = new InternetPage();