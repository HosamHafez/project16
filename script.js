
document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('form-container');
  
    const handlePhoneNumberChange = (e) => {
      const inputPhoneNumber = e.target.value;
      const errorElement = document.getElementById('error-message');
      errorElement.textContent = ''; 
  

      if (/^[0-9-]*$/.test(inputPhoneNumber)) {
      } else {
        errorElement.textContent = 'Invalid phone number format.\nPlease use numbers and dashes only.';
      }
    };
  
    const handleEmailChange = (e) => {
      const inputEmail = e.target.value;
      const errorElement = document.getElementById('error-message');
      errorElement.textContent = '';
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(inputEmail)) {
      } else {
        errorElement.textContent = 'Invalid email format.\nPlease enter a valid email address.';
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('email');
      const phoneNumberInput = document.getElementById('phoneNumber');
      const errorElement = document.getElementById('error-message');
  
      if (emailInput.value.trim() === '') {
        errorElement.textContent = 'Email cannot be blank.';
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        errorElement.textContent = 'Invalid email format.\nPlease enter a valid email address.';
        return;
      }
  
      if (phoneNumberInput.value.trim() === '') {
        errorElement.textContent = 'Phone number cannot be blank.';
        return;
      }
  
      const sanitizedPhoneNumber = phoneNumberInput.value.replace(/[^0-9-]/g, '');
  
      console.log('Sanitized Phone Number:', sanitizedPhoneNumber);
      console.log('Email:', emailInput.value);
    };
  
    const formHtml = `
      <form id="signupForm">
        <label for="email">Email:</label>
        <input type="email" id="email" required>
  
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" maxlength="15" required>
  
        <button type="submit">Subscribe</button>
  
        <p id="error-message" style="color: red;"></p>
      </form>
    `;
  
    formContainer.innerHTML = formHtml;
  
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phoneNumber');
  
    emailInput.addEventListener('input', handleEmailChange);
    phoneNumberInput.addEventListener('input', handlePhoneNumberChange);
    signupForm.addEventListener('submit', handleSubmit);
  });
  