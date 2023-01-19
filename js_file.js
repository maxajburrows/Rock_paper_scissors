
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
        if (result=='Player Win') {
            playerScore++;
        } else if (result=='Computer Win') {
            computerScore++;
        }
        scoreMessage.textContent = `The score is: You ${playerScore} - ${computerScore} The Machines`;
    }
    if (playerScore === firstTo) {
        resultMessage.textContent = 'You win! Humans survive...for now.';
        scoreMessage.textContent = `Final score: You ${playerScore} - ${computerScore} The Machines`;

    } else if (computerScore === firstTo) {
        resultMessage.textContent = 'You Lose! The machines are taking over';
        scoreMessage.textContent = `Final score: You ${playerScore} - ${computerScore} The Machines`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <5; i++) {
        console.log(`The score is: You ${playerScore} - ${computerScore} The Machines`)
        const playerSelection = prompt("Make your selection. Choose Wisely!");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result=='Player Win') {
            playerScore++
        } else if (result=='Computer Win') {
            computerScore++
        } 
    }
    console.log(`Final score: You ${playerScore} - ${computerScore} The Machines`)
    if (playerScore > computerScore) {
        console.log('You win! Humans survive for now.')
    } else if (playerScore < computerScore) {
        console.log('You Lose! The machines are taking over')
    } else {
        console.log('Draw. Humanity hangs in the balance')
    }
}

const btns = document.querySelectorAll('button');
console.log(btns);
btns.forEach(btn => btn.addEventListener('click', playRound));
