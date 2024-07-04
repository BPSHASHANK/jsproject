document.querySelector('#clock')
setInterval(function(){
    let date=new Date
    clock.innerHTML =(date.toLocaleString());
},2000);
