/*
============================================
; Title:  mclaughlin-es5-built-in-functions.js
; Author: Serena McLaughlin
; Date:   10 January 2019
; Description: Working with object collection and outputting the contents
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 5.3"));
console.log("\n");

//Start program

// collection of composers
const composers = [
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Ludwig",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Frederic",
    lastName: "Chopin",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "George",
    lastName: "Handel",
    genre: "Classical",
    rating: 8
  }
];

// outputs -- COMPOSERS --
console.log("-- COMPOSERS --")

// output of the composer objects utilizing the built-in forEach() function
composers.forEach(function(composer) {
  console.log("Last Name: " + composer.lastName + 
  ", Genre: " + composer.genre + ", Rating: " + composer.rating)
})

//End Program