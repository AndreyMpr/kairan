// Wait for the dom to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and it's child elemets
  const form = document.getElementById('signatureForm');
  const nameInput = document.getElementById('name');
  const deptSelect = document.getElementById('department');

  // Input validation

  function validateName() {
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      showError(nameInput, 'お名前をご入力ください');
      return false; //Name is invalid
    } else {
      nameInput.classList.remove('invalid');
      nameInput.classList.add('valid');
      hideError(nameInput);
      return true; //Name is valid
    }
  }

  function validateDepartment() {
    if (deptSelect.value === '') {
      deptSelect.classList.add('invalid');
      deptSelect.classList.remove('valid');
      showError(deptSelect, '部署を選択してください');
      return false; //Name is invalid
    } else {
      deptSelect.classList.remove('invalid');
      deptSelect.classList.add('valid');
      hideError(deptSelect);
      return true; //Name is valid
    }
  }

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


  // Add submit event listener to the form
  form.addEventListener('submit', function(dontSubmit) {
      // Prevent the default form submission
      dontSubmit.preventDefault();

      const isNAmeValid = validateName();
      const isDepartmentValid = validateDepartment();

      if (isNAmeValid && isDepartmentValid) {
        // Get input values
        const department = deptSelect.value;
        const name = nameInput.value;
      }

      /*
      // Get input values
      const department = document.getElementById('department').value;
      const name = document.getElementById('name').value;
      */

      // Get the signatures list
      const signaturesList = document.getElementById('signatures');
      
      // Create new list item
      const listItem = document.createElement('li');
      listItem.textContent = `${department} - ${name}`;
      
      // Add to list
      signaturesList.appendChild(listItem);
      
      // Clear form
      form.reset();
  });
});