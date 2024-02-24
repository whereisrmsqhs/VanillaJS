const loginForm = document.querySelector("#login-form");
const input = loginForm.querySelector(".typeName");

function paintWelcome(username) {
  const hiElement = document.querySelector(".hi");
  hiElement.innerText = `Hi! ${username}`;
}

function handleLogin(event) {
  event.preventDefault();
  const username = input.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  paintWelcome(username);
}

loginForm.addEventListener("submit", handleLogin);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
} else {
  paintWelcome(savedUsername);
}
