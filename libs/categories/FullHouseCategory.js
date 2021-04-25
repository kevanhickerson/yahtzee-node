const GenericCategory = require('./GenericCategory');

class FullHouseCategory extends GenericCategory {
    fulfillsRequirements() {
        let counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

        for (const val of this.dice) {
            counts[val]++;
        }

        let two = false;
        let three = false;
        for (const val of Object.values(counts)) {
            if (val === 2) {
                two = true;
            }
            if (val === 3) {
                three = true;
            }
        }

        return two && three;
    }

    score() {
        if (!this.fulfillsRequirements()) {
            return 0;
        }

        return 25;
    }
}

module.exports = FullHouseCategory