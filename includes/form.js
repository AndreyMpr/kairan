function addItem(list, inputField) { 
    var list = document.getElementById(sign-list);
    var listItem = document.createElement("li");
    listItem.innerText = inputField.value;
    list.appendChild(listItem);
    return false;
  }