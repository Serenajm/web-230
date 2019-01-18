/*
============================================
; Title:  mclaughlin-exceptionHandling.js
; Author: Serena McLaughlin
; Date:   16 January 2019
; Description: Creating a try/catch/finally block
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 6.2"));
console.log("\n");

//Start program

try {
    // variables
    let x = 4
    let y = 5
    const sum = y + x
  
    // if statement
    if (sum < 10 ) throw 'NumberTooLow'
  
    // output
    console.log(sum)
  } catch (err) {
    console.log('Catch clause: ' + err)
  } finally {
    console.log('Finally clause reached...')
  }
