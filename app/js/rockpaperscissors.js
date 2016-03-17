////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

var getInput = function() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.")
   var answer = prompt();
   return answer;
}

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.


 return move || getInput();

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   

 return move || randomPlay(); 
}



function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (playerMove === computerMove) {
        winner = "tie";
        console.log ("Tie game");
    }
    else if (playerMove === "Rock" && computerMove === "Scissors") {
        winner = "player";
        console.log ("Rock wins");
    }
    else if (playerMove === "Paper" && computerMove === "Rock") {
        winner = "player";
        console.log ("Paper wins");
    }
    else if (playerMove === "Scissors" && computerMove === "Paper") {
        winner = "player";
        console.log ("Scissors wins");
    }
    else if (playerMove === "Rock" && computerMove === "Paper") {
        winner = "computer";
        console.log = "Tough luck";
    }
    else if (playerMove === "Paper" && computerMove === "Scissors") {
        winner = "computer";
        console.log = "Tough luck";
    }
    else if (playerMove === "Scissors" && computerMove === "Rock") {
        winner = "computer";
        console.log = "Tough luck";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;  
    var winner = getWinner(playerMove, computerMove);
    while ( playerWins < 5 && computerWins < 5) {
        if (winner === "player") {
            playerWins += 1;
            console.log("You win!");
        }
        else if (winner === "computer") {
            computerWins += 1;
            console.log("Crap, computer wins!");
        }
        else if (winner === "tie") {
            console.log("Tie!");
        }    
        else if (playerWins === 5) {
            console.log("You win!")
        }
        else if (computerWins === 5) {
            console.log("You lost! Game over. Try Again?")
        }
}
    return [playerWins, computerWins];
}

