async function loadIncludes() {
  const headerTarget = document.getElementById('site-header');
  const footerTarget = document.getElementById('site-footer');

  try {
    if (headerTarget) {
      const headerResponse = await fetch('include/header.html');
      headerTarget.innerHTML = await headerResponse.text();
    }

    if (footerTarget) {
      const footerResponse = await fetch('include/footer.html');
      footerTarget.innerHTML = await footerResponse.text();
    }

    setActiveNav();
    initMobileMenu();
    initThemeToggle();
  } catch (error) {
    console.error('Error loading includes:', error);
  }
}

function setActiveNav() {
  const currentPage = document.body.getAttribute('data-page');
  const navLinks = document.querySelectorAll('.site-nav a[data-page]');

  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !menuToggle.contains(e.target)) {
        siteNav.classList.remove('show');
      }
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => siteNav.classList.remove('show'));
    });
  }
}

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.querySelector('.theme-icon');
  const savedTheme = localStorage.getItem('theme');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeIcon) themeIcon.textContent = '☾';
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      document.body.classList.remove('dark-mode');
      if (themeIcon) themeIcon.textContent = '☀';
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  };

  applyTheme(savedTheme || 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    });
  }
}

document.addEventListener('DOMContentLoaded', loadIncludes);


document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false
    });

    lenis.on("scroll", () => {
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.update();
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  const revealItems = document.querySelectorAll(
    ".hero-content, .hero-card, .section-head, .card, .project-card, .step-card, .service-block, .founder-card, .contact-form, .contact-info, .cta-box"
  );

  revealItems.forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: i * 0.03,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  document.querySelectorAll(".card, .project-card, .step-card, .service-block").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -8, duration: 0.25, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.25, ease: "power2.out" });
    });
  });
});

function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  document.body.classList.add('motion-ready');

  gsap.from('.hero-content > *', {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12
  });

  gsap.from('.hero-panel, .trust-item', {
    y: 55,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.2
  });

  gsap.utils.toArray('.section').forEach((section) => {
    const heading = section.querySelector('.section-head, .inner-hero .container, .cta-box');
    const cards = section.querySelectorAll('.card, .project-card, .step-card, .service-block, .founder-card, .contact-point, .contact-form');

    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    if (cards.length) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%'
        },
        y: 60,
        opacity: 0,
        rotateX: 8,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  });

  gsap.to('.shape-orb-one', {
    yPercent: -18,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.4
    }
  });

  gsap.to('.shape-orb-two', {
    yPercent: 16,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.8
    }
  });

  initMagneticButtons();
  initInteractiveCards();
}

function initMagneticButtons() {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.12,
        y: y * 0.12,
        duration: 0.25,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.35,
        ease: 'power3.out'
      });
    });
  });
}

function initInteractiveCards() {
  document.querySelectorAll('.card, .project-card, .service-block, .founder-card, .step-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

      gsap.to(card, {
        rotateY: x,
        rotateX: -y,
        transformPerspective: 900,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.45,
        ease: 'power3.out'
      });
    });
  });
}
