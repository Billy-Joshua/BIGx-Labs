const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const clearBtn = document.getElementById("clearBtn");

// ✅ Autofill username if stored
if (localStorage.getItem("lastUser")) {
  usernameInput.value = localStorage.getItem("lastUser");
}

// ✅ Show/hide password
togglePassword.addEventListener("click", function (e) {
  e.preventDefault();
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show Password";
  }
});

// ✅ Clear form
clearBtn.addEventListener("click", () => {
  usernameInput.value = "";
  passwordInput.value = "";
  message.textContent = "";
});

// ✅ Login logic
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "admin" && password === "1234") {
    // store username
    localStorage.setItem("lastUser", username);

    const now = new Date();
    message.style.color = "green";
    message.innerHTML = `✅ Welcome, <b>${username}</b><br>Logged in at ${now.toLocaleString()}`;
  } else {
    message.style.color = "red";
    message.textContent = "❌ Invalid username or password";
  }
});
