// <21 : still in the game! , exactly 21: You win and >21 : you lose
let player = {
  name: "Tsunada",
  chips: 500
}
let cards = []
let sum = getRandomCard()
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// another way of writing the element selector is below
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":  ¥" + player.chips

function getRandomCard(){
  let randomNumer = Math.floor( Math.random()*13 ) + 1 // 1-12
  if (randomNumer > 10) {
    return 10
  } else if (randomNumer === 1){
    return 11
  } else {
    return randomNumer
  }   
}

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
  
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
      cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
    message = "Do you want to draw a new card?💪"
    } else if(sum === 21) {
    message = "Wohoo! You've got a Blackjack!💯"
     hasBlackJack = true
    } else {
     message = "You're out of the game!😩"
     isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
  if (hasBlackJack === false && isAlive === true){
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()  
  }  
}


