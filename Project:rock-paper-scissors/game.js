/* Helper funcitons */
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
}//////////////////////////////////////////////



function playGame() {
    let win = 0,
        loose = 0,
        tie = 0,
        round = 1;

    const div = document.querySelector('#results');
    div.textContent = `Game: ${round}, Current Results: Wins: ${win}, Losses: ${loose}, Ties: ${tie}`;
    
    const rock = document.querySelector('#btnRock');
    const paper = document.querySelector('#btnPaper');
    const scissors = document.querySelector('#btnScissors');

    rock.addEventListener('click', () => playRoundAndUpdate('rock'));
    paper.addEventListener('click', () => playRoundAndUpdate('paper'));
    scissors.addEventListener('click', () => playRoundAndUpdate('scissors'));

    function playRoundAndUpdate(playerChoice){
        const compPick = getComputerChoice();
        const result = playRound(playerChoice, compPick);
        switch (result[1]) {
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
        round++;
        if(round < 6){
            div.textContent = `Game: ${round}, Current Results: Wins: ${win}, Losses: ${loose}, Ties: ${tie}`;
        }
        

        if(round==6){
            div.textContent = `Game: ${round-1}, Current Results: Wins: ${win}, Losses: ${loose}, Ties: ${tie}`;
            const winner = document.querySelector('#winner');
            if(win > loose){
                winner.textContent = 'Congrats, You Won!!!'
                winner.style.color = 'green';
            }
            else {
                winner.textContent = 'You Loose! Better luck next time.'
                winner.style.color = 'red';
            }
        }
    }
}

playGame();