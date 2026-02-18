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

const initCalmMotion = () => {
  if (!window.gsap) return;

  const { gsap } = window;
  const hasScrollTrigger = !!window.ScrollTrigger;
  if (hasScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  const baseEase = 'power2.out';

  gsap.from('[data-animate="title"]', {
    y: 16,
    opacity: 0,
    duration: 0.75,
    ease: baseEase,
    stagger: 0.08,
    scrollTrigger: hasScrollTrigger
      ? {
          trigger: '[data-animate="title"]',
          start: 'top 88%',
          once: true,
        }
      : undefined,
  });

  gsap.from('[data-animate="fade"]', {
    y: 12,
    opacity: 0,
    duration: 0.65,
    ease: baseEase,
    stagger: 0.07,
    scrollTrigger: hasScrollTrigger
      ? {
          trigger: '[data-animate="fade"]',
          start: 'top 90%',
          once: true,
        }
      : undefined,
  });

  gsap.utils.toArray('[data-animate="card"]').forEach((card, index) => {
    gsap.from(card, {
      y: 22,
      opacity: 0,
      duration: 0.8,
      delay: (index % 3) * 0.05,
      ease: baseEase,
      scrollTrigger: hasScrollTrigger
        ? {
            trigger: card,
            start: 'top 90%',
            once: true,
          }
        : undefined,
    });
  });

  gsap.utils.toArray('.section-title--animated').forEach((title) => {
    gsap.to(title, {
      '--underline-progress': 1,
      duration: 0.8,
      ease: 'power1.out',
      onStart: () => {
        title.classList.add('is-underlining');
      },
      scrollTrigger: hasScrollTrigger
        ? {
            trigger: title,
            start: 'top 88%',
            once: true,
          }
        : undefined,
    });
  });

  gsap.utils.toArray('[data-parallax]').forEach((shape, index) => {
    gsap.to(shape, {
      yPercent: index % 2 === 0 ? 8 : -8,
      xPercent: index % 2 === 0 ? -3 : 3,
      ease: 'none',
      scrollTrigger: hasScrollTrigger
        ? {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.4,
          }
        : undefined,
    });

    gsap.to(shape, {
      scale: 1.03,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
};

initCalmMotion();
