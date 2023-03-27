
//const buttons = document.querySelector(".main-game-buttons button");

/*const btn = document.querySelectorAll(".main-game-buttons")
for (button of btn){
 button.addEventListener("click", function () {
  console.log(button);
 })
}*/

const game = ()=>{
 let computerScore = 0;
 let playerScore = 0;
 
 const startGame = () =>{
  const playBtn = document.querySelector(".game-intro button");
  const gameIntro = document.querySelector(".game-intro");
  const mainGame = document.querySelector(".main-game");
  const hands = document.querySelectorAll(".main-game-images img");
  
  hands.forEach(hand =>{
   hand.addEventListener("animationend", function (){
    this.style.animation = "";
   });
  });
  
  playBtn.addEventListener("click",() => {
   setTimeout( () => {
 gameIntro.classList.add("opacity-hide");
   mainGame.classList.add("opacity-show");
}, 200);
 
  });
  
 };
 
 const playMatch = () =>{
  const options = document.querySelectorAll(".main-game-buttons button");
  let playerHand = document.querySelector(".player-hand");
  let computerHand = document.querySelector(".computer-hand");
  //computer options: to generate a random number
const computerOptions = ["rock", "paper", "scissors"];

options.forEach(option => {
 option.addEventListener("click", function (){
  let computerNumber = Math.floor(Math.random()*3);
  let computerChoice = computerOptions[computerNumber];
  //we call compareHands here:
  //update images
setTimeout( () => {
 compareHands(this.textContent, computerChoice);
 playerHand.src = `./images/${this.textContent}.png`;
computerHand.src = `./images/${computerChoice}.png`;
}, 2000);

playerHand.style.animation ="shakePlayer 2s ease";
computerHand.style.animation ="shakeComputer 2s ease";
 } );
});
};
//update score
const updateScore = ()=>{
 const pScore = document.querySelector(".player-score p");
 const cScore = document.querySelector(".computer-score p");
 pScore.textContent = playerScore;
 cScore.textContent = computerScore;
}


const compareHands = (playerChoice, computerChoice) =>{
 const winner = document.querySelector(".main-game h1");
 if (playerChoice === computerChoice) {
  //check if there's a tie
  winner.textContent = "It is a tie";
  return;
    //checking for rock:
 } if (playerChoice === "rock") {
  if (computerChoice === "scissors") {
   winner.textContent = "Player Wins";
   playerScore++;
   updateScore();
   return;
  }else{
   winner.textContent = "Computer wins"
   computerScore++;
   updateScore();
   return;
  }
  
  
 }
  //checking for paper
if (playerChoice === "paper") {
  if (computerChoice === "scissors") {
   winner.textContent = "Computer Wins";
   computerScore++;
   updateScore();
   return;
  }else{
   winner.textContent = "Player wins"
   playerScore++;
   updateScore();
   return;
  }
  
 }// checking for scissors
if (playerChoice === "scissors") {
  if (computerChoice === "rock") {
   winner.textContent = "Computer wins";
   computerScore++;
   updateScore();
   return;
  }else{
   winner.textContent = "Player wins"
   playerScore++;
   updateScore();
   return;
  }
  
  
 }
}


playMatch();
startGame();
}
game();
