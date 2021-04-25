const Score = require('./Score');

test('Getting categories', () => {
    let score = new Score([1, 1, 1, 1, 1]);
    let categories = score.getCategories();

    expect(categories[Score.ONES].score()).toEqual(5);
    expect(categories[Score.TWOS].score()).toEqual(0);
    expect(categories[Score.THREES].score()).toEqual(0);
    expect(categories[Score.FOURS].score()).toEqual(0);
    expect(categories[Score.FIVES].score()).toEqual(0);
    expect(categories[Score.SIXES].score()).toEqual(0);
    expect(categories[Score.THREEOFAKIND].score()).toEqual(5);
    expect(categories[Score.FOUROFAKIND].score()).toEqual(5);
    expect(categories[Score.FULLHOUSE].score()).toEqual(0);
    expect(categories[Score.SMALLSTRAIGHT].score()).toEqual(0);
    expect(categories[Score.LARGESTRAIGHT].score()).toEqual(0);
    expect(categories[Score.YAHTZEE].score()).toEqual(50);
    expect(categories[Score.CHANCE].score()).toEqual(5);

    expect(categories[Score.ONES].getName()).toEqual('Ones');
    expect(categories[Score.TWOS].getName()).toEqual('Twos');
    expect(categories[Score.THREES].getName()).toEqual('Threes');
    expect(categories[Score.FOURS].getName()).toEqual('Fours');
    expect(categories[Score.FIVES].getName()).toEqual('Fives');
    expect(categories[Score.SIXES].getName()).toEqual('Sixes');
    expect(categories[Score.THREEOFAKIND].getName()).toEqual('Three of a Kind');
    expect(categories[Score.FOUROFAKIND].getName()).toEqual('Four of a Kind');
    expect(categories[Score.FULLHOUSE].getName()).toEqual('Full House');
    expect(categories[Score.SMALLSTRAIGHT].getName()).toEqual('Small Straight');
    expect(categories[Score.LARGESTRAIGHT].getName()).toEqual('Large Straight');
    expect(categories[Score.YAHTZEE].getName()).toEqual('Yahtzee');
    expect(categories[Score.CHANCE].getName()).toEqual('Chance');
})

test('Ones', () => {
    let score = new Score([1, 1, 1, 1, 1]);

    expect(score.getOnes()).toEqual(5);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(5);
    expect(score.getFourOfAKind()).toEqual(5);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(5);
});

test('Twos', () => {
    let score = new Score([2, 2, 2, 2, 2]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(10);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(10);
    expect(score.getFourOfAKind()).toEqual(10);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(10);
});

test('Threes', () => {
    let score = new Score([3, 3, 3, 3, 3]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(15);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(15);
    expect(score.getFourOfAKind()).toEqual(15);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(15);
});

test('Fours', () => {
    let score = new Score([4, 4, 4, 4, 4]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(20);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(20);
    expect(score.getFourOfAKind()).toEqual(20);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(20);
});

test('Fives', () => {
    let score = new Score([5, 5, 5, 5, 5]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(25);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(25);
    expect(score.getFourOfAKind()).toEqual(25);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(25);
});

test('Sixes', () => {
    let score = new Score([6, 6, 6, 6, 6]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(30);
    expect(score.getThreeOfAKind()).toEqual(30);
    expect(score.getFourOfAKind()).toEqual(30);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(30);
});

test('Three Of A Kind', () => {
    let score = new Score([1, 2, 1, 3, 1]);

    expect(score.getOnes()).toEqual(3);
    expect(score.getTwos()).toEqual(2);
    expect(score.getThrees()).toEqual(3);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(8);
    expect(score.getFourOfAKind()).toEqual(0);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(0);
    expect(score.getChance()).toEqual(8);
});

test('Four Of A Kind', () => {
    let score = new Score([1, 2, 1, 1, 1]);

    expect(score.getOnes()).toEqual(4);
    expect(score.getTwos()).toEqual(2);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(6);
    expect(score.getFourOfAKind()).toEqual(6);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(0);
    expect(score.getChance()).toEqual(6);
});

test('Full House', () => {
    let score = new Score([1, 2, 1, 2, 1]);

    expect(score.getOnes()).toEqual(3);
    expect(score.getTwos()).toEqual(4);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(7);
    expect(score.getFourOfAKind()).toEqual(0);
    expect(score.getFullHouse()).toEqual(25);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(0);
    expect(score.getChance()).toEqual(7);
});

test('Small Straight', () => {
    let score = new Score([2, 3, 4, 5, 5]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(2);
    expect(score.getThrees()).toEqual(3);
    expect(score.getFours()).toEqual(4);
    expect(score.getFives()).toEqual(10);
    expect(score.getSixes()).toEqual(0);
    expect(score.getThreeOfAKind()).toEqual(0);
    expect(score.getFourOfAKind()).toEqual(0);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(30);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(0);
    expect(score.getChance()).toEqual(19);
});

test('Large Straight', () => {
    let score = new Score([6, 2, 3, 4, 5]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(2);
    expect(score.getThrees()).toEqual(3);
    expect(score.getFours()).toEqual(4);
    expect(score.getFives()).toEqual(5);
    expect(score.getSixes()).toEqual(6);
    expect(score.getThreeOfAKind()).toEqual(0);
    expect(score.getFourOfAKind()).toEqual(0);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(30);
    expect(score.getLargeStraight()).toEqual(40);
    expect(score.getYahtzee()).toEqual(0);
    expect(score.getChance()).toEqual(20);
});

test('Yahtzee', () => {
    let score = new Score([6, 6, 6, 6, 6]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(0);
    expect(score.getFives()).toEqual(0);
    expect(score.getSixes()).toEqual(30);
    expect(score.getThreeOfAKind()).toEqual(30);
    expect(score.getFourOfAKind()).toEqual(30);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(50);
    expect(score.getChance()).toEqual(30);
});

test('Chance', () => {
    let score = new Score([4, 5, 5, 6, 6]);

    expect(score.getOnes()).toEqual(0);
    expect(score.getTwos()).toEqual(0);
    expect(score.getThrees()).toEqual(0);
    expect(score.getFours()).toEqual(4);
    expect(score.getFives()).toEqual(10);
    expect(score.getSixes()).toEqual(12);
    expect(score.getThreeOfAKind()).toEqual(0);
    expect(score.getFourOfAKind()).toEqual(0);
    expect(score.getFullHouse()).toEqual(0);
    expect(score.getSmallStraight()).toEqual(0);
    expect(score.getLargeStraight()).toEqual(0);
    expect(score.getYahtzee()).toEqual(0);
    expect(score.getChance()).toEqual(26);
});