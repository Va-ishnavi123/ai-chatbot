function loginn() {
    // Redirect to ai.html
    window.location.href = 'ai.html';
}

function showLoginPage() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

// Show the signup page and hide the login page
function showSignupPage() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

// Handle the signup process
function signup() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (email !== confirmEmail) {
        alert('Emails do not match.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Save user data to local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Signup successful! Please log in.');
    showLoginPage(); // Redirect to login page after signup
}

// Handle the login process
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = 'ai.html'; // Redirect to ai.html upon successful login
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
function addToSearchHistory(topic) {
    const searchHistory = document.getElementById('search-history');
    searchHistory.innerHTML = `<p>${topic}</p>` + searchHistory.innerHTML; // Only add topics
}
