

/* Constants and global variables*/
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

let playerChoice='';
buttons.forEach((button) => {
    button.addEventListener("click", () => {playerChoice= button.id; playRound();} );
});
    



/* Randomly Decide The Computers Choice */
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

/* Play One Round of RPS */
function playRound(){
    
    let humanSelection = playerChoice;
    let computerSelection = getComputerChoice();
    if (humanSelection === computerSelection)
        {
            alert("It's a tie");
        }
    else if (
        ((humanSelection == "rock") && (computerSelection == "paper")) ||
        ((humanSelection == "paper") && (computerSelection == "scissors")) ||
        ((humanSelection == "scissors") && (computerSelection == "rock"))
        )
        {
            alert("You lose");
            computerScore++;
        }
    else if (
        ((humanSelection == "rock") && (computerSelection == "scissors")) ||
        ((humanSelection == "paper") && (computerSelection == "rock")) ||
        ((humanSelection == "scissors") && (computerSelection == "paper"))
        )
        {
            alert("You win");
            playerScore++; 
        }
    console.log("players score is: " + playerScore);
    console.log("computers score is: " + computerScore);
    };
