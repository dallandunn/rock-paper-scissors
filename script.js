function computerPlay () {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    const selections = document.querySelector('.selections');
    selections.textContent = `The computer chooses ${computerSelection}. You choose ${playerSelection}.`;
    setTimeout(function(){
        selections.textContent = "";
    }, 10000);

    const div = document.querySelector('.result');

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        div.textContent = `It is a Tie! You both chose ${computerSelection}`;
        return 'no winner';
    }
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Paper') {
                div.textContent = 'You Lose! Paper beats Rock';
                return 'computer';
            } else {
                div.textContent = 'You Win! Rock beats Scissors';
                return 'player';
            }

        case 'paper':
            if (computerSelection === 'Rock') {
                div.textContent = 'You Win! Paper beats Rock';
                return 'player';
            } else {
                div.textContent = 'You Lose! Scissors beats Paper';
                return 'computer';
            }
        
        case 'scissors':
            if (computerSelection === 'Paper') {
                div.textContent = 'You Win! Scissors beats Paper';
                return 'player';
            } else {
                div.textContent = 'You Lose! Rock beats Scissors';
                return 'computer';
            }
    }
}

 function getSelection(e) {
    const playerCounter = document.querySelector('#player');
    const computerCounter = document.querySelector('#computer');
    const result = document.querySelector('.result');

    let playerSelection = e.srcElement.textContent;
    if (playerWins < 5 && computerWins < 5) {
        winner = playRound(playerSelection, computerPlay());
        if (winner === 'player') {
            playerWins++;
        }

        if (winner === 'computer') {
            computerWins++;
        }

        playerCounter.textContent = playerWins;
        computerCounter.textContent = computerWins;
    }

    if (playerWins === 5) {
        result.textContent = "You Win!";
        setTimeout(function() {
            alert('You Win');
        }, 1000);
    }

    if (computerWins === 5) {
        result.textContent = "The computer wins!";
        setTimeout(function() {
            alert('You Lose');
        }, 1000);
    }
}

let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener('click', getSelection));