/*
============================================
; Title:  cousar-db.4.1.js
; Author: Donald Cousar
; Date:   20 Dec 2018
; Description: Debug Array Code
; Expected Output:
; -- DISPLAYING FRUITS --
; 1. Apple
; 2. Orange
; 3. Grape
; 4. Strawberry
; 5. Cherry
; 6. Banana
;===========================================
*/

//Start Program

//Array
var fruits = ['Apple', 'Orange', 'Grape', 'Strawberry', 'Cherry', 'Banana']


//Functions
function getFruits(arr, val) {
  for (var x = 0; x < arr.length; x++) {
      if (arr[x] === val)
    console.log(arr[x]);
  }
}

// Output
console.log('-- DISPLAYING FRUITS --');
    for (var y = 0; y < fruits.length; y++) {
        console.log(fruits[y]);
    }

console.log("");