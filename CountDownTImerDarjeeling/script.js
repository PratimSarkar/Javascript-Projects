const matchday = "8 Oct 2021 17:00:00";


const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');
function countdown(){
    const currentdate = new Date();
    const matchdate= new Date(matchday);

    const totalseconds = (matchdate - currentdate)/1000;
    const days =Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds%60);

    daysel.innerHTML= days;
    hoursel.innerHTML=formatTime(hours);
    minsel.innerHTML=formatTime(minutes);
    secondsel.innerHTML=formatTime(seconds);
}
function formatTime(time){
    return time <10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);