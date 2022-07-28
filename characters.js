// Ask user input

let inputUser = prompt("Please enter a single letter or number:");

// Display result on consol
if (inputUser >= 'A' && inputUser <= 'Z') {
    console.log(inputUser, "is an uppercase letter.”");
}
else if (inputUser >= 'a' && inputUser <= 'z') {
    console.log(inputUser, "is a lowercase letter.");
}
else if (inputUser >= '0' && inputUser <= '9') {
    console.log(inputUser, "is a number.");
}
else {
    console.log(inputUser, "is not a letter or number.");
}



// I did try the below code but it does not work. The input function captures it as a String thus it stops at the first 2 if functions.
// When a number (example "2") is used or special character ("!"") it reads it as a string from the input prompt.

//Below is the code I originally tried.

/*
if (inputUser == String(inputUser).toUpperCase()) {
    console.log(inputUser, "is an uppercase letter.”")
}
else if (inputUser == String(inputUser).toLowerCase()) {
    console.log(inputUser, "is a lowercase letter.");
}
else if (inputUser == Number(inputUser)) {
    console.log(inputUser, "is a number.");
}
else {
    console.log(inputUser, "is not a letter or number.");
}
*/

