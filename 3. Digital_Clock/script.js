let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let day = document.querySelector("#day");

setInterval(() => {

    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10  ? "0" : "") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes() < 10  ? "0" : "") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds() < 10  ? "0" : "") + currentTime.getSeconds();
    date.innerHTML = currentTime.getDate();
    month.innerHTML = currentTime.getMonth();
    year.innerHTML = currentTime.getFullYear();
    day.innerHTML = currentTime.toLocaleDateString("en-US" , {weekday : 'long'});

} , 1000);
