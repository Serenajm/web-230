/*
============================================
; Title:  mclaughlin-discussion-week-6.js
; Author: Serena McLaughlin
; Date:   16 January 2019
; Description: Fixing objects and built-in objects
;===========================================
*/

//Header

const header = require('./mcLaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 3.1"));
console.log("\n");

/*
; EXPECTED OUTPUT:
;   Today there will be a chance for thunderstorms.
;   Tomorrow will be sunny
*/

//Start program

//objects
let weather = {
    weatherType: 'thunderstorms',

    get weatherConditions() {
        return this.weatherType;
    },

    set weatherConditions(val) {
        this.weather = val;
    }
}

weatherConditions.type = "sunny";

// output
console.log('Today there will be a chance for ' + weather.weatherTypes + '.');
console.log('Tomorrow will be ' + weather.weatherTypes + '.');

//End program