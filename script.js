function computerPlay () {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    const selections = document.querySelector('.selections');
    selections.textContent = `The computer chooses ${computerSelection}. You choose ${playerSelection}.`;
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
    let playerSelection = e.srcElement.textContent;
    playRound(playerSelection, computerPlay());
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener('click', getSelection));

// function game() {
//     let playerWins = 0;
//     let computerWins =0;

  
//     console.log(`Round ${i}:`);
//     let playerSelection = prompt('Rock, Paper or Scissors?');
//     let computerSelection = computerPlay();
//     let winner = playRound(playerSelection, computerSelection);

//     if (winner === 'player') {
//         playerWins++;
//     }

//     if (winner === 'computer') {
//         computerWins++;
//     }
    

//     if (computerWins > playerWins) {
//         console.log(`You Lose! The computer won ${computerWins} Rounds. You won ${playerWins} rounds.`);
//     } else if (playerWins > computerWins) {
//         console.log(`You win! The computer won ${computerWins} Rounds. You won ${playerWins} rounds.`);
//     } else {
//         console.log(`It is a tie! The computer won ${computerWins} Rounds. You won ${playerWins} rounds.`)
//     }
// }

// game()