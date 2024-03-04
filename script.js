document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const portalContainer = document.querySelector('.portal-container');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Check username and password
    // For simplicity, let's assume the login is successful
    // Replace this with actual authentication logic
    if (username === 'dk1006498' && password === 'Washu0112!') {
      loginForm.reset();
      document.querySelector('#user').textContent = "Dylan Karpf";
      loginForm.style.display = 'none';
      portalContainer.style.display = 'block';
    } else {
      alert('Invalid username or password');
    }
  });
});
