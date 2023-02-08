"use strict";

// DAY READING

let today = new Date();
let day = String(today.getDay());

console.log(day);

if (day == 0) {
  document.querySelector(".current-day").textContent = "Sunday";
} else if (day == 1) {
  document.querySelector(".current-day").textContent = "Monday";
} else if (day == 2) {
  document.querySelector(".current-day").textContent = "Tuesday";
} else if (day == 3) {
  document.querySelector(".current-day").textContent = "Wednesday";
} else if (day == 4) {
  document.querySelector(".current-day").textContent = "Thursday";
} else if (day == 5) {
  document.querySelector(".current-day").textContent = "Friday";
} else if (day == 6) {
  document.querySelector(".current-day").textContent = "Saturday";
}

// HIDDEN NAV-BAR

const nav = document.querySelector(".nav-bar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && lastScrollY > 0.1) {
    nav.classList.add("nav--hidden", "navbar2");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;

  if (window.scrollY < 0.5) {
    nav.classList.remove("navbar2");
  }
});

// ----------------------------Project switch------------

const codeBtn = document.querySelector(".codeBtn");
const designBtn = document.querySelector(".designBtn");
const codeModal = document.querySelector(".codeModal");
const designModal = document.querySelector(".designModal");

const showCode = function () {
  codeModal.classList.remove("hidden");
  designModal.classList.add("hidden");
  designBtn.classList.remove("ul");
  codeBtn.classList.add("ul");
};

const showDesign = function () {
  designModal.classList.remove("hidden");
  codeModal.classList.add("hidden");
  codeBtn.classList.remove("ul");
  designBtn.classList.add("ul");
};

designBtn.addEventListener("click", showDesign);

codeBtn.addEventListener("click", showCode);


/*--------------------PHONE MENU---------------*/

const modal = document.querySelector('.modal1');
const overlay = document.querySelector('.overlay1');
const btnsHideModal = document.querySelector('.close-modal1')
const btnsShowModal = document.querySelectorAll('.show-modal1');




const openModal = function() {
    modal.classList.remove('hidden1');
    overlay.classList.remove('hidden1');
  };

const closeModal = function() {
    modal.classList.add('hidden1');
    overlay.classList.add('hidden1');
}

for(let i = 0; i < btnsShowModal.length; i++)
 btnsShowModal[i].addEventListener('click', openModal);

btnsHideModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

if(e.key === 'Escape' && !modal.classList.contains('hidden1')) {
closeModal();
}
});

