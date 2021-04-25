const GenericCategory = require('./GenericCategory');

class NumberCategory extends GenericCategory {
    constructor(dice, name, targetNumber) {
        super(dice, name);
        this.targetNumber = targetNumber;
    }

    fulfillsRequirements() {
        return true;
    }

    score() {
        return this.dice.reduce((accumulator, currentValue) => {
            if (currentValue === this.targetNumber) {
                return accumulator + currentValue;
            }
            return accumulator;
        }, 0);
    }
}

module.exports = NumberCategory