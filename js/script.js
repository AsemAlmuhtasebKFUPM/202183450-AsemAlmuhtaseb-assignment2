/* ========================================
   PORTFOLIO MAIN SCRIPT
   ======================================== */

/* ========== FOOTER YEAR UPDATE ========== */
// Automatically update the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

/* ========== THEME TOGGLE FUNCTIONALITY ========== */
const themeBtn = document.getElementById("themeBtn");

// Load saved theme preference from localStorage on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
}

// Toggle theme and save preference to localStorage
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ========== CONTACT FORM HANDLING ========== */
// Note: This is a demo form. No actual email backend is implemented.
// In a production environment, connect this to a backend service.

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Display success message to user
  status.textContent = "Message sent (demo)! Thanks for reaching out.";
  
  // Clear form fields after submission
  form.reset();
  
  // Optional: Clear success message after 5 seconds
  // setTimeout(() => { status.textContent = ""; }, 5000);
});

