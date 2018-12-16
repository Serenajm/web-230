/*
============================================
; Title:  mclaughlin-control-statements.js
; Author: Serena McLaughlin
; Date:   15 December 2018
; Description: If...else swap with switch statements
;===========================================
*/

//Header

const header = require('./mcLaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 3.3"));
console.log("\n");

//Variables
var eventKeyCode = 13

//Switch statements
switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed.");
        break;
    case 16:
        console.log("The shift key was pressed.");
        break;
    case 32:
        console.log("The spacebar key was pressed.");
        break;
    case 8:
        console.log("The backspace / delete key was pressed.");
        break;
    default:
        console.log("Unrecognized key.");
        break;

}