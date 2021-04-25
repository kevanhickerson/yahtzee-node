const GenericCategory = require('./GenericCategory');

class ChanceCategory extends GenericCategory {
    fulfillsRequirements() {
        return true;
    }

    score() {
        return this.dice.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }
}

module.exports = ChanceCategory