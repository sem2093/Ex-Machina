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


function decideResponse(){
let input = document.getElementById("userInput");

let inputStr= input.value;


const chat = document.getElementById("chat");

let history = chat.innerHTML;

let inputValue= inputStr.toLowerCase();


const tokens = inputValue.split(/\s+/);

let response="";

for (let i=0;i<tokens.length;i++) { if (!isNaN(parseInt(tokens[i]))){ input.setAttribute("type","number"); let calculated = eval(inputStr);
response = "="+calculated; 
input.setAttribute("type","text");
}

else if (tokens[i]==="hello"||tokens[i]==="hi"||tokens[i]==="hey"||tokens[i]==="yo"
){  response = "hello";
      break; }

else if (tokens[i]==="date"||tokens[i]==="time") { response = new Date(); 
break;}

else { response = "okay"}

};

chat.innerHTML = "<br>Me:<br>"+inputStr + "  <br>Bot: <br>" + response + history; 

}
