class GenericCategory {
    constructor(dice, name = '') {
        this.dice = dice.slice();
        this.name = name;
    }

    fulfillsRequirements() {
        return false;
    }

    getName() {
        return this.name;
    }

    score() {
        return 0;
    }

    sort() {
        this.dice.sort((a, b) => {
            return a - b;
        });
    }
}

module.exports = GenericCategory