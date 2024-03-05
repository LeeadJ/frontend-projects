function getComputerChoice() {
    let num = Math.random();
    return (num <= 0.33) ? 'Rock' :
        (0.33 < num && num >= 0.66) ? 'Paper' :
        'Scissors';
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    if (ps == 'paper' && cs == 'rock' || ps == 'scissors' && cs == 'paper' || ps == 'rock' && cs == 'scissors') {
        return [`You Win! ${playerSelection} beats ${computerSelection}.`, 1];
    } else if (cs == 'paper' && ps == 'rock' || cs == 'scissors' && ps == 'paper' || cs == 'rock' && ps == 'scissors') {
        return [`You Lose! ${computerSelection} beats ${playerSelection}.`, 0];
    } else {
        return [`Tie! Both players chose ${playerSelection}.`, 2];
    }
}



function playGame() {
    let win=0, loose=0, tie=0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Please choose between "Rock", "Paper" and "Scissors"`);
        const computerSelection = getComputerChoice();
        let ans = playRound(playerSelection, computerSelection);
        switch(ans[1]){
            case 0:
                loose++;
                break;
            case 1:
                win++;
                break;
            case 2:
                tie++;
                break;
        }
        console.log(`Round #${i+1}: ${ans[0]}`);
    }
    console.log(`Wins: ${win}, Losses: ${loose}, Ties: ${tie}`);
}

console.log(playGame());