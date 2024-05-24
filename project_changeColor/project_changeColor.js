console.log("hello")
const randomColor = function(){
    color='#';
    hexa="0123456789ABCDEF"
    for(let i=0;i<6;i++){
        color+=hexa[Math.floor(Math.random()*16)];
    }
    document.querySelector('#colors').innerHTML=color

    return color;
}

const changebgcolor = function(){
    document.body.style.backgroundColor=randomColor();
}
let ref;
const startChangingcolor = function(){

 ref=   setInterval(changebgcolor,1000);
}


// setInterval(changebgcolor,1000);

document.querySelector("#start").addEventListener("click",startChangingcolor)
document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(ref)
    ref=null;
})