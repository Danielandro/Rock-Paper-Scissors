var options = ['Rock', 'Paper', 'Scissors'];

function ComputerPlay(){
    var randomNum = Math.round(Math.random() * 3);
    return options[randomNum];
}

function play(playerSelection, computerSelection){
    // convert both selections to lowercase
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 'It\'s a draw';
    } // player wins
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } // computer wins
    else if(computerSelection === 'rock' && playerSelection === 'scissors' ){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }


}

// || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'