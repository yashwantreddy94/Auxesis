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
