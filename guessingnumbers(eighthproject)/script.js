let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

function compareGuesses(hguess,cguess,target){
    let hdist = Math.abs(target - hguess);
    let cdist = Math.abs(target - cguess);
    if(hdist < cdist){
        return true;
    }
    else{
        return false;
    }

}

function updateScore(winner){
    if(winner === 'human'){
        humanScore += 1;
    }
    else{
        humanScore += 1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}