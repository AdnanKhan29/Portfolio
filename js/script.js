// Toggle icon bar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Navigation - Adding "active" class to navigation links
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  const fromTop = window.scrollY;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop + 150 &&
      section.offsetTop + section.offsetHeight > fromTop + 150
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //remove toggle nav bar when clicked on x
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Devops Engineer", "UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
