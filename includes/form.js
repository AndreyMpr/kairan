// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('signatureForm');
  
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