// NAVBAR
let header = document.querySelector("header");
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// MENU BARS
menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// DARK BTN
let darkbtn = document.querySelector("#darkbtn");

darkbtn.onclick = () => {
  if (darkbtn.classList.contains("bx-moon")) {
    darkbtn.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkbtn.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// SCROLLBAR
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
// Copyright © Created By Alttamiz Shahrazad Ar'raffa Purnama
