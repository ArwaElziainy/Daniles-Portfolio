// ----------------------------------------------------------------Loading----------------------------------------------------------------
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => { 
        document.body.removeChild("loader");
    })
})
// ----------------------------------------------------------------Typing----------------------------------------------------------------
var typed = new Typed(".auto-type", {
    strings: ["Larry Daniels", "Designer", "Developer",],
    typeSpeed: 35,
    backSpeed: 35,
    loop: true
});
// ----------------------------------------------------------------NavObserver----------------------------------------------------------------
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".home");

const sectionOptions = {};

const secObserv = new IntersectionObserver(function (
    entries,
    secObserv
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scroll", "shadow","fixed-top");
        } else {
            nav.classList.remove("nav-scroll", "shadow","fixed-top");
        }
    })
},
    sectionOptions);

secObserv.observe(sectionOne);
// ----------------------------------------------------------------NavActive----------------------------------------------------------------
const li = document.querySelectorAll(".nav-item");
    const sec = document.querySelectorAll("section");

    function activeMenu(){
      let len= sec.length;
      while(--len && window.scrollY + 97 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");
    }
    activeMenu();
window.addEventListener("scroll", activeMenu);
// ----------------------------------------------------------------Counters----------------------------------------------------------------
let countSection = document.querySelector(".clients");
let num = document.querySelectorAll(".count-body .num");
let start = false;
let speed = 100;

window.onscroll = function () {
    if (window.scrollY >= countSection.offsetTop) {
        if (!start) {
            num.forEach((num) => startCount(num));
            
        }
        start = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) { 
            clearInterval(count);
        }
    }, 1000 / goal );

}