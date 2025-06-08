let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoie() {
    Math.random
    let rndnum = Math.floor(Math.random() * 3);
    let choice;

    switch (rndnum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor";
            break;
        default:
            return "something went wrong";
    }

    return choice;
}

function getHumanChoice() {
    while (true) {
        let choice = prompt('Enter: "Rock", "Paper", Scissor');

        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissor") {
            return choice.toLowerCase();
        }
    }
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice == "rock" && computerChoice == "scissor" || humanChoice == "scissor" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win!");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("You pick the same!");
    } else {
        console.log("Computer wins!")
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoie();
        let humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
        console.log(`You: ${humanChoice} | Computer: ${computerChoice}`)
    }

    console.log("------------------------------------------------------")
    console.log(`Scores, You: ${humanScore}, Computer: ${computerScore}`)
    console.log("------------------------------------------------------")
}