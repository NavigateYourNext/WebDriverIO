describe("Get text of an element",function()
{
   it("Enter value in a field",function(){

    browser.url('/');
     const textOfAnElement = $('a.nav_a.nav-swm-text'); //fetch text of a particular element
     let text = textOfAnElement.getText();
     console.log(text);
 });
});
