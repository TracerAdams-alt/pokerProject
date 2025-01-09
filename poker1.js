let cards = [
    {
        suit: 'spades',
        types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
    },
    {
        suit: 'clubs',
        types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
    },
    {
        suit: 'diamonds',
        types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
    },
    {
        suit: 'hearts',
        types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
    }
];

function getRandomCard() {
    const randomSuitIndex = Math.floor(Math.random() * cards.length);
    const randomSuit = cards[randomSuitIndex];

    const randomTypeIndex = Math.floor(Math.random() * randomSuit.types.length);
    const randomType = randomSuit.types[randomTypeIndex];
    
    return { Suit: randomSuit.suit, Type: randomType };
}

function handOfTwo() {
    let hand = [];
    for (let i = 0; i < 2; i++) {
        hand.push(getRandomCard());
    }
    return hand;
}
console.log(handOfTwo());

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Bet or check? ", (ansr) => {
    if (ansr.toLowerCase() === "bet") {
        let chips = 10;
        console.log("You have 10 chips.");
        rl.question("How much? (1/10): ", (betAmount) => {
            betAmount = parseInt(betAmount);
            if (betAmount === 1 || betAmount === 2 || betAmount === 3 || betAmount === 4 || betAmount === 5
                || betAmount === 6 || betAmount === 7 || betAmount == 8 || betAmount === 9 || betAmount === 10
            ){
                let pot = [];
                pot.push(betAmount);
                chips -= betAmount;
                console.log(`You bet ${betAmount} chip(s) to the pot.`);
                console.log("Pot: " + pot);
                console.log("You have " + chips + " chips left.");
            } else {
                console.log("Invalid bet amount. Please bet between 1/10");
            }
            rl.close();
        });
    } else {
        console.log("You chose to check.");
        rl.close();
    }
})
            //DEALER FUNCTION
function dealer() {
    let dealerBetOptions = ['bet', 'check']
    let dealerBet = Math.floor(Math.random() * 1);
    let dealerAnsr = dealerBet[dealerBetOptions];
    console.log(dealerAnsr)
}
