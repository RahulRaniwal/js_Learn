let randomNum = parseInt(Math.random()*100 +1)   // random number

const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0
let playGame = true 

if(playGame){
    submitButton.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validate(guess)
    })
}

function validate(guess){
    if(isNaN(guess)){
        alert('bawli gend valid number daal')
    }else if(guess < 1){
        alert('bawli gend valid number daal')
    }else if(guess > 100){
        alert('bawli gend valid number daal')
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You win`)
        endGame()
    }else if(guess > randomNum){
        displayMessage(`your guess is greater than number`)
    }else if(guess < randomNum){
        displayMessage(`your guess is lower than number`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    lastResult.innerHTML = `${10 - numGuess}`
}

function displayMessage(messsage){
    lowOrHi.innerHTML = <h2>${messsage}</h2>
}

function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click' , function(e){
        randomNum = parseInt(Math.random()*100 +1)
        prevGuess = []
        numGuess = 0;
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
