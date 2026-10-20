const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('main section[id]');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('active');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.querySelector('i').className = isOpen ? 'bx bx-x' : 'bx bx-menu';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.querySelector('i').className = 'bx bx-menu';
  });
});

const updateActiveLink = () => {
  const currentSection = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 180);
  navLinks.forEach((link) => {
    const isCurrent = currentSection && link.getAttribute('href') === `#${currentSection.id}`;
    link.classList.toggle('active', Boolean(isCurrent));
  });
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
