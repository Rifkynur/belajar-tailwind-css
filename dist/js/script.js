// navbar fixed dan tombol to top
window.onscroll = function () {
  const header = document.querySelector("header");
  const top = document.querySelector("#top");
  if (window.scrollY > 0) {
    header.classList.add("navbar-fixed");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    top.classList.add("hidden");
    top.classList.remove("flex");
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

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
// pindahkan toggel sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
