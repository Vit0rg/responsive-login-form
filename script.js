const header = document.querySelector("[data-header]");
const usernameInput = document.querySelector("[data-username-input]")
const passwordInput = document.querySelector("[data-password-input]")
const emailInput = document.querySelector("[data-email-input]")
const forgotPasswordButton = document.querySelector("[data-forgot-password-button]")
const signUp = document.querySelector("[data-sign-up-button]")
const submitButton = document.querySelector("[data-submit-button]")

forgotPasswordButton.addEventListener("click", () =>
{
  header.innerText = "Recover password"
  submitButton.value = "Send code"
  emailInput.classList.remove("hidden")
  forgotPasswordButton.classList.add("hidden")
  usernameInput.classList.add("hidden")
  passwordInput.classList.add("hidden")
  signUp.classList.add("hidden")
})
