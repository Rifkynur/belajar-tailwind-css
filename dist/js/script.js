// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// hamburger button
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hmb-active");
  navMenu.classList.toggle("hidden");
});

// click sembarang untuk menutup nav-menu
window.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("hmb-active");
    navMenu.classList.add("hidden");
  }
  console.log(e.target);
});
