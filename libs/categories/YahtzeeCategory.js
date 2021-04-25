const KindCategory = require('./KindCategory');

class YahtzeeCategory extends KindCategory {
    constructor(dice, name) {
        super(dice, name, 5);
    }

    score() {
        if (!this.fulfillsRequirements()) {
            return 0;
        }

        return 50;
    }
}

module.exports = YahtzeeCategory