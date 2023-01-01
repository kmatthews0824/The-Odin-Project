for(i=0;i<6;i++){

let computerChoices = ["Rock", "Paper", "Scissors"];
let computerChoice = getComputerChoice(computerChoices);
let choice = prompt ("Rock, Paper, Scissors");
let capChoice = choice.charAt(0).toUpperCase() + choice.slice(1);

function getComputerChoice(word){
    return word[Math.floor(Math.random() * word.length)];
}
function playRound(playerChoice,opponentChoice){
   
    if(playerChoice == "Rock" && opponentChoice == "Scissors" || playerChoice == "Paper" && opponentChoice == "Rock" || playerChoice == "Scissors" && opponentChoice == "Paper"){
        return console.log("You chose: "+ playerChoice + " and your opponent chose: "+opponentChoice + ": you WIN!");
    }
    else if(playerChoice == "Scissors" && opponentChoice == "Rock" || playerChoice == "Rock" && opponentChoice == "Paper" || playerChoice == "Paper" && opponentChoice == "Scissors"){
        return console.log("You chose: "+ playerChoice + " and your opponent chose: "+opponentChoice + ": you LOSE!");
    }
    else{
        return console.log("TIE!");
    }
}

playRound(capChoice,computerChoice);
}