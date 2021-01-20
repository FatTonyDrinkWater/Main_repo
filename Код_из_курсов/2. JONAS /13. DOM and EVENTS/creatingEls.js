//Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");

//Two ways of inserting. With o without HTML
message.textContent = "We use cookies";
// message.innerHTML = `We use cookies pal <button class='btn-close'></button>`;

header.prepend(message);
// Последний ребенок
// header.append(message);
// header.append(message.cloneNode(true));
// Нельзя использовать дом дважды

//Delete elements
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener("click", () => message.remove());

// Styles
message.style.backgroundColor = "#37383d";
// message.style.height = getComputedStyle(message).height + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non standart atributes
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

const link = document.querySelector(`.twitter-link`);
console.log(link.href);

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();

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

// Обработчики лучше, потому что позволяют добавлять больше функций на событие или удалить
const h1 = document.querySelector(`h1`);

const alertH1 = function (e) {
  alert("AddEvent:Great!");

  h1.removeEventListener("mouseenter", alertH1);
};
h1.addEventListener("mouseenter", alertH1);

// old school way
// h1.onmouseenter = function (e) {
//   alert("AddEvent:Great!");
// }

// DOM traversing - select element based on another element
const h1 = document.querySelector(`h1`);
// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "red";
h1.lastElementChild.style.color = "blue";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
// Trick for getting all siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
