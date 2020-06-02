const conf = require('../conf');
const Utility = require('./utility');

class Login {
    constructor(page, selector) {
        this.page = page;
        this.selector =selector;
        this.utility = {};

        for (let i in conf.utility) {
            this.utility[i] = new Utility(this.page, conf.utility[i]);
        }
    }
    
    async clickTo(){
        //let element = await this.page.$$(this.selector,(x,index)=>x[index]);
        let element = await this.page.$(this.selector);
        await element.click();
    }
    async clickXY(){
         let x=await this.page.evaluate(window.scrollX + document.querySelector('#mG61Hd > div > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div.freebirdFormviewerViewItemsDateInputsContainer > div > div.quantumWizTextinputPaperinputEl.freebirdThemedInput.freebirdFormviewerViewItemsDateDateInput.modeLight > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input').getBoundingClientRect().left);
         let y=await this.page.evaluate(window.scrollY + document.querySelector('#mG61Hd > div > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div.freebirdFormviewerViewItemsDateInputsContainer > div > div.quantumWizTextinputPaperinputEl.freebirdThemedInput.freebirdFormviewerViewItemsDateDateInput.modeLight > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input').getBoundingClientRect().top)
         return {x,y}
    }
    
}

module.exports = Login;