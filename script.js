function doesAccountExist(username) {
  return localStorage.getItem(username) !== null;
}

function registerAccount(username, password) {
  localStorage.setItem(username, password);
}

function verifyLogin(username, password) {
  const storedPassword = localStorage.getItem(username);
  return storedPassword !== null && storedPassword === password;
}

function login() {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  if (enteredUsername && enteredPassword) {
      if (doesAccountExist(enteredUsername) && verifyLogin(enteredUsername, enteredPassword)) {
          // Successful login, redirect to the next page
          window.location.href = 'index 2.html';
      } else {
          // Invalid credentials or account doesn't exist
          alert('Invalid credentials. Please try again or register.');
      }
  } else {
      // Empty input
      alert('Please fill in both username and password fields.');
  }
}

function register() {
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;

  if (newUsername && newPassword) {
      if (!doesAccountExist(newUsername)) {
          // Register the new account
          registerAccount(newUsername, newPassword);

          // Redirect to the next page after successful registration
          window.location.href = 'index 2.html';
      } else {
          // Username already exists
          alert('Username already exists. Please choose a different one.');
      }
  } else {
      // Empty input
      alert('Please fill in both username and password fields.');
  }
}



const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

