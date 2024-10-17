document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validate() {
        let valid = true;

        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            valid = false;
        } else {
            nameError.classList.add('hidden');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.classList.remove('hidden');
            valid = false;
        } else {
            emailError.classList.add('hidden');
        }

        if (passwordInput.value.length < 6) {
            passwordError.classList.remove('hidden');
            valid = false;
        } else {
            passwordError.classList.add('hidden');
        }

        return valid;
    }

    registrationForm.addEventListener('input', function () {
        submitBtn.disabled = !validate();
    });

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validate()) {
            alert('Form submitted successfully!');
            registrationForm.reset();
            nameError.classList.add('hidden');
            emailError.classList.add('hidden');
            passwordError.classList.add('hidden');
            submitBtn.disabled = true; // Disable the button after reset
        }
    });
});
