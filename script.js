//0 = rock, 1 = paper, 2 = scissors

function getComputerChoice(){
    random = Math.floor(Math.random() * 3);
    console.log(random); // logging what was rolled
    compChoice = "";
    switch (random){
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
            break;
    }
    console.log(compChoice); // making sure that it matches what was rolled
    return compChoice;
}

function getUserChoice(){
    userChoice = prompt("Rock, Paper, or Scissors?");
    console.log(userChoice); // logging to make sure prompt works
    return userChoice;
}

getComputerChoice();
getUserChoice();