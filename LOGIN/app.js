const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", handleLoginBtnClick);
