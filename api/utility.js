class Utility {
    constructor(page, selector) {
        this.page = page;
        this.selector = selector
    }

    async getText() {
        return await this.page.$eval(this.selector, el => el.innerText);
    }

    async clearInput() {
        let element = await this.page.$(this.selector);
        await element.click();
        await this.page.keyboard.down('ControlLeft');
        await this.page.keyboard.press('KeyA');
        await this.page.keyboard.up('ControlLeft');
        await this.page.keyboard.press('Delete')
    }

    async setText(text) {
        let element = await this.page.$(this.selector);
        await this.clearInput();
        await element.type(text);
    }

}

module.exports = Utility;