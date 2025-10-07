// Fade & slide animations on scroll
const fadeElements = document.querySelectorAll('.fade-in, .slide-up');

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;
  
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

