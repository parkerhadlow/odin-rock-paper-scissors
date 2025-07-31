function getComputerChoice(){
    let random_number = Math.random();
    let choice = -1;
    if (random_number < 1/3){
        choice = "rock";
    }
    else if (random_number > 2/3){
        choice = "scissors";
    }
    else{
        choice = "paper";
    }
    return choice;
}

function getHumanChoice(){
    let choice = "";
    const valid_choices = ["rock", "paper", "scissors"];
    while (!valid_choices.includes(choice)){
        choice = prompt("Please select rock, paper, or scissors.").toLowerCase();
    }
    return choice;
}

function playRound(humanSelection, computerSelection, humanScore, computerScore){
    if (humanSelection == computerSelection){
        console.log("Draw! No points awarded.");
    }
    else if (humanSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("Computer Wins!");
            computerScore += 1;
        }
        else{
            console.log("You Win!");
            humanScore += 1;
        }
    }
    else if (humanSelection == "paper"){
        if (computerSelection == "rock"){
            console.log("You Win!");
            humanScore += 1;
        }
        else{
            console.log("Computer Wins!");
            computerScore += 1;
        }
    }
    else{
        if (computerSelection == "paper"){
            console.log("You Win!");
            humanScore += 1;
        }
        else{
            console.log("Computer Wins!");
            computerScore += 1;
        }
    }
    return [humanScore, computerScore]
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore)
        console.log("Round " + i + ": player score: " + humanScore + " computer score: " + computerScore)
    }
}

playGame()