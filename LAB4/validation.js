function validateForm(event) {
    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const yearOfBirthInput = document.getElementById('yearOfBirth').value.trim();
    const email = document.getElementById('email').value.trim();
    const terms = document.getElementById('terms').checked;

    // --- Validation Rules ---

    // 1. Check required fields (Username, Passwords, Email, Checkbox)
    if (username === "") {
        showError('usernameError', 'User Name is required.');
        isValid = false;
    }
    if (password === "") {
        showError('passwordError', 'Password is required.');
        isValid = false;
    }
    if (confirmPassword === "") {
        showError('confirmPasswordError', 'Confirm Password is required.');
        isValid = false;
    }
     if (email === "") {
        showError('emailError', 'Email is required.');
        isValid = false;
    }
    // Name is often required too, add if needed:
    // if (name === "") {
    //     showError('nameError', 'Name is required.');
    //     isValid = false;
    // }

    // 2. Checkbox selected
    if (!terms) {
        showError('termsError', 'You must agree to the terms and conditions.');
        isValid = false;
    }

    // 3. Passwords match (only if both are entered)
    if (password !== "" && confirmPassword !== "" && password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        showError('passwordError', 'Passwords do not match.'); // Show error on both
        isValid = false;
    }

    // 4. Email format (basic check - HTML5 'email' type provides better built-in validation)
    // You can add a more robust regex if needed.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && !emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // 5. Year of Birth validation
    if (yearOfBirthInput === "") {
         showError('yobError', 'Year of Birth is required.');
         isValid = false;
    } else {
        const yearOfBirth = parseInt(yearOfBirthInput);
        if (isNaN(yearOfBirth)) {
            showError('yobError', 'Year of Birth must be a number.');
            isValid = false;
        } else if (yearOfBirthInput.length !== 4) {
            showError('yobError', 'Year of Birth must be four digits (YYYY).');
            isValid = false;
        } else if (yearOfBirth < 1900 || yearOfBirth > 2000) {
            showError('yobError', 'Year of Birth must be between 1900 and 2000.');
            isValid = false;
        }
    }


    // --- Prevent form submission if invalid ---
    if (!isValid) {
        event.preventDefault(); // Stop the form from submitting
        return false;         // Indicate validation failure
    }

    // --- If valid ---
    alert("Registration successful!"); // Or proceed with actual submission
    // To allow submission to a server, remove the alert and just return true
    return true; // Indicate validation success
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(element => element.textContent = '');
}