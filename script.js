// Smooth reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Run once on page load
window.addEventListener("load", revealOnScroll);
// Run on scroll
window.addEventListener("scroll", revealOnScroll);