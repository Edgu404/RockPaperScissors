
/* Constants */
let playerScore = 0;
let computerScore = 0;

/* Prompts the user for their input */
function getPlayerChoice(){
    let playerInput = prompt("Type your selection(Rock, Paper, or Scissors) below.");
    console.log("You played: "+playerInput);
    return playerInput;
}
/* Randomly Decide The Computers Choice */
function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3);
    switch(computerSelection){
        case 0: 
            computerSelection = "rock";
            break;
        case 1: 
            computerSelection = "paper";
            break;
        case 2: 
            computerSelection = "scissors"; 
            break;            
    }
    
    console.log("Computer plays: "+computerSelection);
    return computerSelection;
}

/* Play One Round of RPS */
function playRound(){
    
    let humanSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (humanSelection === computerSelection)
        {
            console.log("It's a tie! No points are awarded.");
        }
    else if (
        ((humanSelection == "rock") && (computerSelection == "paper")) ||
        ((humanSelection == "paper") && (computerSelection == "scissors")) ||
        ((humanSelection == "scissors") && (computerSelection == "rock"))
        )
        {
            console.log("Oh, too bad! You lost this round. The computer earns 1 point!");
            computerScore++;

        }
    else if (
        ((humanSelection == "rock") && (computerSelection == "scissors")) ||
        ((humanSelection == "paper") && (computerSelection == "rock")) ||
        ((humanSelection == "scissors") && (computerSelection == "paper"))
        )
        {
            console.log("Congratulations! You win this round and earn 1 point!");
            playerScore++; 
        }
    else {
        console.log("Please try again and enter a valid option.");
        playRound();
    };
    
}
/*Play 5 rounds of RPS */
function playGame(){
    
    console.log("Hi, lets play a game of Rock, Paper, Scissors. We'll do best out of five :)")

    for(let i=0; i<5; i++){
        console.log("Round: "+(i+1));
        playRound(); 
        console.log("The current scores are Player: "+playerScore +" Computer: "+computerScore);
    }
        // console.log("The game has ended! The scores were Player:"+playerScore +" Computer: "+computerScore);
        if(playerScore>computerScore){
        console.log("Congratulations you win!");
        }
        else if (playerScore < computerScore){
            console.log("The computer wins! Better luck next time :D");
        }
        else if(playerScore == computerScore){
            console.log("The game was a tie!")
        }
        console.log("Thanks for playing!");
    }
        

playGame();