// Get a random number
function getRandomNumber() {
    return Math.floor(Math.random() * 5);
}


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
console.log(suggestions);

// This will write a random menu item to the page
function writeRandomSuggestion() {
    document.write("We suggest: ");
    document.write(suggestions[getRandomNumber()]);
}

writeRandomSuggestion();
