const FullHouseCategory = require('./FullHouseCategory');

test('Not a Full House', () => {
    const cat = new FullHouseCategory([1, 2, 3, 4, 5]);
    expect(cat.fulfillsRequirements()).toBeFalsy();
    expect(cat.score()).toEqual(0);
});

test('Full House', () => {
    const cat = new FullHouseCategory([1, 2, 1, 1, 2]);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(25);
});