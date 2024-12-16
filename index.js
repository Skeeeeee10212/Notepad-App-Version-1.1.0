function createTextBox() {
    var textbox = document.createElement("input");
    textbox.type = "text";
    textbox.placeholder = "Enter text here";
    textbox.id = "notesText";
    
    document.body.appendChild(textbox);
}

const clearAllButton = document.getElementById("clearallBtn");

clearAllButton.addEventListener("click", function() {
    location.reload();
});

