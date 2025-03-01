const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
};


const images = ["Donuts_1.png", "Donuts_7.png", "Spectral-Flow.png", "Burning Donuts.png", "Cellular_Automata.png"];
let index= 0;
const body = document.body;

function changeBackground() {    //changes background overtime
    body.style.backgroundImage = `url('${images[index]}')`;
    body.style.transition = "background-image 1.5s ease-in-out";
    index = (index + 1) % images.length;
}

if (document.body.classList.contains("home-page")) { //background change settings
    body.style.backgroundImage = `url('${images[0]}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
setInterval(changeBackground, 5000);
} else {
    body.style.backgroundImage = "none";
} 