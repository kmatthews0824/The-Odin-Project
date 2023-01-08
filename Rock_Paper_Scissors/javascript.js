let computerChoices = ["Rock", "Paper", "Scissors"];

const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const sciBtn = document.querySelector('#Scissors');


let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let winCount = 0;
let loseCount = 0;
let tieCount = 0;

rockBtn.onclick = ()=>playRound(rock,computerChoices);
paperBtn.onclick = ()=>playRound(paper,computerChoices);
sciBtn.onclick = ()=>playRound(scissors,computerChoices);

function getComputerChoice(word){
    return word[Math.floor(Math.random() * word.length)];
}

function playRound(playerChoice,opponentChoice){
    var opponentChoice = opponentChoice[Math.floor(Math.random() * opponentChoice.length)];

    const winOrLose = document.querySelector("#winLose");
    const winCounter = document.querySelector('#heading');
    const addPara = document.createElement('p');
    const addHead = document.createElement('h2');

    document.getElementById('heading').innerHTML="";
    addHead.textContent = "Win: "+winCount+" Lose: "+loseCount+" Tie: "+tieCount;
    winCounter.appendChild(addHead);

    if(playerChoice == "Rock" && opponentChoice == "Scissors" || playerChoice == "Paper" && opponentChoice == "Rock" || playerChoice == "Scissors" && opponentChoice == "Paper"){
        addPara.textContent = "You chose: "+ playerChoice + " and your opponent chose: "+opponentChoice + ": you WIN!";
        document.getElementById('winLose').innerHTML = "";
        winCount++;
        return winOrLose.appendChild(addPara);
    }
    
    else if(playerChoice == "Scissors" && opponentChoice == "Rock" || playerChoice == "Rock" && opponentChoice == "Paper" || playerChoice == "Paper" && opponentChoice == "Scissors"){
        addPara.textContent = "You chose: "+ playerChoice + " and your opponent chose: "+opponentChoice + ": you LOSE!";
        document.getElementById('winLose').innerHTML = "";
        loseCount++;
        return winOrLose.appendChild(addPara);
    }
    else{
        addPara.textContent = "You chose: "+playerChoice+" and your opponent chose: "+opponentChoice+":TIE!";
        document.getElementById('winLose').innerHTML = "";
        tieCount++;
        return winOrLose.appendChild(addPara);
    }
}

