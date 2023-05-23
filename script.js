function appendChar(char) {
  document.getElementById('result').value += char;
}

function deleteLastChar() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  var result = document.getElementById('result').value;
  try {
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}

document.getElementById("projectsMenuItem").addEventListener("click", function() {
  var submenu = document.getElementById("submenu");
  submenu.classList.toggle("show");

  // Calculate the position of the submenu relative to the "Projects" menu item
  var projectsMenuItem = document.getElementById("projectsMenuItem");
  var projectsMenuItemRect = projectsMenuItem.getBoundingClientRect();
  submenu.style.top = projectsMenuItemRect.bottom + "px";
  submenu.style.left = projectsMenuItemRect.left + "px";
});

