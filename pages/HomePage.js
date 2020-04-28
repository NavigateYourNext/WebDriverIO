class HomePage
{
    get pageHeader()
    {
        return $('//h1');
    }

    get subHeading()
    {
        return $('div.banner-text-content > p.sub-text');
    }

    get supportLink()
    {
        return $("//li/span[text()='Support']");
    }
}

//Export the class so we can use it anywhere

module.exports = new HomePage();