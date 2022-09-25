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
  // styleSwitcher.classList.remove("open");
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

// ========================= Theme colors =========================

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// // ========================= Theme Light and Dark mode =========================

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// ======================================================================================

// const colors = ["#fb839e", "#ec9412", "#1fc586", "#2eb1ed", "#cc3a3b"];

// const className = "color";

// сгенерить элементы для каждого из цветов
// const colorSelect = document.querySelector(".colors");
// colorSelect.innerHTML = colors
//   .map(
//     (color, i) =>
//       `<span data-index="${i}" class="${className}" style="background: ${color}"></span>`
//   )
//   .join("\n");

// для новых посетителей
// const defaultSettings = {
//   index: 3,
//   isDark: false,
// };

// применить все настройки
// const applySettings = (settings) => {
//   const { index, isDark } = settings;

// день-ночь
// document
//   .querySelector(":root")
//   .style.setProperty("--skin-color", colors[index]);

// выбранный цвет
//   const i = document.querySelector(".day-night i");
//   i.classList[isDark ? "remove" : "add"]("fa-sun");
//   i.classList[isDark ? "add" : "remove"]("fa-moon");
// };

// const LS_KEY = "myColorSettings";

// обработчик доступа к настройкам
// const storeAndApply = {
//   get(obj, prop) {
//     return obj[prop];
//   },
//   set(obj, prop, value) {
//     obj[prop] = value;
//     localStorage.setItem(LS_KEY, JSON.stringify(obj));
//     applySettings(obj);
//     return true;
//   },
// };

// const savedSettings = JSON.parse(localStorage.getItem(LS_KEY));
// const settings = new Proxy(savedSettings || defaultSettings, storeAndApply);

// при загрузке
// window.addEventListener("DOMContentLoaded", () => applySettings(settings));

// выбор цвета
// colorSelect.addEventListener("click", (event) => {
//   const { target } = event;
//   if (!target.classList.contains(className)) {
//     return;
//   }

//   const { index } = target.dataset;
//   settings.index = Number(index);
// });

// light or dark
// document.querySelector(".day-night").addEventListener("click", () => {
//   settings.isDark = !settings.isDark;
// });
