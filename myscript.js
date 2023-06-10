
// Function to show the selected tab content
function showTab(tabNumber) {
    var tabs = document.getElementsByClassName('tab');
    var tabContents = document.getElementsByClassName('tab-content');
    
    // Hide all tab contents
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    
    // Deactivate all tabs
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = 'inherit';
    }
    
    // Show the selected tab content and activate the tab
    document.getElementById('tab' + tabNumber + '-content').style.display = 'block';
    tabs[tabNumber - 1].style.backgroundColor = '#333';



var loginSection = document.getElementById('tab6-content');
var signupSection = document.getElementById('tab7-content');
var signupLink = document.getElementById('signup.html');
var loginLink = document.getElementById('login.html');

// Function to switch to the Signup section
function showSignupSection() {
  loginSection.classList.add('tab-content');
  signupSection.classList.remove('tab-content');
}

// Function to switch to the Login section
function showLoginSection() {
  signupSection.classList.add('tab-content');
  loginSection.classList.remove('tab-content');
}

// Event listeners
signupLink.addEventListener
}

// Show the first tab content by default
showTab(1);





