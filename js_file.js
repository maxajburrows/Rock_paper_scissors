
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

function playRound(e) {
    let compSelect = getComputerChoice();
    let playSelect = this.id;
    let resultMessage = document.querySelector('#message');
    let result
     
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
    score(result, firstTo, resultMessage);
}

const firstTo = 5;
let playerScore = 0;
let computerScore = 0;

function score(result, firstTo, resultMessage) {
    const scoreMessage = document.querySelector('#score');
    console.log(firstTo);
    console.log(playerScore);

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
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Click here to play again';
    buttonRestart.setAttribute('id', 'restart');
    document.body.appendChild(buttonRestart);
}

const btns = document.querySelectorAll('button');
console.log(btns);
btns.forEach(btn => btn.addEventListener('click', playRound));
