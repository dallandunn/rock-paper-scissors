function computerPlay () {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log(`It is a Tie! You both chose ${computerSelection}`);
        return 'no winner'
    }
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Paper') {
                console.log('You Lose! Paper beats Rock')
                return 'computer';
            } else {
                console.log('You Win! Rock beats Scissors');
                return 'player';
            }

        case 'paper':
            if (computerSelection === 'Rock') {
                console.log('You Win! Paper beats Rock');
                return 'player';
            } else {
                console.log('You Lose! Scissors beats Paper');
                return 'computer';
            }
        
        case 'scissors':
            if (computerSelection === 'Paper') {
                console.log('You Win! Scissors beats Paper');
                return 'player';
            } else {
                console.log('You Lose! Rock beats Scissors');
                return 'computer';
            }
    }
}

function game() {
    let playerWins = 0;
    let computerWins =0;

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}:`);
        let playerSelection = prompt('Rock, Paper or Scissors?');
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);

        if (winner === 'player') {
            playerWins++;
        }

        if (winner === 'computer') {
            computerWins++;
        }
    }

    if (computerWins > playerWins) {
        console.log(`You Lose! The computer won ${computerWins} Rounds. You won ${playerWins} rounds.`);
    } else if (playerWins > computerWins) {
        console.log(`You win! The computer won ${computerWins} Rounds. You won ${playerWins} rounds.`);
    } else {
        console.log(`It is a tie! The computer won ${computerWins} Rounds. You won ${playerWins} rounds.`)
    }
}

game()