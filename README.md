# Westervale Counsel LLP website

Static, accessible (built to WCAG 2.1 AA) law firm website. No build step or dependencies.

## Files
index.html, about.html, services.html, team.html, insight.html, contact.html, styles.css, script.js, CNAME

## Deploy with GitHub Pages
1. Create a repository and upload all files to the root.
2. Go to Settings > Pages, choose "Deploy from a branch", select `main` and `/ (root)`.
3. The `CNAME` file sets westervalecounsel.com. Point your domain's DNS to GitHub Pages and enable "Enforce HTTPS".

## Before launch
- Replace placeholder content (attorney names, address, phone, testimonials, articles).
- The contact form validates but does not send. Connect it to a form service (for example Formspree or Netlify Forms).
- Test with axe DevTools, WAVE, Lighthouse and a screen reader.
