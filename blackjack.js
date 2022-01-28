let player = {
    name: "Charles Echo",
    chips: 133
}
let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message;

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent += `${player.name}: $${player.chips}`


function getRandomCard(){
    let randomNumber;
    randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber === 1){
        return 11;
    } else if (randomNumber === 11 || randomNumber === 12 || 
            randomNumber === 13) {
        return 10
    } else {return randomNumber}

}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();    
}

function renderGame(){
    sumEl.textContent = "sum: " + sum;
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += ` ${cards[i]} ` ;
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        
    } else if (sum === 21){
        message = "Wohoo! You've got a Blackjack";
        
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";

        isAlive = false;
    }
    console.log("hasBlackJack: " + hasBlackJack)
    console.log("isAlive: " + isAlive)
    console.log(message)
    messageEl.textContent = message;
}

function newCard(){    

    if (isAlive === true && hasBlackJack === false){        
        let thirdCard = getRandomCard();
        cards.push(thirdCard);
        sum += thirdCard;  
        renderGame();  
    }
}



