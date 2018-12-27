/*
============================================
; Title:  mclaughlin-arrays.js
; Author: Serena McLaughlin
; Date:   26 December 2018
; Description: Filtering values in an array
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 4.2"));
console.log("\n");


//Arrays
var states = ["Nebraska", "Iowa", "Kansas", "South Dakota", "Minnesota"];

var sortedStates = states.sort(getState(states));

//Functions
function getState(arr, val) {
    for (let y = 0; y < arr.length; y++) {
        if (arr[y] === val) {
          return true;
        }
    }
}

function filterState(arr, val) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[y] === val) {
        return arr[y];
      }
    }
  }



//Output Original Array
console.log("--ORIGINAL ARRAY--");
    for (var x = 0; x < states.length; x++) {
        console.log(states[x]);
    }

//New Line
console.log("");

//Output Sorted Array
console.log("--SORTED ARRAY--");
    for (var x = 0; x < sortedStates.length; x++){
        console.log(sortedStates[x]);
    }


//New Line
console.log("");

//Output Selected Value
console.log("--SELECTED VALUE--");
console.log (filterState(states, "Iowa"));