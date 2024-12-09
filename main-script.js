//loading screen js
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    loadingScreen.classList.add("hide");

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 500);
});

//navbar js
const profileIcon = document.getElementById('menu');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeMenu = document.getElementById('close-menu');

profileIcon.addEventListener('click', () => {
fullscreenMenu.classList.remove('hidden');
document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
fullscreenMenu.classList.add('hidden');
document.body.classList.remove('no-scroll');
});

fullscreenMenu.addEventListener('click', (event) => {
if (event.target === fullscreenMenu) {
    fullscreenMenu.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}
});

//slider in about
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slides[slideIndex - 1].classList.add("show");
}

setInterval(() => {
    plusDivs(1);
}, 4000);  

//background
if (window.innerWidth <= 900) {
    const container = document.querySelector('.about-main-container');

    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        container.style.backgroundPosition = `center ${offset * 0.5}px`;  
    });
}

//price selectors for services
function updatePrice1(price1) {
    const priceText = document.getElementById('price-text-dog');
    priceText.textContent = `₱${price1}`;
}

function updatePrice2(price2) {
    const priceText = document.getElementById('price-text-cat');
    priceText.textContent = `₱${price2}`;
}

function updatePrice3(price3) {
    const priceText = document.getElementById('price-text-dog1');
    priceText.textContent = `₱${price3}`;
}

function updatePrice4(price4) {
    const priceText = document.getElementById('price-text-cat1');
    priceText.textContent = `₱${price4}`;
}

function updatePrice5(price5) {
    const priceText = document.getElementById('price-text-indiv');
    priceText.textContent = `₱${price5}`;
}

function updatePrice6(price6) {
    const priceText = document.getElementById('price-text-daycare');
    priceText.textContent = `₱${price6}`;
}

//services appointment button reverse sticky
window.addEventListener('scroll', function() {
    var appointmentContainer = document.querySelector('.appointment-main-container');
    var rect = appointmentContainer.getBoundingClientRect();
    
    if (rect.bottom <= window.innerHeight) {
        appointmentContainer.classList.add('sticky');
    } else {
        appointmentContainer.classList.remove('sticky');
    }
});
