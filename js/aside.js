const elements = {
    nav: document.querySelector(".nav"),
    navList: document.querySelectorAll("li"),
    allSections: document.querySelectorAll(".section"),
    aside: document.querySelector(".aside"),
    navTogglerBtn: document.querySelector(".nav-toggler"),
    hireMe: document.querySelector(".hire-me"),
};

elements.nav.addEventListener("click", (event) => {
    const targetLink = event.target.closest("a");
    if (targetLink) {
        removeBackSection();
        for (let j = 0; j < elements.navList.length; j++) {
            if (
                elements.navList[j]
                    .querySelector("a")
                    .classList.contains("active")
            ) {
                addBackSection(j);
            }
            elements.navList[j].querySelector("a").classList.remove("active");
        }
        targetLink.classList.add("active");
        showSection(targetLink);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    }
});

function removeBackSection() {
    for (let i = 0; i < elements.allSections.length; i++) {
        elements.allSections[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    elements.allSections[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < elements.allSections.length; i++) {
        elements.allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

elements.navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
    elements.aside.classList.toggle("open");
    elements.navTogglerBtn.classList.toggle("open");
    elements.allSections.forEach((section) => section.classList.toggle("open"));
}

document.addEventListener("click", (event) => {
    if (elements.aside.classList.contains("open")) {
        if (!elements.aside.contains(event.target)) {
            closeAside();
        }
    }
});

const closeAsideOnEsc = document.addEventListener("keydown", (event) => {
    if (elements.aside.classList.contains("open") && event.code === "Escape") {
        closeAside();
    }
});

const closeNavTogglerBtnOnEsc = document.addEventListener(
    "keydown",
    (event) => {
        if (event.code === "Escape") {
            elements.navTogglerBtn.classList.remove("open");
        }
    }
);

function closeAside() {
    elements.aside.classList.remove("open");
    elements.navTogglerBtn.classList.remove("open");
    elements.allSections.forEach((section) => section.classList.remove("open"));
}
