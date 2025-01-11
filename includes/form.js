// Wait for the dom to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and it's child elemets
  const form = document.getElementById('signatureForm');
  const name = document.getElementById('id');
  const dept = document.getElementById('department');
  

  name.addEventListener('input') {

  }

  name.addEventListener('blur') {
    
  }

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