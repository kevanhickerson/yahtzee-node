const Score = require('./libs/Score');

let dice = process.argv.slice(2);

if (dice.length !== 5) {
    throw new Error('More than 5 dice numbers found, please only enter 5.');
}

dice = dice.map(val => {
    const num = parseInt(val, 10);

    if (isNaN(num)) {
        throw new Error(`${val} is not a number.`);
    }

    return num;
})

const score = new Score(dice);
score.getCategories().forEach((cat) => {
    const name = cat.getName();
    const score = cat.score();

    console.log(`${name}: ${score}`);
});