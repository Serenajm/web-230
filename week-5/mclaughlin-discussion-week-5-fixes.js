// Start Program

/*
; Title:  Discussion 5.1
; Author: Jordan Hennessy
; Date:   9 January 2019
; Modified by: none
; Description: Advanced array with errors
;===========================================
*/

/*
; Find and correct two errors in code.
;
; EXPECTED OUTPUT:
;   Wine goes with chocolate.
;   Cola goes with hamburgers.
;   Orange juice goes with pancakes.
*/
// variable

var pairing = new Map();
pairing.set('Wine', 'chocolate');
pairing.set('Cola', 'hamburgers');
pairing.set('Orange juice', 'pancakes');
pairing.set('Apple juice', "cereal");
pairing.delete('Apple juice');

for (var [key, value] of pairing) {
  console.log(key + ' goes with ' + value + '.');
}

console.log("\n");



/*
Title: sanchez-assignment-5.1.js
Date: 1/10/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Advanced Arrays 
*/
// Map Object 
var planets = new Map();
planets.set('Mercury', "First");
planets.set("Venus", "Second");
planets.set("Earth", "Thrid");
planets.set("Mars", "Fourth");
planets.set("Jupiter", "Fifth");
planets.set("Saturn", "Sixth");
planets.set("Uranus", "Seventh");
planets.set("Neptune", "Eight");

//Iteration 
for(var [key, value] of planets){
  console.log(key + " is The " + value + " Planet in our solar system ");
}
// Should Get something similar to "Mercury is the First Planet in our solar system"
// End of the program 