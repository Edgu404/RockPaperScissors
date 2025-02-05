/*
Get player choice
Generate computer choice
Compare player and computer values
Report winner
Update Score

*/
/* Constants */
const playerScore = 0;
const computerScore = 0;


/* Prompts the user for their input */
function getPlayerChoice(){
    let playerInput = prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
    if(playerInput !== "rock" || "paper" || "scissors"){
        getPlayerChoice();
    }
    else {
        return playerInput;
    }
}
console.log(getPlayerChoice);
/* Randomly Decide the Computers Choice */
function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3);
    switch(computerSelection){
        case 0: "rock";
            break;
        case 1: "paper";
            break;
        case 2: "scissors"; 
            break;            
    }
}

/* Play One Round of RPS */
function playRound(getPlayerChoice, getComputerChoice){
    
    let humanSelection = getPlayerChoice(); /* error */
    let computerSelection = getComputerChoice();

    if(
        (humanSelection && computerSelection === "rock") ||
        (humanSelection && computerSelection === "paper") ||
        (humanSelection && computerSelection === "scissors"))
        {
            console.log("It's a tie! No points are awarded.")
        }
    else if(
        (humanSelection == "rock" && computerSelection == "paper") ||
        (humanSelection == "paper" && computerSelection == "scissors") ||
        (humanSelection == "scissors" && computerSelection == "rock")
    )
    {
        console.log("Oh, too bad! You lost this round. The computer earns 1 point!")
        computerScore ++;

    }
    else if(
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    )
    {
        console.log("Congratulations! You win this round and earn 1 point!")
        playerScore ++; 
    }
}
/*Play n rounds of RPS */
function playGame(humanSelection, computerSelection){

    const input = prompt("How many rounds would you like to play");

        for(let i=0; i<input; i++){
            playRound(humanSelection, computerSelection); /* error */
        }
            console.log("The game has ended! The scores were Player:"+playerScore +"Computer: "+computerScore);
            if(playerScore>computerScore){
            console.log("Congratulations you win!");
            }
            else if (playerScore < computerScore){
                console.log("The computer wins! Better luck next time :D");
            }
            else if(playerScore == computerScore){
                console.log("The game was a tie! What were the chances!")
            }
    }

playGame();