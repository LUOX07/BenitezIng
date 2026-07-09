const form = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formResult.textContent = 'Por favor completa todos los campos.';
      formResult.style.color = '#dc2626';
      return;
    }

    formResult.textContent = 'Gracias por tu mensaje. Te responderemos pronto.';
    formResult.style.color = '#165e32';
    form.reset();
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}
