// ========================= Toggle style switcher =========================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
  setTimeout(() => {
    styleSwitcher.classList.remove("open");
  }, 5000);
});

const closeSwitcherOnClick = document.addEventListener("click", (event) => {
  const container = document.querySelector("div");
  if (event.target === container) {
    styleSwitcher.classList.remove("open");
  }
});

const closeSwitcherOnEsc = document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    styleSwitcher.classList.remove("open");
  }
});

const closeSwitcherOnScroll = document.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

// ========================= Theme colors =========================

const color = localStorage.getItem("skin-color");
if (localStorage.getItem("skin-color") !== null) {
  document.documentElement.style.setProperty("--color-skin", color);
  toggleMobilePhoto();
}

function setColor(color) {
  document.documentElement.style.setProperty("--color-skin", color);
  localStorage.setItem("skin-color", color);
  toggleMobilePhoto();
}

function toggleMobilePhoto() {
  const myPhoto = document.querySelector(".photo");
  if (localStorage.getItem("skin-color") === "#fa5b0f") {
    myPhoto.setAttribute("src", "./css/img/my-photo/my-photo.webp");
  }
  if (localStorage.getItem("skin-color") === "#ec1839") {
    myPhoto.setAttribute("src", "./css/img/my-photo/my-photo-red.webp");
  }
  if (localStorage.getItem("skin-color") === "#37b182") {
    myPhoto.setAttribute("src", "./css/img/my-photo/my-photo-green.webp");
  }
  if (localStorage.getItem("skin-color") === "#1854b4") {
    myPhoto.setAttribute("src", "./css/img/my-photo/my-photo-blue.webp");
  }
  if (localStorage.getItem("skin-color") === "#9718ff") {
    myPhoto.setAttribute("src", "./css/img/my-photo/my-photo-violet.webp");
  }
}

// ========================= Theme Light and Dark mode =========================

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
