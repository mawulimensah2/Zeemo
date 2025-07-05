document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Store in localStorage
    localStorage.setItem('signupName', name);
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);
    document.getElementById('signupMessage').style.color = 'green';
    document.getElementById('signupMessage').textContent = 'Account created successfully!';
    // Optionally, clear the form fields:
    this.reset();
});