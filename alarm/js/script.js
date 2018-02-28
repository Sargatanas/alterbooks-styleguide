document.body.onload = time();

function time() {
    setTime();
    setTimeout(function () {
        setInterval(setTime, 100);
    }, new Date().getMilliseconds());
}

function setTime() {
    document.getElementById('second').style.transform = 'rotate(' + String(6 * getSeconds()) + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + String(6 * getMinutes()) + 'deg)';
    document.getElementById('hour').style.transform = 'rotate(' + String(30 * getHours()) + 'deg)';
}

function timeDifference() {
    let time = new Date();
    let last_time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 0, 0, 0, 0);
    return time.getTime() - last_time.getTime();
}

function getSeconds() {
   return new Date().getSeconds();
}

function getMinutes() {
    let time = new Date();
    let last_time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), 0, 0, 0);
    return (time.getTime() - last_time.getTime()) / 1000 / 60;
}

function getHours() {
    let time = new Date();
    let last_time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 0, 0, 0, 0);
    return (time.getTime() - last_time.getTime()) / 1000 / 60 / 60;
}