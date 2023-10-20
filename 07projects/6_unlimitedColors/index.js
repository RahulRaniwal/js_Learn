// random colo generator

const randomColor = function(){
    let letter = '0123456789ABCDEF'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    function changeBg(){
        document.body.style.backgroundColor = randomColor()
    }
    if(!intervalId){
        intervalId = setInterval(changeBg , 1000)
    }
}


const stopChangingColor = function(){
    clearInterval(intervalId);
    
}
// add random color genrator functionality the start button
document.querySelector('#start').addEventListener('click' , startChangingColor)
// add stop changing color functionality to the stop button
document.querySelector('#stop').addEventListener('click', stopChangingColor)