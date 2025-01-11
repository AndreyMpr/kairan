// Wait for the dom to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and it's child elemets
  const form = document.getElementById('signatureForm');
  const nameInput = document.getElementById('name');
  const deptSelect = document.getElementById('department');

  function validateName() {
    if (nameInput.value.trim() === '') {
      return false; //Name is invalid
    } else {
      return true; //Name is valid
    }
  }

  function validateDepartment() {
    if (deptSelect.value === '') {
      return false;
    } else {
      return true;
    }
  }

  nameInput.addEventListener('input', function() {
    //%validation logic%
  });

  nameInput.addEventListener('blur', function() {
    //%validation logic%
  });

  deptSelect.addEventListener('input', function() {
    //%validation logic%
  });

  deptSelect.addEventListener('blur', function() {
    //%validation logic%
  });



  // Add submit event listener to the form
  form.addEventListener('submit', function(dontSubmit) {
      // Prevent the default form submission
      dontSubmit.preventDefault();
      
      // Get input values
      const department = document.getElementById('department').value;
      const name = document.getElementById('name').value;
      
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