document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.feedback-form');

    const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedState) {
      form.email.value = savedState.email || '';
      form.message.value = savedState.message || '';
    }

    form.addEventListener('input', function(event) {
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      if (form.email.value.trim() === '' || form.message.value.trim() === '') {
        alert('Please fill out all fields');
        return; 
      }

      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      console.log(formData);

      form.email.value = '';
      form.message.value = '';
      localStorage.removeItem('feedback-form-state');
    });
});