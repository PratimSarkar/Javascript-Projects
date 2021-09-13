const matchday = "8 Oct 2021 17:00:00";


const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');
let curImg = 1;
let bgImgs = document.querySelectorAll(".bg-imgs img");
    setInterval(() => {
        /* if first image (curImg = 0), then unload last image */
        let prevImg = curImg? curImg-1: bgImgs.length-1;

        bgImgs[prevImg].style.opacity = 0;
        bgImgs[curImg].style.opacity = 100;
        curImg++;

        /* if last image, go back to first image */
        if (curImg >= bgImgs.length) {
            curImg = 0;
        }
    / *every 10 seconds */
}, 5000);
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