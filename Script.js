
/* Constants and global variables*/
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');



/* Randomly Decide The Computers Choice */
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}


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

/* player selects and initiates game */
function getPlayerChoice(){
    let playerChoice='';
    buttons.forEach((button) => {
        button.addEventListener("click", () => {playerChoice = button.id; playRound();} );
        
    });
    
    console.log("this is the computers choice: " + getComputerChoice());
};