// Toggle the visibility of the menu
function toggleMenu() {
  const menu = document.getElementById("menuOptions");
  menu.classList.toggle("active");
}

// Show the login box
function showLoginBox() {
  const loginBox = document.querySelector(".login-box");
  loginBox.style.display = loginBox.style.display === "block" ? "none" : "block";
}

// Hide menu/login when clicking outside
window.addEventListener('click', function(e) {
  const loginBox = document.querySelector(".login-box");
  const menuOptions = document.getElementById("menuOptions");
  const menuBtn = document.querySelector(".menu-btn");

  if (!loginBox.contains(e.target) && !menuOptions.contains(e.target) && !menuBtn.contains(e.target)) {
    loginBox.style.display = "none";
    menuOptions.classList.remove("active");
  }
});

// Prevent form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login feature is not yet implemented.");
});

// Scroll to How It Works
document.querySelector(".cta").addEventListener("click", () => {
  document.querySelector(".how-it-works").scrollIntoView({ behavior: 'smooth' });
});
document.getElementById("forecastForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Forecast for your location is coming soon!");
});