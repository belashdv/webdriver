//import Pastebin from '../pages/pastebin.page';
//const Pastebin = require('../pages/pastebin.page')

const Pastebin = require('../pages/pastebin.page');

console.log(Pastebin);

describe('Bring it on', () => {

    it('open site and create the paste', async () => {
        await Pastebin.open();
        //await browser.url("http://pastebin.com");
        await browser.pause(5000);
        await Pastebin.textArea.click();
        await Pastebin.textArea.setValue('test proverka');
        await browser.pause(5000);
        
    });

}) 