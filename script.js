const signUpModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");

const courseCategory = document.querySelector(".category-box")

const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const categorybtn = document.querySelector(".category")

const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const cancelx = document.querySelector(".cancel-x")

const formContainer = document.querySelector(".form-container");
signupBtn.addEventListener("click", () =>{
    signUpModal.classList.add("display");
    formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () =>{
    loginModal.classList.add("display");
    formContainer.classList.add("disable");
});

categorybtn.addEventListener("click", () =>{
    courseCategory.classList.add("show");
});

signupX.addEventListener("click", () =>{
    signUpModal.classList.remove("display");
    formContainer.classList.remove("disable");
});

loginX.addEventListener("click", () =>{
    loginModal.classList.remove("display");
    formContainer.classList.remove("disable");
});

cancelx.addEventListener("click", () =>{
     courseCategory.classList.remove("show");
});