// script.js

function openVideo(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulate form submission (since we don't have a backend)
    form.reset();
    successMessage.style.display = 'block';
  });

  // Email validation function
  function validateEmail(email) {
    // Simple regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
