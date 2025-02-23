
/* Constants and global variables*/
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

/* Get the players choice */
function getPlayerChoice(){
    let playerChoice='';
    buttons.forEach((button) => {
        button.addEventListener("click", () => {playerChoice = button.id; console.log("This is the players choice:" +playerChoice)});
    });
    return playerChoice;
};

/* Randomly Decide The Computers Choice */
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
    
}
console.log("this is the computers choice: " + getComputerChoice());

/* Play One Round of RPS */
function playRound(){
    
    let humanSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (humanSelection === computerSelection)
        {
            console.log("tie");
        }
    else if (
        ((humanSelection == "rock") && (computerSelection == "paper")) ||
        ((humanSelection == "paper") && (computerSelection == "scissors")) ||
        ((humanSelection == "scissors") && (computerSelection == "rock"))
        )
        {
            console.log("lose");
            computerScore++;
        }
    else if (
        ((humanSelection == "rock") && (computerSelection == "scissors")) ||
        ((humanSelection == "paper") && (computerSelection == "rock")) ||
        ((humanSelection == "scissors") && (computerSelection == "paper"))
        )
        {
            console.log("win");
            playerScore++; 
        }
        
    };

/*Play 5 rounds of RPS */
// function playGame(){
    
//     // for(let i=0; i<5; i++){
//     //     console.log("Round: "+(i+1));
//     //     playRound(); 
//     //     console.log("The current scores are Player: "+playerScore +" Computer: "+computerScore);
//     // }
//     playRound(); 
//         // console.log("The game has ended! The scores were Player:"+playerScore +" Computer: "+computerScore);
//         if(playerScore>computerScore){
//             return("Congratulations you win!");
//         }
//         else if (playerScore < computerScore){
//             return("The computer wins! Better luck next time :D");
//         }
//         else if(playerScore == computerScore){
//             return("The game was a tie!")
//         }
//         // return("Thanks for playing!");
//     };


playRound();