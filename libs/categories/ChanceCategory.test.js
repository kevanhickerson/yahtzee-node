const ChanceCategory = require('./ChanceCategory');

test('Fulfills the requirements', () => {
    const cat = new ChanceCategory([1, 2, 3, 4, 5]);
    expect(cat.fulfillsRequirements()).toBeTruthy();
});

test(`Adds score properly`, () => {
    const cat = new ChanceCategory([1, 2, 3, 4, 5]);
    expect(cat.score()).toEqual(15);
});