// Scroll Reveal Animations
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
});

// Loader Animation
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});
