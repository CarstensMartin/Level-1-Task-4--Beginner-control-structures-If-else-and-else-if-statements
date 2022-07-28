// Declare tariff rates
let Tarif1 = 15.73 / 1000;
let Tarif2 = 22.38 / 1000;
let Tarif3 = 31.77 / 1000;
let Tarif4 = 69.76 / 1000;

let Liters = prompt("How many liters of water was used this month? (Remember 1000 l = 1 kl):");


// Calculate Liters at Tariff 4

if (Liters > 35000) {
    var Liters4 = (Liters - 35000);
}
else {
    var Liters4 = 0;
}

// Calculate Liters at Tariff 3

if (Liters >= 35000) {
    var Liters3 = (35000 - 10500)
}
else if (Liters > 10500 && Liters <= 35000) {
    var Liters3 = (Liters - 10500);
}
else {
    var Liters3 = 0
}


// Calculate Liters at Tariff 2

if (Liters >= 10500) {
    var Liters2 = (10500 - 6000)
}
else if (Liters > 6000 && Liters <= 10500) {
    var Liters2 = (Liters - 6000);
}
else {
    var Liters2 = 0
}

// Calculate Liters at Tariff 1

if (Liters >= 6000) {
    var Liters1 = (6000)
}
else if (Liters <= 6000) {
    var Liters1 = (Liters);
}

// Calculate the total liters multiplied by the correct tariffs

console.log("My water bill is R" + ((Liters4 * Tarif4) + (Liters3 * Tarif3) + (Liters2 * Tarif2) + (Liters1 * Tarif1)));