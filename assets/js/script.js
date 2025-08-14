// ============================================================================
// Exotic Nija Meals — Script (Expanded & Commented)
// - Theme toggle with persistence
// - Mobile navigation (burger) toggle
// - Back-to-top button
// ============================================================================

// ---------------------------
// Theme toggle
// ---------------------------
const themeBtn = document.getElementById("themeToggle");

// Prefer saved theme; otherwise, prefer OS setting
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Apply on load
document.documentElement.dataset.theme = savedTheme;

if (themeBtn) {
  themeBtn.setAttribute("aria-pressed", savedTheme === "dark");

  themeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    const next = isDark ? "light" : "dark";

    // Apply and persist
    document.documentElement.dataset.theme = next;
    themeBtn.setAttribute("aria-pressed", String(next === "dark"));
    localStorage.setItem("theme", next);
  });
}

// ---------------------------
// Mobile nav (burger menu)
// ---------------------------
const navBtn = document.querySelector(".nav-toggle");
const nav    = document.getElementById("site-nav");

if (navBtn && nav) {
  navBtn.addEventListener("click", () => {
    const open = navBtn.getAttribute("aria-expanded") === "true";

    // Update button state for screen readers
    navBtn.setAttribute("aria-expanded", String(!open));

    // Toggle the data attribute that drives CSS transitions
    nav.dataset.state = open ? "closed" : "open";

    // Lock body scroll when the menu is open
    document.body.style.overflow = open ? "" : "hidden";
  });
}

// ---------------------------
// Back-to-top button
// ---------------------------
const toTop  = document.getElementById("toTop");
const showAt = 600; // px scrolled before showing button

if (toTop) {
  window.addEventListener("scroll", () => {
    const visible = window.scrollY > showAt;
    toTop.dataset.visible = visible ? "true" : "false";
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------------------------
// Footer year
// ---------------------------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
