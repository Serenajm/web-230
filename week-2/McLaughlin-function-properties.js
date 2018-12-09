/*
============================================
; Title:  functions.js
; Author: Serena McLaughlin
; Date:   06 December 2018
; Description: Demonstrates how to define and call function properties
;===========================================
*/

const header = require('./McLaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 2.3"));
console.log("\n");

// function property definitions
myName.serena = "Serena";

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.serena;
}

// output
console.log("Hello " + myName() + " McLaughlin!");
