var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Backend Developer","Freelancer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

let isAnimating = false;

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        if (!isAnimating && !this.classList.contains("active")) {
            isAnimating = true;

            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove("back-section", "active");
            }

            for (let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        }
    });
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector("#" + target);
    
    targetSection.classList.add("active");
    setTimeout(() => {
        isAnimating = false;
    }, 1000);
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }