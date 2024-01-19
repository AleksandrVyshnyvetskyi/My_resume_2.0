const enBtn = document.querySelector(".en");
const uaBtn = document.querySelector(".ua");

enBtn.addEventListener("click", function () {
    changeLanguage("en");
});

uaBtn.addEventListener("click", function () {
    changeLanguage("ua");
});

const home = document.querySelector(".aside-home-link");
const about = document.querySelector(".aside-about-link");
const services = document.querySelector(".aside-services-link");
const portfolio = document.querySelector(".aside-portfolio-link");
const contact = document.querySelector(".aside-contact-link");

const hello = document.querySelector(".hello");
const homeMessage = document.querySelector(".home-message");
const homeBtn = document.getElementById("home-btn");

const aboutTitle = document.querySelector(".about-title");
const aboutText = document.querySelector(".about-text");
const birthday = document.querySelector(".birthday");
const age = document.querySelector(".age");
const phone = document.querySelector(".phone");
const city = document.querySelector(".city");
const education = document.querySelector(".education-info");
const hireMe = document.querySelector(".hire-me");
const educationTitle = document.getElementById("education-title");
const facultet = document.querySelector(".facultet");
const specialty = document.querySelector(".specialty");

const servecesTitle = document.querySelector(".serveces-title");
const serviceMbile = document.querySelector(".service-mobile");
const serviceFront = document.querySelector(".service-front");
const serviceDesign = document.querySelector(".service-web-design");
// const serviceStudy = document.querySelector(".service-study");

const portfolioTitle = document.querySelector(".portfolio-title");
const lastPjt = document.querySelector(".last-prj");

const secondContactTitle = document.querySelector(".contact-title");
const firstContactTitle = document.querySelector(".contact-title-1");
const thirdContactTitle = document.querySelector(".third");
const contactTel = document.querySelector(".contact-tel");
const sendMeTitle = document.querySelector(".send-me-title");
const contactBtn = document.querySelector(".btn-contact");

