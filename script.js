document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMessage = document.getElementById("error-message");

  // Example: fixed username and password
  if (username === "admin" && password === "1234") {
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "❌ Invalid username or password";
  }
});
