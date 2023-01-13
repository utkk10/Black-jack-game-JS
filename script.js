var firstuser = Math.floor(Math.random() * 10) + 2;
var seconduser = Math.floor(Math.random() * 10) + 2;
var user_score = 0;
var user_cards = [firstuser, seconduser]
var user_cardsS = '';

user_cards.forEach(card => {
  user_cardsS = user_cardsS.concat(" ", card)
  user_score += card;
})

document.getElementById("Score").innerText = user_score;
document.getElementById('current cards').innerText = user_cardsS

var firstcomputer = Math.floor(Math.random() * 10) + 2;
var secondcomputer = Math.floor(Math.random() * 10) + 2;
var computer_cards = [firstcomputer, secondcomputer];
var computer_score = 0;

computer_cards.forEach(card => {
  computer_score += card;
})


document.getElementById("first_card").innerText = firstcomputer;

function hide() {
  document.getElementById("getcard").style.visibility = "hidden";
  document.getElementById("passcard").style.visibility = "hidden";
}

function call() {
  let newcard = Math.floor(Math.random() * 10) + 2;
  user_cards.push(newcard);
  console.log(user_cards)
  user_score += newcard;
  user_cardsS = user_cardsS.concat(" ", newcard)

  document.getElementById("Score").innerText = user_score;
  document.getElementById('current cards').innerText = user_cardsS

  let computer_choice=Math.floor(Math.random() * 10);
  if(computer_choice%2===0){
    var newcomputercard=Math.floor(Math.random() * 10) + 2;
     computer_cards.push(newcomputercard);
     computer_score+=newcomputercard;
  }


  if (user_score > 21) {
    document.getElementById("result").innerText="lost the game"
    hide();
  }
  if (user_score === 21) {
    document.getElementById("result").innerText="you have won by blackjack"
    hide();
  }

  if (computer_score > 21) {
    document.getElementById("result").innerText=("computer lost the game").concat(" ",computer_score);
    hide();
  }
  if (computer_score=== 21) {
    document.getElementById("result").innerText="computer won by blackjack"
    hide();
  }
}


function pass() {
  hide();
  let computer_choice=Math.floor(Math.random() * 10);
  if(computer_choice%2===0){
    var newcomputercard=Math.floor(Math.random() * 10) + 2;
     computer_cards.push(newcomputercard);
     computer_score+=newcomputercard;
  }

  if(computer_score>user_score){
    document.getElementById("result").innerText=("lost the game").concat(" ",computer_score);
    console.log(computer_cards);

  }
  else{
    document.getElementById("result").innerText=("won the game").concat(" ",computer_score);
    console.log(computer_cards);
  }
}

