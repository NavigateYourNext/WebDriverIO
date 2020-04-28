class BlazePage
{
    get parentList()
    {
        return $('ul.list-nav-links');
    }

    get childElements()
    {
        return this.parentList.$$('li');
    }

    //Getter Method
    get textOfChildElements()
    {
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    }

    //Setter Method
    specificChildElement(index)
    {
        return this.parentList.$(`li:nth-child(${index})`).getText();
    }
}

//Export the class so we can use it anywhere

module.exports = new BlazePage();