/*
============================================
; Title:  mclaughlin-discussion-week-4.js
; Author: Serena McLaughlin
; Date:   8 January 2019
; Description: Fixing advanced arrays
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Discussion 5.1"));
console.log("\n");


//Variables
var colors = new Map();
colors.set("blue");
colors.set("grass", "green");
colors.set("sun", "yellow");
colors.get("sky");


//Output
for (var (key, value) of colors) {
  console,log("The " key + " is " + value);
}

colors.clear();
colors.size;