const loginForm = document.querySelector("#login-form");
const input = loginForm.querySelector(".typeName");
const logoutButton = document.querySelector(".welcome > button");
const savedUsername = localStorage.getItem("username");

function paintWelcome(username) {
  document.querySelector(".welcome").classList.remove("hidden");
  const hiElement = document.querySelector(".hi");
  hiElement.innerText = `Hi! ${username}`;
}

function handleLogout() {
  localStorage.removeItem("username");
  document.querySelector(".welcome").classList.add("hidden");
  loginForm.classList.remove("hidden");
}

logoutButton.addEventListener("click", handleLogout);

function handleLogin(event) {
  event.preventDefault();
  const username = input.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  paintWelcome(username);
}

loginForm.addEventListener("submit", handleLogin);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
} else {
  paintWelcome(savedUsername);
}
