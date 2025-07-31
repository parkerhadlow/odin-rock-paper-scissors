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

for (let i = 0; i < 6; i++){
    console.log(getComputerChoice())
}