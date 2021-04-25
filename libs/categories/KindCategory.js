const GenericCategory = require('./GenericCategory');

class KindCategory extends GenericCategory {
    constructor(dice, name, match) {
        super(dice, name);
        this.match = match;
    }

    fulfillsRequirements() {
        let counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

        for (const val of this.dice) {
            counts[val]++;
        }

        for (const val of Object.values(counts)) {
            if (val >= this.match) {
                return true;
            }
        }

        return false;
    }

    score() {
        if (!this.fulfillsRequirements()) {
            return 0;
        }

        return this.dice.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }
}

module.exports = KindCategory