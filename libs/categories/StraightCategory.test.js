const StraightCategory = require('./StraightCategory');

test('None that are a Small Straight', () => {
    const cat = new StraightCategory([1, 1, 3, 4, 5], '', StraightCategory.SMALL);
    expect(cat.fulfillsRequirements()).toBeFalsy();
    expect(cat.score()).toEqual(0);
});

test('Only a Small Straight', () => {
    const cat = new StraightCategory([5, 2, 3, 4, 5], '', StraightCategory.SMALL);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(30);
});

test('Contains a Small Straight within a Large Straight', () => {
    const cat = new StraightCategory([5, 2, 3, 4, 1], '', StraightCategory.SMALL);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(30);
});

test('None that are a Large Straight', () => {
    const cat = new StraightCategory([5, 1, 3, 4, 5], '', StraightCategory.LARGE);
    expect(cat.fulfillsRequirements()).toBeFalsy();
    expect(cat.score()).toEqual(0);
});

test('Only a Large Straight', () => {
    const cat = new StraightCategory([6, 2, 3, 4, 5], '', StraightCategory.LARGE);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(40);
});