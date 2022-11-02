describe("Test suite", () => {
    //I Can Win
    it("First test", async () => {
        await browser.url("https://pastebin.com");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    });

    it ("Second test", async () => {        
        const textArea = await $("div>textarea");
        await textArea.click();
        await textArea.setValue("Hello from WebDriver"); 
        
        const expirationTime = await $("#select2-postform-expiration-container");
        await expirationTime.click();    
        const expirationTimeDropDown = await $(`//ul[@class="select2-results__options"]/li[3]`);
        await expirationTimeDropDown.click();
                      
        const pasteTitle = await $("#postform-name");
        await pasteTitle.click();
        await pasteTitle.setValue("helloweb"); 

        const createNewPasteButton = await $("//button[text()='Create New Paste']");
        await createNewPasteButton.click();
        
        await browser.pause(5000);
    });

})

