function darkMode(){

// Get a reference to the <html> tag
var htmlTag = document.documentElement;

// Add an attribute and value to the <html> tag
htmlTag.setAttribute("data-bs-theme", "dark");
}


function lightMode(){

// Get a reference to the <html> tag
var htmlTag = document.documentElement;

// Add an attribute and value to the <html> tag
htmlTag.setAttribute("data-bs-theme", "light");
}

function blueMode(){
  

var bluediv = document.getElementById("myElement");
bluediv.classList.remove(" ");
bluediv.classList.add("p-3,text-primary-emphasis, bg-primary-subtle, border, border-primary-subtle, rounded-3");
}
