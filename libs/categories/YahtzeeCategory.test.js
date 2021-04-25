const YahtzeeCategory = require('./YahtzeeCategory');

test('None that are a yahtzee', () => {
    const cat = new YahtzeeCategory([1, 1, 1, 1, 5], '');
    expect(cat.fulfillsRequirements()).toBeFalsy();
    expect(cat.score()).toEqual(0);
});

test('Yahtzee', () => {
    const cat = new YahtzeeCategory([5, 5, 5, 5, 5], '');
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(50);
});