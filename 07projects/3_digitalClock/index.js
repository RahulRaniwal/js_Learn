function display(){
    const clock = document.getElementById('clock');
    let date = new Date();
    let time  = date.toLocaleTimeString();
    clock.innerHTML = time
}
setInterval(display , 1000) 