//import Page from './page';
//class Page {import} '../pages/page'
const Page = require('../pages/page');

class Pastebin extends Page {

    constructor() {
        super(' pastebin')
    }
    get textArea() { return $("div>textarea") }
    get syntaxHighlighting() { return $("#select2-postform-format-container") }
    get pasteExpiration() { return $("#select2-postform-expiration-container") }
    get pasteTitle() { return $("#postform-name") }
    get createNewPasteButton() { return $("//button[text()='Create New Paste']") }

    /* async syntaxHighlightingOption(n) {
        return $(`//ul[@class="select2-results__options select2-results__options--nested"]/li[${n}]`);
    }

    async pasteExpirationOption(n) {
        return $(`//ul[@class="select2-results__options"]/li[${n}]`);
    } */

    open() {
        super.open("http://pastebin.com");
    }
    
    submit() {
        this.createNewPasteButton.click();
    }
}

module.exports = Pastebin;