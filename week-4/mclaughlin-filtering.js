/*
============================================
; Title:  mclaughlin-arrays.js
; Author: Serena McLaughlin
; Date:   24 December 2018
; Description: Filtering values in an array
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 4.2"));
console.log("\n");


//Arrays
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];


//Functions
function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val)
        console.log(arr[k]);
    }
}


//Output
console.log("--DISPLAYING ARRAY ITEMS--");
    for (var x = 0; x < vehicles.length; x++) {
        console.log(vehicles[x]);
    }

console.log("");

console.log("--SELECTED VALUE--");
getValue(vehicles, "Motorcycle");

console.log("");

console.log("--SELECTED VALUE--");
getValue(vehicles, "Bus");