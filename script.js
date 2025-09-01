const scoreContainer = document.querySelector("#scoreContainer");

// create container to display computer choice + win status
let content = document.createElement("div");
content.classList.add("content");
scoreContainer.appendChild(content);

// create container to display score after every round
let scoreDisplay = document.createElement("div");
scoreDisplay.classList.add("scoreDisplay")
scoreContainer.appendChild(scoreDisplay);

// make score variables
let humanScore = 0
let computerScore = 0

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

function playRound(humanSelection, computerSelection, humanScore, computerScore){
    if (humanSelection == computerSelection){
        content.textContent = "Draw! No points awarded.";
    }
    else if (humanSelection == "rock"){
        if (computerSelection == "paper"){
            content.textContent = "Computer chose " + computerSelection + ". Computer Wins!";
            computerScore += 1;
        }
        else{
            content.textContent = "Computer chose " + computerSelection + ". You Win!!";
            humanScore += 1;
        }
    }
    else if (humanSelection == "paper"){
        if (computerSelection == "rock"){
            content.textContent = "Computer chose " + computerSelection + ". You Win!!";
            humanScore += 1;
        }
        else{
            content.textContent = "Computer chose " + computerSelection + ". Computer Wins!";
            computerScore += 1;
        }
    }
    else{
        if (computerSelection == "paper"){
            content.textContent = "Computer chose " + computerSelection + ". You Win!!";
            humanScore += 1;
        }
        else{
            content.textContent = "Computer chose " + computerSelection + ". Computer Wins!";
            computerScore += 1;
        }
    }

    // update scoreboard
    scoreDisplay.textContent = ("Player Score: " + humanScore + " Computer Score: " + computerScore)

    // check for game over
    if (humanScore === 5 || computerScore ===5){
        if (humanScore === 5){
            content.textContent = "You reached 5 points! You win the game! Refresh page to play again."
        }
        else{
            content.textContent = "Computer reached 5 points! Computer wins the game! Refresh page to play again."
        }

        // disable buttons
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
    return [humanScore, computerScore]
}

function playGame(humanSelection){
    const computerSelection = getComputerChoice();
    [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore)
    
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanSelection = button.id
        playGame(humanSelection)

    })
})



