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

    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !menuToggle.contains(e.target)) {
        siteNav.classList.remove('show');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', loadIncludes);