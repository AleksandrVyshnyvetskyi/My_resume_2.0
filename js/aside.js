const nav = document.querySelector(".nav");
const navList = document.querySelectorAll("li");
const totalNav = navList.length;
const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;

for (let i = 0; i < totalNav; i++) {
  const link = navList[i].querySelector("a");
  link.addEventListener("click", function () {
    for (let k = 0; k < totalSections; k++) {
      allSections[k].classList.remove("back-section");
    }
    for (let b = 0; b < totalNav; b++) {
      if (navList[b].querySelector("a").classList.contains("active")) {
        allSections[b].classList.add("back-section");
      }
      navList[b].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
  setTimeout(() => {
    if(aside.classList.contains("open")){
      aside.classList.remove("open");
      navTogglerBtn.classList.remove("open");;
    };
}, 5000);
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.toggle("open");
  }
}

const closeAsideOnEsc = document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
         aside.classList.remove("open");
         navTogglerBtn.classList.remove("open");
    }
});
