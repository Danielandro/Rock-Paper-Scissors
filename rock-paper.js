var options = ['rock', 'paper', 'scissors'];
var playerWins = 0;
var computerWins = 0;

// pick random choice 
function computerPlay(){
    var randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

// compare & find a winner
function play(playerSelection, computerSelection){
    // convert player selection to lowercase
    playerSelection = playerSelection.toLowerCase();
   
    if(playerSelection === computerSelection){
        return 'It\'s a draw';
    } // player wins
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ){
        playerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } // computer wins
    else if(computerSelection === 'rock' && playerSelection === 'scissors' ){
        computerWins++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerWins++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerWins++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else{
        return `NO MATCHES FOUND --- ${playerSelection} ${computerSelection}`;
    }

}

// play five games and declare a winner
function game(){       
    for(var i = 0; i < 5; i++){
        const playerSelection = prompt('Rock, Paper or Scissors???');
        var computerSelection = computerPlay();
        console.log(play(playerSelection, computerSelection));        
    }
    
    if(playerWins > computerWins){
        console.log('You Are The Winner!!!!');
    }else if (computerWins > playerWins){
        console.log('You Lost. Better Luck Next Time :-(');
    }else{
        console.log('All Tied.....');
    }    
}

game();
