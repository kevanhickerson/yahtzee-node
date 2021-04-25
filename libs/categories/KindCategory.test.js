const KindCategory = require('./KindCategory');

test('None that are 3 of a kind', () => {
    const cat = new KindCategory([1, 2, 3, 4, 5], '', 3);
    expect(cat.fulfillsRequirements()).toBeFalsy();
    expect(cat.score()).toEqual(0);
});

test('3 that are 3 of a kind', () => {
    const cat = new KindCategory([5, 4, 5, 2, 5], '', 3);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(21);
});

test('All that are 3 of a kind', () => {
    const cat = new KindCategory([5, 5, 5, 5, 5], '', 3);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(25);
});

test('None that are 4 of a kind', () => {
    const cat = new KindCategory([1, 2, 3, 4, 5], '', 4);
    expect(cat.fulfillsRequirements()).toBeFalsy();
    expect(cat.score()).toEqual(0);
});

test('4 that are 4 of a kind', () => {
    const cat = new KindCategory([5, 4, 5, 5, 5], '', 4);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(24);
});

test('All that are 4 of a kind', () => {
    const cat = new KindCategory([5, 5, 5, 5, 5], '', 4);
    expect(cat.fulfillsRequirements()).toBeTruthy();
    expect(cat.score()).toEqual(25);
});