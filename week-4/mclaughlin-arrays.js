/*
============================================
; Title:  mclaughlin-arrays.js
; Author: Serena McLaughlin
; Date:   24 December 2018
; Description: Outputing array values
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 4.2"));
console.log("\n");


//Arrays
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];


//Functions
function getFruit(arr) {
    for (var k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}


//Output
getFruit(fruit);