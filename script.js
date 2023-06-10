var loginSection = document.getElementById('login-section');
var signupSection = document.getElementById('signup-section');
var signupLink = document.getElementById('signup-link');
var loginLink = document.getElementById('login-link');

// Function to switch to the Signup section
function showSignupSection() {
  loginSection.classList.add('hidden');
  signupSection.classList.remove('hidden');
}

// Function to switch to the Login section
function showLoginSection() {
  signupSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
}

// Event listeners
signupLink.addEventListener