document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.feedback-form');

    // Load form state from localStorage on page load
    const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedState) {
      form.email.value = savedState.email || '';
      form.message.value = savedState.message || '';
    }

    // Listen for input events on the form fields
    form.addEventListener('input', function(event) {
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    // Submit event listener
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Check if both fields are filled
      if (form.email.value.trim() === '' || form.message.value.trim() === '') {
        alert('Please fill out all fields');
        return; // Stop form submission if fields are not filled
      }

      // Log form data to console
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      console.log(formData);

      // Clear form fields and localStorage
      form.email.value = '';
      form.message.value = '';
      localStorage.removeItem('feedback-form-state');
    });
});