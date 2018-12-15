/*
============================================
; Title:  mclaughlin-discussion.js
; Author: Serena McLaughlin
; Date:   11 December 2018
; Description: Fixing control statements
;===========================================
*/

//Header

const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 3.1"));
console.log("\n");


//Control Statments

var z = 5;
if (z == 3){
console.log("Hello");
}
else{
console.log("Bye");
}

var hour = new Date().getHours(); 
if (hour > 20){
console.log("Good night");
}
