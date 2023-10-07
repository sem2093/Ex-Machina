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
  
var bluediv = document.getElementById("navtest1");
bluediv.classList.remove("bg-body-tertiary", "rounded");
bluediv.classList.add("text-primary-emphasis", "bg-primary-subtle", "border-primary-subtle", "rounded-3");

var bluenav = document.getElementById("navtest2");
bluenav.classList.remove("bg-body-tertiary", "rounded");
bluenav.classList.add("text-primary-emphasis", "bg-primary-subtle", "border-primary-subtle", "rounded-3");

var bluedivs = document.getElementById("navtest3");
bluedivs.classList.remove("bg-body-tertiary", "rounded");
bluedivs.classList.add("text-primary-emphasis", "bg-primary-subtle", "border-primary-subtle", "rounded-3");
  
var bluenavs = document.getElementById("navtest4");
bluenavs.classList.remove("bg-body-tertiary", "rounded");
bluenavs.classList.add("text-primary-emphasis", "bg-primary-subtle", "border-primary-subtle", "rounded-3");

}
