const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;
let isAnimating = false;

const typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Backend Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

navList.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", handleNavClick);
});

function handleNavClick(event) {
    event.preventDefault();
    if (!isAnimating && !this.classList.contains("active")) {
        isAnimating = true;
        deactivateSections();
        activateSection(this);
        if (window.innerWidth < 1200) {
            toggleAside();
        }
    }
}

function deactivateSections() {
    allSections.forEach((section) => {
        section.classList.remove("active", "back-section");
    });
    navList.forEach((item) => {
        item.querySelector("a").classList.remove("active");
    });
}

function activateSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector("#" + target);
    targetSection.classList.add("active");
    element.classList.add("active");
    setTimeout(() => {
        isAnimating = false;
    }, 1000);
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", toggleAside);

function toggleAside() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSections.forEach((section) => {
        section.classList.toggle("open");
    });
}
