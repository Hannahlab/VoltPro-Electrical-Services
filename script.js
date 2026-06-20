// Mobile Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact Form Validation

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const text = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    showMessage("Please enter a valid name.", "red");
    return;
  }

  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "red");
    return;
  }

  if (phone.length < 7) {
    showMessage("Please enter a valid phone number.", "red");
    return;
  }

  if (text.length < 10) {
    showMessage("Please enter more details about your request.", "red");
    return;
  }

  showMessage(
    "Thank you! Your quote request has been submitted successfully.",
    "#22c55e",
  );

  form.reset();
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
  message.style.marginTop = "10px";
  message.style.fontWeight = "600";
}

// Smooth Scrolling Enhancement

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
