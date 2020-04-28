describe("Interaction with web elements",function()
{
   it("Enter value in a field",function(){

    browser.url('/');
    const search = $('#twotabsearchtextbox'); //fetch the element by using $
    search.setValue('Apple Mac Book'); //to set value in element

   });

});