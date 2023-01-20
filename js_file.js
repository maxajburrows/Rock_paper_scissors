
let resultMessage = document.querySelector('#message');
let scoreMessage = document.querySelector('#score');
let buttonRestart = document.createElement('button');

const firstTo = 5;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice==0) {
        return "Rock"
    } else if (choice==1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound() {
    let compSelect = getComputerChoice();
    let playSelect = this.id;
    let result;
     
    if (playSelect==compSelect) {
        resultMessage.textContent = `Draw! You both picked ${playSelect}.`;
        result = 'Draw';
    } else if ((playSelect=="Rock" && compSelect=="Scissors")||(playSelect=="Scissors" && compSelect=="Paper")||(playSelect=="Paper" && compSelect=="Rock")) {
        resultMessage.textContent = `You Win! ${playSelect} beats ${compSelect}.`;
        result = 'Player Win';
    } else {
        resultMessage.textContent = `You Lose! ${compSelect} beats ${playSelect}.`;
        result = 'Computer Win';
    }
    score(result, firstTo);
}

function score(result, firstTo) {
    if (playerScore < firstTo && computerScore < firstTo) {
        if (result ==='Player Win') {
            playerScore++;
        } else if (result ==='Computer Win') {
            computerScore++;
        }
        scoreMessage.textContent = `The score is: You ${playerScore} - ${computerScore} The Machines`;
    }
    if (playerScore === firstTo) {
        resultMessage.textContent = 'You win! Humans survive...for now.';
        scoreMessage.textContent = `Final score: You ${playerScore} - ${computerScore} The Machines`;
        playAgain()
    } else if (computerScore === firstTo) {
        resultMessage.textContent = 'You Lose! The machines are taking over';
        scoreMessage.textContent = `Final score: You ${playerScore} - ${computerScore} The Machines`;
        playAgain()
    }
}

function playAgain() {
    buttonRestart.textContent = 'Click here to play again';
    buttonRestart.setAttribute('id', 'restart');
    buttonRestart.addEventListener('click', resetScore)
    document.body.appendChild(buttonRestart);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    scoreMessage.textContent = 'The score is: You 0 - 0 The Machines';
    resultMessage.textContent = '';
    document.body.removeChild(buttonRestart);
}

const btns = document.querySelectorAll('button');
console.log(btns);
btns.forEach(btn => btn.addEventListener('click', playRound));
