// script.js
let slideIndex = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("current-slide");
    }
    slides[n].classList.add("current-slide");
}

function nextSlide() {
    slideIndex++;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Set interval to change slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial call to show first slide
showSlide(slideIndex);

function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = "";
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById('greeting-text').textContent = greeting;
    document.getElementById('current-date').textContent = now.toDateString();
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to updateDateTime to display initial values
updateDateTime();
