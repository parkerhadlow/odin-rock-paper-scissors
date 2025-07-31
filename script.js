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
    return choice
}


console.log(getComputerChoice())
console.log(getHumanChoice())
