const ChanceCategory = require('./categories/ChanceCategory');
const FullHouseCategory = require('./categories/FullHouseCategory');
const KindCategory = require('./categories/KindCategory');
const NumberCategory = require('./categories/NumberCategory');
const StraightCategory = require('./categories/StraightCategory');
const YahtzeeCategory = require('./categories/YahtzeeCategory');

class Score {
    static ONES = 0;
    static TWOS = 1;
    static THREES = 2;
    static FOURS = 3;
    static FIVES = 4;
    static SIXES = 5;
    static THREEOFAKIND = 6;
    static FOUROFAKIND = 7;
    static FULLHOUSE = 8;
    static SMALLSTRAIGHT = 9;
    static LARGESTRAIGHT = 10;
    static YAHTZEE = 11;
    static CHANCE = 12;

    constructor(dice) {
        this.categories = [];
        this.categories[Score.ONES] = new NumberCategory(dice, 'Ones', 1);
        this.categories[Score.TWOS] = new NumberCategory(dice, 'Twos', 2);
        this.categories[Score.THREES] = new NumberCategory(dice, 'Threes', 3);
        this.categories[Score.FOURS] = new NumberCategory(dice, 'Fours', 4);
        this.categories[Score.FIVES] = new NumberCategory(dice, 'Fives', 5);
        this.categories[Score.SIXES] = new NumberCategory(dice, 'Sixes', 6);
        this.categories[Score.THREEOFAKIND] = new KindCategory(dice, 'Three of a Kind', 3);
        this.categories[Score.FOUROFAKIND] = new KindCategory(dice, 'Four of a Kind', 4);
        this.categories[Score.FULLHOUSE] = new FullHouseCategory(dice, 'Full House');
        this.categories[Score.SMALLSTRAIGHT] = new StraightCategory(dice, 'Small Straight', StraightCategory.SMALL);
        this.categories[Score.LARGESTRAIGHT] = new StraightCategory(dice, 'Large Straight', StraightCategory.LARGE);
        this.categories[Score.YAHTZEE] = new YahtzeeCategory(dice, 'Yahtzee');
        this.categories[Score.CHANCE] = new ChanceCategory(dice, 'Chance');
    }

    getCategories() {
        return this.categories;
    }

    getOnes() {
        return this.categories[Score.ONES].score();
    }

    getTwos() {
        return this.categories[Score.TWOS].score();
    }

    getThrees() {
        return this.categories[Score.THREES].score();
    }

    getFours() {
        return this.categories[Score.FOURS].score();
    }

    getFives() {
        return this.categories[Score.FIVES].score();
    }

    getSixes() {
        return this.categories[Score.SIXES].score();
    }

    getThreeOfAKind() {
        return this.categories[Score.THREEOFAKIND].score();
    }

    getFourOfAKind() {
        return this.categories[Score.FOUROFAKIND].score();
    }

    getFullHouse() {
        return this.categories[Score.FULLHOUSE].score();
    }

    getSmallStraight() {
        return this.categories[Score.SMALLSTRAIGHT].score();
    }

    getLargeStraight() {
        return this.categories[Score.LARGESTRAIGHT].score();
    }

    getYahtzee() {
        return this.categories[Score.YAHTZEE].score();
    }

    getChance() {
        return this.categories[Score.CHANCE].score();
    }
}

module.exports = Score