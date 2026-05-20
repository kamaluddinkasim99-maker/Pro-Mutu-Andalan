const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
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
