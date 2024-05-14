

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please enter both username and password.';
            return;
        }

        
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
