# Auxesis Creative Solutions Website

A modern static website for **Auxesis Creative Solutions**, showcasing services, featured products, portfolio work, and contact information.

## Overview

This website is built to present Auxesis Creative Solutions as a digital agency offering:

- Web development
- Custom web applications
- Digital products
- Growth and marketing support
- Featured SaaS products

It includes a main company website, a featured products page, and dedicated product pages for:

- QR Menu (as a Service)
- News Portal CMS (Software as a Service)

## Project Structure

```text
auxesis/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   ├── js/
│   │   └── script.js
│   └── featured-assets/
├── featured-product/
│   ├── qr-menu.html
│   └── news-web.html
├── include/
│   ├── header.html
│   └── footer.html
├── portfolio/
├── sample-projects/
├── about.html
├── contact.html
├── featured-product.html
├── index.html
├── services.html
├── thanks.html
├── work.html
├── CNAME
├── robots.txt
├── site.webmanifest
└── sitemap.xml
```

## Main Pages

- `index.html` — Homepage.
- `services.html` — Services overview.
- `work.html` — Sample projects and portfolio.
- `about.html` — About the company.
- `contact.html` — Contact page.
- `featured-product.html` — Featured products landing page.
- `featured-product/qr-menu.html` — QR Menu product page.
- `featured-product/news-web.html` — News Portal CMS product page.

## Features

- Responsive design for desktop, tablet, and mobile.
- Shared header and footer includes.
- Dark mode / light mode support.
- Featured product showcase sections.
- SEO-friendly structure.
- Sitemap and web manifest included.

## Assets

Important asset folders:

- `assets/css/style.css` — Main stylesheet.
- `assets/js/script.js` — Main JavaScript file.
- `assets/images/` — Logos, icons, and site images.
- `assets/featured-assets/` — Product thumbnails, videos, and related media.

## Development Notes

- The site uses relative paths for pages inside `featured-product/`.
- `include/header.html` and `include/footer.html` should use paths that match the page location.
- `site.webmanifest` supports PWA-style installation.
- `sitemap.xml` should be updated whenever pages are added or removed.

## Deployment

This site is ready for static hosting such as:

- GitHub Pages
- Netlify
- Vercel
- Any standard web host

If using a custom domain, ensure `CNAME` is configured properly.

## Updating Content

When adding a new page or project:

1. Create the HTML file.
2. Update navigation links if needed.
3. Add the page to `sitemap.xml`.
4. Add a shortcut or page entry to `site.webmanifest` if relevant.
5. Add images or thumbnails to the correct asset folder.

## Contact

Auxesis Creative Solutions

- Website: https://auxesiscreative.com
- Email: info.auxesis.creative@gmail.com
- Phone: +91 6026810633

## License

All rights reserved by Auxesis Creative Solutions unless otherwise noted.
