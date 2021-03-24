let playerChoice = null

function play(buttonClick){
    if(buttonClick == 'rock'){
        playerChoice == 'rock'
    }
    else if(buttonClick == 'paper' ){
        playerChoice == 'paper'
    }
    else if(buttonClick == 'scissors'){
        playerChoice == 'scissors'
    }
}

function computer(){
    let options = [
        'rock',
        'paper',
        'scissors'
    ]
    let compChoice = options(Math.floor(Math.random()*options.length))
    return compChoice
}

function victory(){
    if(playerChoice == compChoice){
        console.log('Tie')
    }
    else if (playerChoice == 'rock' && compChoice == 'scissors'){
        console.log('Victory!')
    }
    else if (playerChoice == 'paper' && compChoice == 'rock'){
        console.log('Victory!')
    }
    else if (playerChoice == 'scissors' && compChoice == 'paper'){
        console.log('Victory!')
    }
    else{
        console.log('Failure')
    }
}