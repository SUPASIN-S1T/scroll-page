const navbar = document.querySelector(".navbar");
let scroll = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > scroll) {
    navbar.classList.add("fixed-top");
  }else {
    navbar.classList.remove("fixed-top");
  }
});