function changeLanguage(language) {
    const languageData = {
        en: {
            home: "<i class='fa fa-home'></i>Home",
            about: "<i class='fa fa-user'></i>About",
            services: "<i class='fa fa-list'></i>Service",
            portfolio: "<i class='fa fa-briefcase'></i>Portfolio",
            contact: "<i class='fa fa-comments'></i>Contact",
            hello: 'Hello, my name is <a class="name" target="_blank" href="https://www.instagram.com/v.alexander21/">Oleksandr Vyshnyvetskyi</a>',
            homeMessage:
                "« Programming is not about what you know, it's about what you can figure out. » - Chris Pine",
            homeBtn: "Download CV",
            aboutTitle: "About <span>Me</span>",
            aboutText:
                "<h3> I'm <span>Oleksander Vishnevetskyi</span> and i'm a <span>Front-End developer</span> </h3> <p> Hello, I am a novice Front-End developer. I have experience in web development, adaptive and cross-platform projects. I have good knowledge of HTML5, CSS3, JS, as well as the React framework. I have also worked with Node.js. I have experience in using Git and other version control tools. </p> <p> My goal is to gain experience, learn, improve as a professional, and face new challenges in working on projects, become an expert in modern technologies and methods. I am an active, goal-oriented person and I love working in a team. </p> <p> I am confident in my ability to deliver quality work and achieve set goals. I am ready to work with other developers and learn new technologies to achieve a common goal. I am looking for an opportunity to gain my first work experience and continue my path in developing websites and applications. </p>",
            birthday: "Birthday :<span>21 jun 1994</span>",
            age: "Age : <span>29</span>",
            phone: 'Phone :<a class="cont" href="tel:+380660229626"> +38 (066) 022 96 26</a>',
            city: 'City :<span><a class="cont" target="_blank" href="https://goo.gl/maps/qjeAboSLL2URVzhs6" >Kryvyi Rih | Ukraine</a></spa>',
            education:
                'Education :<span><a class="cont" target="_blank" href="https://kdpu.edu.ua/en/" >KR St. Pedagogical University</a></span>',
            hireMe: "Hire Me",
            educationTitle: "Education",
            facultet: "Faculty Of Natural Sciences",
            specialty:
                "Biologist. Teacher of Biology and Environmental Science. Practical Psychologist.",
            servecesTitle: "Services",
            serviceMbile: "Adaptive website layout",
            serviceFront: "Cross-browser and cross-platform layout",
            serviceDesign: "Figma, Bootstrap and Tailwind CSS.",
            serviceStudy: "Curiosity, online resources, projects, communities",
            portfolioTitle: "Portfolio",
            lastPjt: "My Last project:",
            firstContactTitle: "Contact Me",
            secondContactTitle: "Have You Any Questions ?",
            thirdContactTitle: "I`M AT YOUR SERVICES",
            contactTel: "Call Us On",
            sendMeTitle: "SEND ME AN EMAIL",
            contactBtn: "Send Message",
        },
        ua: {
            home: '<i class="fa fa-home"></i>Головна',
            about: "<i class='fa fa-user'></i>Про мене",
            services: "<i class='fa fa-list'></i>Послуги",
            portfolio: "<i class='fa fa-briefcase'></i>Портфоліо",
            contact: "<i class='fa fa-comments'></i>Мої контакти",
            hello: 'Привіт, мене звати <a class="name" target="_blank" href="https://www.instagram.com/v.alexander21/">Oleksandr Vyshnyvetskyi</a>',
            homeMessage:
                "« Програмування — це не те, що ви знаєте, а те, що ви можете зрозуміти. » - Кріс Пайн",
            homeBtn: "Завантажити СV",
            aboutTitle: "Про мене",
            aboutText:
                "<h3> Я <span>Oleksander Vishnevetskyi</span> і я <span>Front-End developer</span> </h3> <p>Привіт, я початківець Front-End developer. Маю досвід веб-розробки, адаптивних та кросплатформних проектів. Я добре знаю HTML5, CSS3, JS, а також фреймворк React. Я також працював з Node.js. У мене є досвід використання Git та інших інструментів контролю версій. </p> <p>Моя мета – отримати досвід, вчитися, вдосконалюватись як професіонал, зустрічати нові виклики в роботі над проектами, стати експертом у сучасних технологіях і методах. Я активна, цілеспрямована людина, люблю працювати в команді. </p> <p> Я впевнений у своїй здатності виконувати якісну роботу та досягати поставлених цілей. Я готовий працювати з іншими розробниками та вивчати нові технології для досягнення спільної мети. Я шукаю можливість отримати свій перший досвід роботи та продовжити свій шлях у розробці веб-сайтів та додатків. </p>",
            birthday: "Дата народження:<span>21 черв 1994</span>",
            age: "Років : <span>29</span>",
            phone: 'Телефон :<a class="cont" href="tel:+380660229626"> +38 (066) 022 96 26</a>',
            city: 'Місто :<span><a class="cont" target="_blank" href="https://goo.gl/maps/qjeAboSLL2URVzhs6" >Кривий Ріг | Україна</a></spa>',
            education:
                'Освіта :<span><a class="cont" target="_blank" href="https://kdpu.edu.ua/" >КДПУ</a></span>',
            hireMe: "Зв'язатися",
            educationTitle: "Освіта",
            facultet: "Природознавства",
            specialty:
                "Біолог. Вчитель біології та екології. Практичний психолог.",
            servecesTitle: "Послуги",
            serviceMbile: "Адаптивна верстка сайту",
            serviceFront: "Кросбраузерність і кросплатформенність",
            serviceDesign: "Figma, Bootstrap та Tailwind CSS.",
            serviceStudy: "Цікавість, онлайн-ресурси, проекти, спільноти",
            portfolioTitle: "Портфоліо",
            lastPjt: "Мої останні проекти:",
            firstContactTitle: "Зв'яжіться зі мною",
            secondContactTitle: "Чи є у вас запитання?",
            thirdContactTitle: "Я ДО ВАШИХ ПОСЛУГ",
            contactTel: "Телефон",
            sendMeTitle: "НАДІШЛИ МЕНІ EMAIL",
            contactBtn: "Відправити",
        },
    };

    localStorage.setItem("preferredLanguage", language);
    applyLanguage(languageData[language]);
}

function applyLanguage(data) {
    home.innerHTML = data.home;
    about.innerHTML = data.about;
    services.innerHTML = data.services;
    portfolio.innerHTML = data.portfolio;
    contact.innerHTML = data.contact;
    hello.innerHTML = data.hello;
    homeMessage.innerText = data.homeMessage;
    homeBtn.innerText = data.homeBtn;
    aboutTitle.innerHTML = data.aboutTitle;
    aboutText.innerHTML = data.aboutText;
    birthday.innerHTML = data.birthday;
    age.innerHTML = data.age;
    phone.innerHTML = data.phone;
    city.innerHTML = data.city;
    education.innerHTML = data.education;
    hireMe.innerText = data.hireMe;
    educationTitle.innerText = data.educationTitle;
    facultet.innerText = data.facultet;
    specialty.innerText = data.specialty;
    servecesTitle.innerText = data.servecesTitle;
    serviceMbile.innerText = data.serviceMbile;
    serviceFront.innerText = data.serviceFront;
    serviceDesign.innerText = data.serviceDesign;
    // serviceStudy.innerText = data.serviceStudy;
    portfolioTitle.innerText = data.portfolioTitle;
    lastPjt.innerText = data.lastPjt;
    firstContactTitle.innerText = data.firstContactTitle;
    secondContactTitle.innerText = data.secondContactTitle;
    thirdContactTitle.innerText = data.thirdContactTitle;
    contactTel.innerText = data.contactTel;
    sendMeTitle.innerText = data.sendMeTitle;
    contactBtn.innerText = data.contactBtn;
}

const preferredLanguage = localStorage.getItem("preferredLanguage");

// Если язык был выбран, применяем его
if (preferredLanguage) {
    changeLanguage(preferredLanguage);
}
