const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu after clicking a nav link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Back to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Contact form simulation
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !business || !service || !message) {
    formNote.textContent = "Mohon lengkapi seluruh data terlebih dahulu.";
    formNote.style.color = "#dc2626";
    return;
  }

  formNote.textContent = "Terima kasih! Pesan Anda berhasil disiapkan. Tim Pro Mutu Andalan akan segera menghubungi Anda.";
  formNote.style.color = "#0f766e";

  contactForm.reset();
});
