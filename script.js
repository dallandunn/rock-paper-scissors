function computerPlay () {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `It is a Tie! You both chose ${computerSelection}`;
    }
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Paper') {
                return 'You Lose! Paper beats Rock';
            } else {
                return 'You Win! Rock beats Scissors';
            }

        case 'paper':
            if (computerSelection === 'Rock') {
                return 'You Win! Paper beats Rock';
            } else {
                return 'You Lose! Scissors beats Paper';
            }
        
        case 'scissors':
            if (computerSelection === 'Paper') {
                return 'You Win! Scissors beats Paper';
            } else {
                return 'You Lose! Rock beats Scissors';
            }
    }
}

