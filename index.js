
let player = {
    Name: "Per",
    Chips: 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.querySelector(".card-el")

playerEl = document.getElementById('player-el')
playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomCard () {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10 ) {
    return 10
  }
  else if (randomNumber === 1 ) {
    return 11
  }
  else {
    return randomNumber
  }
}


function startGame () {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard ()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  
  renderGame()

}
function renderGame () {
  cardEl.textContent = " Cards: "  
  for (let i=0; i < cards.length; i++ ){
    cardEl.textContent += cards[i] + " " 


  }


  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message ="Do you want to draw a new card?"
    
  }
  else if (sum === 21){
    message="Wohoo! You've got a Blackjack"
    hasBlackjack= true
    
    
  }
  else {
    message = "You're out of the game"
    isAlive = false
  }
   messageEL.textContent = message
   sumEl.textContent = 'Sum:' + sum
  //  cardEl.textContent = "Card:" + firstCard + " " + secondCard
}

function newCard () {
  if (isAlive=== true && hasBlackjack === false) {
    let card = getRandomCard ()
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
    
  }
  
}


