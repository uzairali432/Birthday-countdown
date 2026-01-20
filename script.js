let countDateTime = new Date("August 21, 2026 12:00:00").getTime();
let x = setInterval(function (){
    let now = new Date().getTime();
    let difference = countDateTime - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
    days + " Days | " + hours + "h :" + minutes + "m :" + seconds + "s";
})