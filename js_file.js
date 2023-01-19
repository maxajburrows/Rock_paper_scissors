
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
    //let playSelect = e.path<0<id;
    let playSelect = this.id;
    let resultMessage = document.querySelector('#message');
     
    if (playSelect==compSelect) {
        resultMessage.textContent = `Draw! You both picked ${playSelect}.`;
        return 'Draw'
    } else if ((playSelect=="Rock" && compSelect=="Scissors")||(playSelect=="Scissors" && compSelect=="Paper")||(playSelect=="Paper" && compSelect=="Rock")) {
        resultMessage.textContent = `You Win! ${playSelect} beats ${compSelect}.`;
        return 'Player Win'
    } else {
        resultMessage.textContent = `You Lose! ${compSelect} beats ${playSelect}.`;
        return 'Computer Win'
    }
}

function capitalise(word) {
    let wordLowerCase = word.toLowerCase();
    let firstLetterLower = wordLowerCase.slice(0,1);
    let firstLetterUpper = firstLetterLower.toUpperCase();
    return wordLowerCase.replace(firstLetterLower, firstLetterUpper);
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


//console.log(game());