const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach((button)=>{
    console.log(buttons)

//add event listner
button.addEventListener('click',function(event){
    console.log(event.target )
    if(event.target.id==="red"){
        body.style.backgroundColor="red"
    }
    if(event.target==='blue'){
        body.style.backgroundColor="blue"

    }
    if(event.tareget==='orange'){
        body.style.backgroundColor="orange"
    }
    if(event.target==="white"){
        body.style.backgroundColor="white"
    }
});
});