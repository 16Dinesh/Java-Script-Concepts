let firstCard = 5
let secondCard = 11
let cards = [firstCard , secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let msg = ""
let game = document.getElementById("startGame-btn")
// console.log(game)
let messageEl = document.getElementById("message-el");
// console.log(messageEl)
// let sumEL = document.getElementById("sum-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
// let cardsEl = document.querySelector("#cards-el");
// console.log(cardsEl)

function startgame() {
    rendergame()
}

function rendergame() {
    // cardsEl.textContent = `Cards: ${firstCard} , ${secondCard}`
    sumEL.textContent = `Sum: ${sum}`
    // cardsEl.textContent = `Cards: ${cards[0]} , ${cards[1]}`
    for (let i=0 ; i < cards.lenght ; i++) {
        cardsEl.textContent = `Cards: ${cards[i]} , ${cards[i]}`                ///this line 
    }


    if (sum <= 20) {
        msg = "Do you want to draw a new card? "
    } else if (sum === 21) {
        msg = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        msg = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = msg
    console.log(`hasBlackJack is ${hasBlackJack}`);
    console.log(`isAlive is ${isAlive}`);
}

function newGame() {
    console.log("Drawing a new card from the deck!")
    let card = 5
    sum += card
    cards.push(card)
    // console.log(cards)
    rendergame()
}

