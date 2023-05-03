function updateDescription() {
    // Get the selected option value and text
    var dropdown = document.getElementById("dropdown");
    var value = dropdown.value;
    var text = dropdown.options[dropdown.selectedIndex].text;
    
    // Update the description element based on the selected option
    var description = document.getElementById("description");
    if (value === "option1") {
      description.innerHTML = "This project is an AI chat bot that uses natural language processing to communicate with users.";
    } else if (value === "option2") {
      description.innerHTML = "This project is a coding educational platform that provides a coding dictionary and step by step walk throughs.";
    } else if (value === "option3") {
      description.innerHTML = "This project is intended to make digesting the news simpler by fetching a priortized summary of daily or weekly events.";
    } else {
      description.innerHTML = "";
    }
  }
