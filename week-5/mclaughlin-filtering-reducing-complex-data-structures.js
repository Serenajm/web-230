/*
============================================
; Title:  mclaughlin-filtering-reducing-complex-data-structures.js
; Author: Serena McLaughlin
; Date:   11 January 2019
; Description: Working with object collection and outputting filtered and reduced content
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 5.4"));
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




// outputs -- COMPOSERS BY RATING --
console.log('-- COMPOSER BY RATING --')

// output of the composer objects utilizing the built-in map() function
var ratings = composers.map((composer) => {
  return composer.rating
})

var lastName = composers.map((composer) => {
  return composer.lastName
})

// output of the composer objects utilizing the built-in forEach() function
ratings.forEach((rating) => {
console.log("Rating: " + rating + "\n" + "Composer: " + lastName + "\n")
})

//End program
