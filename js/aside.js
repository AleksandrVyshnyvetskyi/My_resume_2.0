const nav = document.querySelector(".nav");
const navList = document.querySelectorAll("li");
const totalNav = navList.length;
const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;

for (let i = 0; i < totalNav; i++) {
    const link = navList[i].querySelector("a");
    link.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNav; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSections[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNav; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (
            target ===
            navList[i].querySelector("a").getAttribute("href").split("#")[1]
        ) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.toggle("open");
    }
}

document.addEventListener("click", (event) => {
    if (aside.classList.contains("open")) {
        if (!aside.contains(event.target)) {
            aside.classList.remove("open");
            navTogglerBtn.classList.remove("open");
        }
    }
});

const closeAsideOnEsc = document.addEventListener("keydown", (event) => {
    if (aside.classList.contains("open"))
        if (event.code === "Escape") {
            aside.classList.remove("open");
            for (let i = 0; i < totalSections; i++) {
                allSections[i].classList.toggle("open");
            }
        }
});

const closeNavTogglerBtnOnEsc = document.addEventListener(
    "keydown",
    (event) => {
        if (event.code === "Escape") {
            navTogglerBtn.classList.remove("open");
        }
    }
);
