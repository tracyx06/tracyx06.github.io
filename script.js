const roles = [
  "Cloud Developer",
  "Web Developer",
  "Full-Stack Learner",
  "API & Automation Builder",
  "Computer Science Engineer"
  
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function type() {
  currentRole = roles[i];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, j--);
  } else {
    typingElement.textContent = currentRole.substring(0, j++);
  }

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
