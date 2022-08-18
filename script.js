const header = document.querySelector("[data-header]");
const usernameInput = document.querySelector("[data-username-input]")
const passwordInput = document.querySelector("[data-password-input]")
const emailInput = document.querySelector("[data-email-input]")
const forgotPasswordButton = document.querySelector("[data-forgot-password-button]")
const signUp = document.querySelector("[data-sign-up-button]")
const signInButton = document.querySelector("[data-sign-in-button]")
const recoverButton = document.querySelector("[data-recover-button]")
const repeatPasswordInput = document.querySelector("[data-repeat-password-input]")  

function hiddenToggler(arrayToToggle, arrayNewToggleState)
{
  for (let i = 0; i < arrayToToggle.length; i++) 
  {
    arrayToToggle[i].classList.toggle("hidden", arrayNewToggleState[i]);
  }
}

forgotPasswordButton.addEventListener("click", loadForgotPasswordContent)

function loadForgotPasswordContent()
{
  header.innerText = "Recover password"

  const elementsToToggle = [emailInput, forgotPasswordButton, usernameInput,
                            passwordInput, signUp, signInButton, recoverButton,
                            repeatPasswordInput]
  const newElementsState = [false, true, true, true, false, true, false, true]
  hiddenToggler(elementsToToggle, newElementsState)
  signUp.classList.remove("submit-button")
}

recoverButton.addEventListener("click", loadLoginContent
)

function loadLoginContent()
{
  signUp.removeEventListener("click", loadLoginContent)

  header.innerText = "Login"
  const elementsToToggle = [usernameInput, passwordInput, repeatPasswordInput,
                            signInButton, emailInput, forgotPasswordButton,
                            signInButton, recoverButton]
  const newElementsState = [false, false, true, false, true, false, false, true]
  hiddenToggler(elementsToToggle, newElementsState)
  signUp.classList.remove("submit-button")
}

signUp.addEventListener("click", loadNewUserContent)

function loadNewUserContent()
{
  header.innerText = "Create account"
  const elementsToToggle = [usernameInput, passwordInput, repeatPasswordInput,
                            signInButton, emailInput, forgotPasswordButton,
                            signUp, recoverButton]
  const newElementsState = [false, false, false, true, false, false, false, true]
  hiddenToggler(elementsToToggle, newElementsState)
  signUp.classList.add("submit-button")

  signUp.addEventListener("click", () =>
  {
    alert("User registered")
    loadLoginContent
  })
}

signInButton.addEventListener("click", ()=>
{
  alert("Welcome")
})

recoverButton.addEventListener("click", () =>
{
  alert("Chek your e-mail")
})