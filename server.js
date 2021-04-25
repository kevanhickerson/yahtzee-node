const express = require('express');
const Score = require('./libs/Score');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let dice = req.query.dice;

    if (!dice) {
        res.status(400).json({error: 'Please specify 5 dice in the query string.'});
        return;
    }

    if (dice.length !== 5) {
        res.status(400).json({error: 'More than 5 dice numbers found, please only enter 5.'});
        return;
    }

    try {
        dice = dice.map(val => {
            const num = parseInt(val, 10);

            if (isNaN(num)) {
                throw new Error(`${val} is not a number.`);
            }

            return num;
        });
    }
    catch($e) {
        res.json({error: $e.message});
        return;
    }

    const score = new Score(dice);
    let scores = {};
    score.getCategories().forEach((cat) => {
        const name = cat.getName();
        const score = cat.score();

        scores[name] = score;
    });

    res.json(scores);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});