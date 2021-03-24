let compChoice = null
let playerChoice = null

function play(buttonClick){
    if(buttonClick == 'rock'){
        playerChoice == 'rock'
    }
    else if(buttonClick == 'paper' ){
        playerChoice == 'paper'
    }
    else if(buttonClick == 'scissors'){
        playerChoice = 'scissors'
    }
}

function computer(){
    let options = [
        'rock',
        'paper',
        'scissors'
    ]
    let compChoice = options[Math.floor(Math.random()*options.length)]
}

function victory(){
    if(playerChoice == compChoice){
        console.log(tie)
    }
}