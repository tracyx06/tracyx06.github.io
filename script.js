const roles = [
    "C++ Programmer",
    "Web Developer",
    "Cloud Computing Student",
    "Future Software Engineer"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    if (isDeleting) {
        currentRole = roles[index].substring(0, charIndex--);
    } else {
        currentRole = roles[index].substring(0, charIndex++);
    }

    typingElement.textContent = currentRole;

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === roles[index].length) {
        isDeleting = true;
        speed = 1200;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
