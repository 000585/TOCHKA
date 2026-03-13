console.log("[DEBUG] main.js loaded");

// ===== ЛОГИКА ТЕМЫ =====
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  let currentTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", currentTheme);
  
  if (themeBtn) {
    // Unicode escape для эмодзи
    themeBtn.innerHTML = currentTheme === "dark" ? "&#x2600;" : "&#x1F319;"; // ☀️ : 🌙
    themeBtn.title = currentTheme === "dark" ? "Переключить на светлую тему" : "Переключить на темную тему";
    
    themeBtn.addEventListener("click", function() {
      let theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      this.innerHTML = theme === "dark" ? "&#x2600;" : "&#x1F319;";
      this.title = theme === "dark" ? "Переключить на светлую тему" : "Переключить на темную тему";
    });
  }
}

// ===== ЛОГИКА МОБИЛЬНОГО МЕНЮ =====
function initMobileMenu() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (!mobileBtn || !navLinks) {
    console.error("[DEBUG] Menu elements not found");
    return;
  }
  console.log("[DEBUG] Initializing mobile menu");
  mobileBtn.innerHTML = "☰";
  mobileBtn.title = "Меню";
  mobileBtn.addEventListener("click", function(e) {
    e.preventDefault();
    navLinks.classList.toggle("active");
    this.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileBtn.innerHTML = "☰";
    });
  });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initTheme();
    initMobileMenu();
  });
} else {
  initTheme();
  initMobileMenu();
}

// ===== SERVICE WORKER =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

