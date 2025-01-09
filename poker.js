let cards = [{
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
}]

function getRandomCard() {
    const randomSuitIndex = Math.floor(Math.random() * cards.length)
    const randomSuit = cards[randomSuitIndex]

    const randomTypeIndex = Math.floor(Math.random() * randomSuit.types.length)
    const randomType = randomSuit.types[randomTypeIndex];
    
    return {Suit: randomSuit.suit, Type: randomType};
}

function handOfTwo() {
    hand = []
    for (let i = 0; i < 2; i++) {
    hand.push(getRandomCard());
    }
    return hand
}
console.log(handOfTwo())

const Readline = require("readline")
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function betOrCheck() {
rl.question("bet or check"), (ansr) => {
    let betAmount = parseInt(betAmount, 10)
if (ansr.toLowerCase() === "bet") {
    let chips = 10
    console.log(chips)
        rl.question1("how much? x/10"), (betAmount) => {
            if (ansr === 1) {
                let pot = []
                pot.push(ansr)
                chips--
                console.log("You bet 1 chip to the pot")
                console.log("pot: " + pot)
                console.log('You have ' + chips + ' chips')
            }
            else if ( ansr === 2) {
                let pot = []
                pot.push(ansr)
                chips =- 2
                console.log("You bet 2 chips to the pot")
                console.log("pot: " + pot)
                console.log('You have ' + chips + ' chips')
                }
            }
        }
    }
}
betOrCheck()