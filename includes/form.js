// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and its child elements
  const form = document.getElementById('signatureForm');
  const nameInput = document.getElementById('name');
  const deptSelect = document.getElementById('department');

  // Input Validation

  function validateName() {
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      showError(nameInput, '\nお名前をご入力ください');
      return false; // Name is invalid
    } else {
      nameInput.classList.remove('invalid');
      nameInput.classList.add('valid');
      hideError(nameInput);
      return true; // Name is valid
    }
  }

  function validateDepartment() {
    if (deptSelect.value === '') {
      deptSelect.classList.add('invalid');
      deptSelect.classList.remove('valid');
      showError(deptSelect, '\n部署を選択してください');
      return false; // Name is invalid
    } else {
      deptSelect.classList.remove('invalid');
      deptSelect.classList.add('valid');
      hideError(deptSelect);
      return true; // Name is valid
    }
  }

  function showError(inputField, message) {
    // Check for existing error message
    let errorDiv = inputField.parentNode.querySelector('.error-message');
    if (!errorDiv) {
      // Create new error message if it doesn't exist
      errorDiv = document.createElement('div');
      errorDiv.classList.add('error-message');
      inputField.parentNode.appendChild(errorDiv);
    }

    errorDiv.textContent = message;

    // Set timeout to automatically hide the error message after 6 seconds
    setTimeout(() => {
      hideError(inputField);
    }, 3000);
  }

  function hideError(inputField) {
    const errorDiv = inputField.parentNode.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  // ... (rest of your code remains the same)
  
  nameInput.addEventListener('input', function() {
    validateName()
  });

  nameInput.addEventListener('blur', function() {
    validateName()
  });

  deptSelect.addEventListener('input', function() {
    validateDepartment()
  });

  deptSelect.addEventListener('blur', function() {
    validateDepartment()
  });

  //Form input copy to the list

  // Add submit event listener to the form
  form.addEventListener('submit', function(dontSubmit) {
    // Prevent the default form submission
    dontSubmit.preventDefault();
  
    const isNameValid = validateName();
    const isDepartmentValid = validateDepartment();
  
    if (isNameValid && isDepartmentValid) {
      // Get input values
      const department = deptSelect.value;
      const name = nameInput.value;

      // Get the signatures list
      const signaturesList = document.getElementById('signatures');
      
      // Create new list item
      const listItem = document.createElement('li');
      listItem.textContent = `${department} - ${name}`;
      
      // Add to list
      signaturesList.appendChild(listItem);
      
      // Clear form
      form.reset();
    }
  });
});