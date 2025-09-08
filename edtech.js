AOS.init({ duration: 1000, once: true });
const toggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.getElementById("navbarNav");
const hamburger = toggler.querySelector(".navbar-toggler-icon");
const closeIcon = toggler.querySelector(".close-icon");

navbarCollapse.addEventListener("show.bs.collapse", () => {
  hamburger.classList.add("d-none");
  closeIcon.classList.remove("d-none");
});

navbarCollapse.addEventListener("hide.bs.collapse", () => {
  hamburger.classList.remove("d-none");
  closeIcon.classList.add("d-none");
});

// Highlight active section in navbar
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // adjust offset
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Close navbar collapse after clicking a link (mobile view)
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.getElementById("navbarNav");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// Testimonials
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".p-4, .card, .testimonial-card, .bg-white");
    const text = card ? card.querySelector(".testimonial-text") : null;
    if (!text) return;

    if (text.classList.contains("expanded")) {
      // Collapse
      text.style.maxHeight = "70px";
      text.classList.remove("expanded");
      this.textContent = "Read More";
    } else {
      // Expand smoothly to actual height
      text.style.maxHeight = text.scrollHeight + "px";
      text.classList.add("expanded");
      this.textContent = "Read Less";
    }
  });
});
