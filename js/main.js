const year = document.getElementById('currentYear');
if (year) year.textContent = String(new Date().getFullYear());

const navToggle = document.querySelector('[data-mobile-toggle]');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
  });

  navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('is-open'));
  });
}

const faqTriggers = document.querySelectorAll('.faq-item__trigger');
faqTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const currentItem = trigger.closest('.faq-item');
    const currentContent = currentItem?.querySelector('.faq-item__content');
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    faqTriggers.forEach((otherTrigger) => {
      otherTrigger.setAttribute('aria-expanded', 'false');
      const otherItem = otherTrigger.closest('.faq-item');
      const otherContent = otherItem?.querySelector('.faq-item__content');
      if (otherContent) otherContent.style.maxHeight = '0px';
    });

    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      if (currentContent) currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    }
  });
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

const updateActiveNav = () => {
  let activeId = '';
  const offset = 120;

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    if (window.scrollY >= top) {
      activeId = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', href === activeId);
  });
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
