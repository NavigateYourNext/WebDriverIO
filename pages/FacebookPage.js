class FacebookPage
{
    get dropDownElement()
    {
        return $$('#day>option');
    }

    get listOfAllDropdownValues()
    {
        return this.dropDownElement.filter(element =>{
            console.log(element.getText());
        })
    }
}

module.exports = new FacebookPage();