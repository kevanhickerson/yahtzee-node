# Yahtzee-node

Given a set of unordered dice values, return back the possible scores for each scoring category in Yahtzee

## Install
1. Clone repository
2. Run `yarn install`
   
## Usage
### Console
1. Run `node app.js 1 2 3 4 5` to find out the scores for the dice roll 1, 2, 3, 4, 5
### Server
1. Run `node server.js`
2. Go to http://localhost:3000/
3. Add the dice as a query string array to the url. i.e., `?dice[]=1&dice[]=1&dice[]=1&dice[]=1&dice[]=1`

Example Url: http://localhost:3000/?dice[]=1&dice[]=1&dice[]=1&dice[]=1&dice[]=1

## Linting
1. Run `yarn lint`

## Tests
1. Run `yarn test`

## Scoring Categories

### Ones
**Requirement:** Any combination

**Scoring:** Sum of dice with a value of 1

### Twos
**Requirement:** Any combination

**Scoring:** Sum of dice with a value of 2

### Threes
**Requirement:** Any combination

**Scoring:** Sum of dice with a value of 3

### Fours
**Requirement:** Any combination

**Scoring:** Sum of dice with a value of 4

### Fives
**Requirement:** Any combination

**Scoring:** Sum of dice with a value of 5

### Sixes
**Requirement:** Any combination

**Scoring:** Sum of dice with a value of 6

### Three Of A Kind
**Requirement:** At least 3 of the same dice

**Scoring:** Sum of all dice

### Four Of A Kind
**Requirement:** At least 4 of the same dice

**Scoring:** Sum of all dice

### Full House
**Requirement:** Three of one number and two of another

**Scoring:** 25

### Small Straight
**Requirement:** Four sequential dice

**Scoring:** 30

### Large Straight
**Requirement:** Five sequential dice

**Scoring:** 40

### Yahtzee
**Requirement:** Five of the same dice

**Scoring:** 50

### Chance
**Requirement:** Any combination

**Scoring:** Sum of all dice