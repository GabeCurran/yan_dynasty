/*
This function will create a list of menu suggestions.
It returns an array of this list.
*/

function createSuggestions() {
    // Declare variable to hold list
    let suggestions = [];

    // Add menu items to array
    suggestions.push("Chicken Snow Peas");
    suggestions.push("Crab Rangoon");
    suggestions.push("Duck");
    suggestions.push("Eggrolls");
    suggestions.push("Ribs");
    
    return suggestions;
}

// Assign suggestions to variable
let suggestions = createSuggestions();

// Get a random number
function getRandomNumber() {
    return Math.floor(Math.random() * suggestions.length);
}

rand = getRandomNumber();

// This will write a random menu item to the page
function writeRandomSuggestion() {
    document.write("We suggest: ");
    document.write(suggestions[rand]);
}

function photoSuggestions() {
    // Declare variable to hold list
    let suggestionImages = [];

    // Add menu items to array
    suggestionImages.push("images/chickensnowpeas");
    suggestionImages.push("images/Crab_Rangoon");
    suggestionImages.push("images/duck");
    suggestionImages.push("images/eggrolls");
    suggestionImages.push("images/ribs");
    
    return suggestionImages;
}

let suggestionImages = photoSuggestions();

function writeRandomImage() {
    document.write("<img src='" + suggestionImages[rand] + ".jpg'>");
}
