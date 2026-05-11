let clock = document.querySelector(".clock");
let secondsBar = document.querySelector(".secondsBar");
let hours = document.querySelector(".hand.hours");
let minutes = document.querySelector(".hand.minutes");
let seconds = document.querySelector(".hand.seconds");
let themeBtn = document.querySelector(".toggler");

const themes = ["theme-wood", "theme-neon", "theme-galaxy", "theme-pastel", "theme-mono" , "theme-glass"];
const labels = {
    "theme-wood": "Wood Theme",
    "theme-neon": "Neon Theme",
    "theme-galaxy": "Galaxy Theme",
    "theme-pastel": "Pastel Blossom",
    "theme-mono": "Monochrome",
    "theme-glass": "Glass Theme"
};


const numbers = [];
const bars = [];

for (let i = 1 ; i <= 12 ; i++){
    numbers.push(
        `<span style = "--i:${i}"><p>${i}</p></span>`
    );
}

clock.insertAdjacentHTML("afterbegin" , numbers.join(""));

for(let i = 1 ; i <= 60 ; i++){
    bars.push(
        `<span style = "--i:${i}"><p></p></span>`
    );
}

secondsBar.insertAdjacentHTML("afterbegin" , bars.join(""));

function displayTime () {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30*h + m/2;
    let mRotation = 6*m;
    let sRotation = 6*s;

    hours.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}

setInterval (displayTime , 1000);

let currentThemeIndex = themes.indexOf(document.body.classList[0]);

themeBtn.addEventListener('click' , () => {
    document.body.classList.remove(themes[currentThemeIndex]);

    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    const newTheme = themes[currentThemeIndex];
    document.body.classList.add(newTheme);

    themeBtn.innerHTML = `<h3>${labels[newTheme]}</h3>`
})