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




/*
============================================
; Title: sullenger-Discussion-Board-4.1.js 
; Author: Jason Sullenger
; Date: 29 December 2018
; Description: Console logs my favorite color when on the correct iteration
;===========================================
*/ 

// Variables defined
var favColor = "Green"
var colors = ["Red", "Blue", "Green", "Orange", "Purple"];

// Loop defined with else/if statement checking colors
for (var i = 0; i < colors.length; i++) {
     if(colors[i] ===  favColor){
          console.log("My favorite color is " + colors[i] + ".");
     } else{
          console.log(colors[i] + " is not my favorite color.");
     }     
}