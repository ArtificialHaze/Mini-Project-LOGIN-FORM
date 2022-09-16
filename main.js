// VARIABLES

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const forgotLink = document.querySelector(".forgot-link");
const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");
const closeBtn = document.querySelector(".close");

// FUNCTIONS

// EVENT LISTENERS

registerLink.addEventListener("click", () => {
  loginSection.style.display = "none";
  registerSection.style.display = "flex";
});

loginLink.addEventListener("click", () => {
  registerSection.style.display = "none";
  loginSection.style.display = "flex";
});

forgotLink.addEventListener("click", () => {
  loginSection.style.display = "none";
  forgotSection.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  forgotSection.style.display = "none";
  loginSection.style.display = "flex";
});
