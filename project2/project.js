const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
const height=parseInt( document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=(document.querySelector('#results'))
if(height===''||height<0||isNaN(height)){
    results.innerHTML="please give valid height"

}
else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML="please select valid height"

}else{
   const bml=(weight/((height*height)/10000)). toFixed(3)
   //show the result
 results.innerHTML=`<span>${bml}</span>`
   if(results<18.6){
    results.innerHTML="under weight"
   }else if(results=>18.7){
    this.innerHTML="normal"
   }

   }




})