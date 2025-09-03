const dummyUser = {
  username: 'admin',
  password: 'password123'
};

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageEl = document.getElementById('message');

  if (username === dummyUser.username && password === dummyUser.password) {
    messageEl.textContent = 'Login successful!';
    messageEl.style.color = 'green';
  } else {
    messageEl.textContent = 'Invalid username or password.';
    messageEl.style.color = 'red';
  }
});
