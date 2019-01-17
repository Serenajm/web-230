/*
============================================
; Title:  mclaughlin-object-literals.js
; Author: Serena McLaughlin
; Date:   16 January 2019
; Description: Creating an object and outputting the properties
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 6.3"));
console.log("\n");

//Start program

// object
const person = {
  id: 231,
  name: "Video Editor",
  requester: "Carren Sebastian"
}

// output
console.log('id: ' + person.id + ', name: ' + person.name + ', requester: ' + person.requester)