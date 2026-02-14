# Technical Documentation (Assignment 1)

## Overview
This project is a simple, responsive personal portfolio website built with HTML, CSS, and JavaScript.  
It includes three required sections (About, Projects, Contact) and basic interactivity (theme toggle + contact form feedback).

## Technologies Used
- **HTML5**: semantic structure (header, main, section, footer), accessibility attributes
- **CSS3**: Flexbox/Grid layout, responsive design, theme variables
- **JavaScript**: DOM manipulation, localStorage, form interaction

## File Structure
- `index.html`  
  Contains the page structure and content:
  - Header navigation links (About, Projects, Contact)
  - Hero section (intro + buttons)
  - About section (2–3 sentence intro + tagline)
  - Projects section (2 project cards with images and descriptions)
  - Contact section (Name/Email/Message form)
  - Footer (copyright + back-to-top link)

- `css/styles.css`  
  Contains styling and responsive layout:
  - CSS variables for theme colors
  - Flexbox for header layout
  - CSS Grid for the projects layout
  - Media query to stack project cards on smaller screens
  - Card styles, spacing, typography, and form styling

- `js/script.js`  
  Adds interactivity:
  - Updates footer year automatically
  - Theme toggle (dark/light) and saves preference using `localStorage`
  - Contact form demo submission (shows success message, no backend)

- `assets/images/`  
  Stores project images used in the Projects section.

- `docs/ai-usage-report.md`  
  Explains how AI tools (ChatGPT + GitHub Copilot) were used during development.

## Features Implemented
### Responsive Design
- Desktop: projects displayed in two columns using CSS Grid.
- Mobile/tablet: projects stack into one column using a media query.

### Interactivity
- **Theme toggle:** user can switch between dark/light mode, preference is saved in localStorage.
- **Form interaction:** when the contact form is submitted, a confirmation message appears (demo only).

## Testing
I tested the website by:
- Resizing the browser window to check layout changes.
- Using Chrome/Edge DevTools device toolbar to test common sizes:
  - 375px (mobile)
  - 768px (tablet)
  - 1200px+ (desktop)
- Clicking navigation links to confirm correct scrolling to sections.
- Verifying theme toggle works and persists after refresh.
- Submitting the contact form to confirm the demo success message appears.

## Known Limitations / Future Improvements
- Contact form does not send real emails (no backend).
- Projects are placeholder concepts and can be replaced with real projects and links.
- Could add more sections (Skills, Education) and improve animations later.
