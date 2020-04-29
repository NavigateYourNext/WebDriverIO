class SpiceJetPage
{
  get loginSignUpLink()
  {
      return $('#ctl00_HyperLinkLogin');
  }

  get spiceClubMem()
  {
      return $('=SpiceClub Members') //Link Text
  }

  get memberLogin()
  {
      return $('=Member Login');
  }

  moveToElement(element)
  {
      element.waitForDisplayed();
      element.moveTo();
  }

  clickElement(element)
  {
    element.waitForDisplayed();
    element.click();
  }
}

module.exports = new SpiceJetPage();