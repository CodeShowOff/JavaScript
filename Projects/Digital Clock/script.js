const clock = document.getElementById('clock')
// console.log(clock);

setInterval(function(){
    let date = new Date().toLocaleTimeString();
    clock.innerHTML = `${date}`
}, 1000)