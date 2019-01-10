/*
============================================
; Title:  mclaughlin-es5-built-in-functions.js
; Author: Serena McLaughlin
; Date:   9 January 2019
; Description: Working with built in functions
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 5.2"));
console.log("\n");

//Start program

//Array of favorite foods
const food = ["Sub Sandwiches", "Omelets", "Spaghetti", "Burgers", "Pizza"];

//Output using forEach resulting in a list of foods
food.forEach((foods) => {
  console.log(foods)
})

//End Program