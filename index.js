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
bluediv.classList.remove("shadow-lg","p-3","mb-5","bg-body-tertiary", "rounded" ,"border");
bluediv.classList.add("p-3","text-primary-emphasis", "bg-primary-subtle", "border", "border-primary-subtle", "rounded-3");

var bluenav = document.getElementById("navtest2");
bluenav.classList.remove("shadow-lg","p-3","mb-5","bg-body-tertiary", "rounded" ,"border");
bluenav.classList.add("p-3","text-primary-emphasis", "bg-primary-subtle", "border", "border-primary-subtle", "rounded-3");

var bluedivs = document.getElementById("navtest3");
bluedivs.classList.remove("shadow-lg","p-3","mb-5","bg-body-tertiary", "rounded" ,"border");
bluedivs.classList.add("p-3","text-primary-emphasis", "bg-primary-subtle", "border", "border-primary-subtle", "rounded-3");
  
var bluenavs = document.getElementById("navtest4");
bluenavs.classList.remove("shadow-lg","p-3","mb-5","bg-body-tertiary", "rounded" ,"border");
bluenavs.classList.add("p-3","text-primary-emphasis", "bg-primary-subtle", "border", "border-primary-subtle", "rounded-3");

}
