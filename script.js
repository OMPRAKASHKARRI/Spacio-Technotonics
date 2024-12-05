function toggleMenu() {
  const navMenu = document.querySelector(".nav ul");
  navMenu.classList.toggle("show");
}

function bookAppointment() {
  alert("Redirecting to the appointment page...");
}
let currentSlide = 0;
const slides = [
  "Exceptional facades delivered",
  "Innovative digital solutions",
  "Precision from design to delivery"
];

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  document.querySelector(".hero-carousel h1").textContent = slides[currentSlide];
}

// Attach event listeners for arrows
document.querySelector(".left-arrow").addEventListener("click", () => changeSlide(-1));
document.querySelector(".right-arrow").addEventListener("click", () => changeSlide(1));
document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.location-marker');
  
  markers.forEach(marker => {
      marker.addEventListener('mouseenter', () => {
          marker.style.transform = 'scale(1.5)';
      });
      
      marker.addEventListener('mouseleave', () => {
          marker.style.transform = 'scale(1)';
      });
  });
});
// JavaScript for gallery interaction (optional)
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.02)';
    item.style.transition = 'transform 0.3s ease-in-out';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});
const cardsContainer = document.querySelector('.cards-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Scroll left on clicking the previous button
prevBtn.addEventListener('click', () => {
  cardsContainer.scrollBy({ left: -320, behavior: 'smooth' });
});

// Scroll right on clicking the next button
nextBtn.addEventListener('click', () => {
  cardsContainer.scrollBy({ left: 320, behavior: 'smooth' });
});
