// Scroll Reveal dengan Staggered Effect + Shadow
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('show'); // tambahkan shadow
      }, index * 150); 
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(30px)';
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// Hero Button Scroll
const learnBtn = document.getElementById('learnBtn');
learnBtn.addEventListener('click', () => {
  document.getElementById('apaLinux').scrollIntoView({ behavior: 'smooth' });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
