/* ========================================
   PORTFOLIO MAIN SCRIPT
   ======================================== */

/* ========== FOOTER YEAR UPDATE ========== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ========== THEME TOGGLE FUNCTIONALITY ========== */
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ========== LIVE PROJECT SEARCH FILTER + HIGHLIGHT ========== */
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const noResults = document.getElementById("noResults");

function highlightText(text, searchValue) {
  if (!searchValue) return text;

  const escapedValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedValue})`, "gi");

  return text.replace(regex, "<mark>$1</mark>");
}

if (projectSearch) {
  projectSearch.addEventListener("input", () => {
    const searchValue = projectSearch.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const titleText = card.dataset.title;
      const descriptionText = card.dataset.description;

      const title = titleText.toLowerCase();
      const description = descriptionText.toLowerCase();

      const matches =
        title.includes(searchValue) || description.includes(searchValue);

      const titleElement = card.querySelector(".project-title");
      const descriptionElement = card.querySelector(".project-description");

      if (matches || searchValue === "") {
        card.style.display = "block";
        visibleCount++;

        titleElement.innerHTML = highlightText(titleText, searchValue);
        descriptionElement.innerHTML = highlightText(descriptionText, searchValue);
      } else {
        card.style.display = "none";

        titleElement.textContent = titleText;
        descriptionElement.textContent = descriptionText;
      }
    });

    noResults.hidden = visibleCount !== 0;
  });
}

/* ========== CONTACT FORM HANDLING ========== */
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Message sent (demo)! Thanks for reaching out.";
  form.reset();
});