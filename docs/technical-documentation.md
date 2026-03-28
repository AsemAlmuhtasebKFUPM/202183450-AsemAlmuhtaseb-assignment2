# Technical Documentation (Assignment 2)

## Overview
This project is a responsive personal portfolio website built with HTML, CSS, and JavaScript. It includes About, Projects, and Contact sections, along with interactive features required for the assignment.

## Technologies Used
- **HTML5** for page structure and form elements
- **CSS3** for layout, responsiveness, styling, and transitions
- **JavaScript** for interactivity, filtering, highlighting, and theme saving

## File Structure
- `index.html` — website structure and content
- `css/styles.css` — layout, theme, hover effects, and responsive styling
- `js/script.js` — theme toggle, search filter, highlighting, and form feedback
- `assets/images/` — project images
- `docs/ai-usage-report.md` — AI usage documentation
- `docs/technical-documentation.md` — technical summary

## Features Implemented
- **Dynamic Content:** live project search that filters cards while typing and highlights matches
- **Data Handling:** dark/light theme saved with `localStorage`
- **Animation and Transitions:** smooth scrolling and hover effects on buttons, links, and cards
- **Error Handling and User Feedback:** browser validation for required form fields and a “No projects match your search” message

## Responsive Design
The layout adapts to different screen sizes using Flexbox, Grid, and a media query. Project cards display in two columns on larger screens and one column on smaller screens.

## Testing
The website was tested by:
- resizing the browser window
- using browser device tools for mobile, tablet, and desktop
- checking theme persistence after refresh
- testing the project search and no-results message
- testing form validation and submission feedback

## Limitations
- The contact form is a demo and does not send real emails
- Project cards are sample items and can be replaced with real projects later