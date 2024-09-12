let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getUserChoice();

//0 = rock, 1 = paper, 2 = scissors

function getComputerChoice(){
    random = Math.floor(Math.random() * 3);
    console.log(random); // logging what was rolled
    compChoice = "";
    switch (random){
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
    }
    console.log(compChoice); // making sure that it matches what was rolled
    return compChoice;
}

function getUserChoice(){
    while (true){
        userChoice = prompt("Rock, Paper, or Scissors").toLowerCase();
        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
            console.log(userChoice);
            return userChoice;
        } else {
            alert("Invaild Reponse, Try Again");
        }
    }
    return 0; // if this returns there is some massive error happening
}

function playRound(humanChoice, computerChoice){

}

