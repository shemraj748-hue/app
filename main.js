// Dark mode persistence for all pages
const body = document.body;
function applyTheme(dark) {
  if (dark) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

const toggles = document.querySelectorAll('input[type="checkbox"][id^="darkModeToggle"]');
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  applyTheme(true);
  toggles.forEach(t => t.checked = true);
} else {
  applyTheme(false);
}

toggles.forEach(toggle => {
  toggle.addEventListener("change", () => {
    applyTheme(toggle.checked);
    // sync all other toggles on the page (if any)
    toggles.forEach(t => t.checked = toggle.checked);
  });
});

// Welcome-box fallback fade-in trigger
window.addEventListener("load", () => {
  const welcome = document.querySelector(".welcome-box");
  if (welcome) {
    welcome.classList.add("fade-in");
  }
});