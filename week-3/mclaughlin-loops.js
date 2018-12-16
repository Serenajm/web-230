/*
============================================
; Title:  mclaughlin-loops.js
; Author: Serena McLaughlin
; Date:   15 December 2018
; Description: Returns a random integer value
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 3.1"));
console.log("\n");

//Variables
var z = 5


//Functions
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

function logMismatch(z, x){
    console.log(z + " does not match " + x + "!")
}

function logMatch(z, x){
    console.log(z + " does match " + x + "!")
}

function match(z, x){
    if (z === x)
        return true
    else
        return false
}


//For loop
for (var x = 0; x < 10; x++) {
    var y = randomNumber()

    if (match(z, y)){
    logMatch(z, y);
}
    else {
    logMismatch(z, y);
}
    }