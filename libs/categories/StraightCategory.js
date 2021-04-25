const GenericCategory = require('./GenericCategory');

class KindCategory extends GenericCategory {
    static SMALL = 4;
    static LARGE = 5;

    constructor(dice, name, run) {
        super(dice, name);
        this.sort();
        this.run = run;
    }

    fulfillsRequirements() {
        let run = 1;
        let previousNumber = this.dice[0];

        for (let idx = 1; idx < this.dice.length; idx++) {
            if (this.run <= run) {
                return true;
            }

            if (this.dice[idx] - previousNumber == 1) {
                run++;
            }
            else {
                run = 1;
            }
            previousNumber = this.dice[idx];
        }

        return this.run <= run;
    }

    score() {
        if (!this.fulfillsRequirements()) {
            return 0;
        }

        return (this.run - 1) * 10;
    }
}

module.exports = KindCategory