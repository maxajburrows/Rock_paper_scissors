
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

function playRound(playSelect, compSelect) {
    playSelect = capitalise(playSelect)
    if (!(playSelect=="Rock" || playSelect=="Scissors" || playSelect=="Paper")) {
        return "Oops it looks like you made a spelling error!"
    }
    if (playSelect==compSelect) {
        return `Draw! You both picked ${playSelect}`
    } else if ((playSelect=="Rock" && compSelect=="Scissors")||(playSelect=="Scissors" && compSelect=="Paper")||(playSelect=="Paper" && compSelect=="Rock")) {
        return `You Win! ${playSelect} beats ${compSelect}`
    } else {
        return `You Lose! ${compSelect} beats ${playSelect}`
    }
}

function capitalise(word) {
    let wordLowerCase = word.toLowerCase();
    let firstLetterLower = wordLowerCase.slice(0,1);
    let firstLetterUpper = firstLetterLower.toUpperCase();
    return wordLowerCase.replace(firstLetterLower, firstLetterUpper);
}

const playerSelection = "PAPER";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));