const conf = require('../conf');
const Utility = require('./utility');

class Login {
    constructor(page, selector) {
        this.page = page;
        this.selector = selector;
        this.utility = {};

        for (let i in conf.utility) {
            this.utility[i] = new Utility(this.page, conf.utility[i]);
        }
    }
    isExist() {
        return !!(this.page.$(this.selector).then(element => element && element.boundingBox()))
    }
}

module.exports = Login;