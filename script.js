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


// Get a reference to the "Projects" menu item
const projectsMenuItem = document.querySelector('#menuItems > li:nth-child(3)');

// Get a reference to the submenu
const submenu = document.querySelector('#submenu');

// Add a click event listener to the "Projects" menu item
projectsMenuItem.addEventListener('click', function() {
  // Toggle the display of the submenu
  submenu.classList.toggle('show');
});

