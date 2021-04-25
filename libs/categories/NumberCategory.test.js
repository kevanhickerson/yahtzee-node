const NumberCategory = require('./NumberCategory');

const dice = [0, 0, 0, 0, 0];

test.each([[1], [2], [3], [4], [5]])('Fulfills the requirements for %is', (targetNumber) => {
    const cat = new NumberCategory(dice, '', targetNumber);
    expect(cat.fulfillsRequirements()).toBeTruthy();
});

for(let num = 1; num <= 5; num++) {
    test.each([[0], [1], [2], [3], [4], [5]])(`Has %i ${num}s`, (spot) => {
        const cat = new NumberCategory(dice.fill(num, 0, spot), '', num);
        expect(cat.score()).toEqual(spot * num);
    });
}