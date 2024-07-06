let randomnumber=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#sub')
const userinput=document.querySelector('#guessfeild')
const guessslot=document.querySelector('.preguess')
const remain=document.querySelector('.remain')
const lowhi=document.querySelector('.lowOrhi')
const startover=document.querySelector('.results')

const p=document.createElement('p')


let preguess=[]
let numguess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess)
    })

}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter te valid number')
    }else if(guess<0){
        alert('please enter the number more then1')

    }else if(guess>100){
        alert('please enter the number less then 100')
    }else{ preguess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displayMessage(`game over.Random number was${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkGuess(guess)
              
        }

    }
    //
}

function checkGuess(guess){
    //we need to check if this numer lesss or gater then value
    if(guess===randomnumber){
        displayMessage('you guessed it right ')
            endgame()
    }else if(guess<randomnumber){
        displayMessage('number is too low')
    }else if(guess>randomnumber){
        displayMessage('number is too high')
    }

        }
   
   


function displayguess(guess){

    userinput.value=' '
    guessslot.innerHTML+=`${guess}, `
    numguess++;
    remain.innerHTML=`${10-numguess}`
}
 
function displayMessage(message){
    lowhi.innerHTML=`<h2>${message}</h2>`

}
//to end and start
function endgame(){
    userinput.value=''
    userinput.setAttribute('disebled','')
    p.classList.add('button')
    p.innerHTML='<h3 id="newgame"> Start new game</h3>'
    startover.appendChild(p)
    playGame=false
    newgame()

}
function newgame(){
    const newgamebutton=document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
randomnumber=parseInt(Math.random()*100+1)
preguess=[]
numguess=1
guessslot.innerHTML=''
remain.innerHTML=`${11-numguess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)

     playGame=true

})

}


