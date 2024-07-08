const random=function(){
    const hexa='0123456789ABCDEF';
    let color='#'
    for(let i=0;i<6;i++){
    color+=hexa[Math.floor(Math.random()*16)];
}
return color;
}
let intervel
const startchangecolor=function(){
    if(!intervel){intervel=  setInterval(changebg,1000)}

}
function changebg(){
    document.body.style.backgroundColor=random();
}


const stopchangecolor=function(){
    clearInterval(intervel)
    //after write code we flush becasuse intervel is loading again and again
    intervel=null
}

document.querySelector('#start').addEventListener('click',startchangecolor)



document.querySelector('#stop').addEventListener('click',stopchangecolor)

