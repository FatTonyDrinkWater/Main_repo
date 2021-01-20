"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(`.header`);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Smooth scrolling OLDSCHOOL way
const buttonScrollto = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

buttonScrollto.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log("Current scrill (x/y)", window.pageXOffset, window.pageYOffset);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // New way
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation with event delegation
//Without delegation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Чтобы мы не создавали каждому одинаковому событию свой обработчик
// Real delegation
// 1. Add EL to common parent element
// 2. determine what el. originated event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  // where event actuaally happend e.target
  console.log(e.target);
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Tabbed component
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(".operations__content");

//Bad practise. Use event delegation
// tabs.forEach((tab) =>
//   tab.addEventListener("click", () => {
//     console.log("tab");
//   })
// );

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  // Guard class for empty spaces
  if (!clicked) return;

  //Remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  //Activate tab
  clicked.classList.add("operations__tab--active");
  //Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////// studiybng

// // Cookie-div render
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML = `We use cookies pal <button class='btn btn--close-cookie'>Got it!</button>`;
// header.prepend(message);
// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener("click", () => message.remove());
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.className);

// // Обработчики лучше, потому что позволяют добавлять больше функций на событие или удалить
// // const h1 = document.querySelector(`h1`);

// // const alertH1 = function (e) {
// //   alert("AddEvent:Great!");
// // };
// // h1.addEventListener("mouseenter", alertH1);

// // setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// // old school way
// // h1.onmouseenter = function (e) {
// //   alert("AddEvent:Great!");
// // }

// //Event propagation
// //Random RGB
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(`.nav__links`).addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(`.nav`).addEventListener("click", (e) => {});

// DOM traversing

// const h1 = document.querySelector(`h1`);
// // Going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "blue";

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// // Trick for getting all siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });
