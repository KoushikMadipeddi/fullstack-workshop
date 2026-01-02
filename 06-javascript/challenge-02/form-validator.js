const form = document.getElementById('myForm');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const usernameText = document.getElementById('usernameText');
const emailText = document.getElementById('emailText');
const passwordText = document.getElementById('passwordText');
const confirmPasswordText = document.getElementById('confirmPasswordText');

/* ---------- Username ---------- */
username.addEventListener('blur', () => {
  const regex = /^[a-zA-Z0-9]{3,15}$/;

  if (!regex.test(username.value.trim())) {
    usernameText.textContent = 'Username must be 3–15 letters or numbers';
    usernameText.style.color = 'red';
  } else {
    usernameText.textContent = 'Valid username';
    usernameText.style.color = 'green';
  }
});

/* ---------- Email ---------- */
email.addEventListener('blur', () => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email.value.trim())) {
    emailText.textContent = 'Enter a valid email address';
    emailText.style.color = 'red';
  } else {
    emailText.textContent = 'Valid email';
    emailText.style.color = 'green';
  }
});

/* ---------- Password ---------- */
password.addEventListener('blur', () => {
  const regex = /^[a-zA-Z]{8,}$/;

  if (!regex.test(password.value)) {
    passwordText.textContent = 'Password must be at least 8 letters';
    passwordText.style.color = 'red';
  } else {
    passwordText.textContent = 'Valid password';
    passwordText.style.color = 'green';
  }
});

/* ---------- Confirm Password ---------- */
confirmPassword.addEventListener('blur', () => {
  if (confirmPassword.value !== password.value || confirmPassword.value === '') {
    confirmPasswordText.textContent = 'Passwords do not match';
    confirmPasswordText.style.color = 'red';
  } else {
    confirmPasswordText.textContent = 'Passwords match';
    confirmPasswordText.style.color = 'green';
  }
});

/* ---------- Prevent Submit if Invalid ---------- */
form.addEventListener('submit', (e) => {
  if (
    usernameText.style.color !== 'green' ||
    emailText.style.color !== 'green' ||
    passwordText.style.color !== 'green' ||
    confirmPasswordText.style.color !== 'green'
  ) {
    e.preventDefault();
    alert('Please fix the errors before submitting');
  }
});
