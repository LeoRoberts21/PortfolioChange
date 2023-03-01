"use strict";

// ----------------------------Project switch------------

const codeBtn = document.querySelector(".codeBtn");
const designBtn = document.querySelector(".designBtn");

const codeModal = document.querySelector(".codeModal");
const designModal = document.querySelector(".designModal");

const showCode = function () {
  codeModal.classList.remove("hidden");
  designModal.classList.add("hidden");
};

const showDesign = function () {
  designModal.classList.remove("hidden");
  codeModal.classList.add("hidden");
};


designBtn.addEventListener("click", showDesign);

codeBtn.addEventListener("click", showCode);



/*--------------------Button-Colour-Change---------------*/

const designFunc = function() {
  designBtn.classList.add("redBack");
  codeBtn.classList.remove("redBack");
}


const codeFunc = function() {
  designBtn.classList.remove("redBack");
  codeBtn.classList.add("redBack");
}

designBtn.addEventListener("click", designFunc);
codeBtn.addEventListener("click", codeFunc)