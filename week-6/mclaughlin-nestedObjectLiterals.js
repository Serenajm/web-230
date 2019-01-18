/*
============================================
; Title:  mclaughlin-nestedObjectLiterals.js
; Author: Serena McLaughlin
; Date:   16 January 2019
; Description: Creating and displaying nested objects
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 6.4"));
console.log("\n");

//start program

//object literal with nested object
const ticket = {
  id: 140,
  name: "Error Report",
  dateCreated: "1/17/19",
  priority: 5,

  //nested object containing info about the employee
  person: {
    id: 7,
    firstName: "Tom",
    lastName: "Baker",
    jobTitle: "IT Support Specialist",
  }
}

//output data from the object literal and the nested object within it
console.log("Ticket " + ticket.id + " was created on " + 
ticket.dateCreated + " and assigned to employee " + 
ticket['person']['firstName'] + " " + ticket['person']['lastName'] 
+ " (" + ticket['person']['jobTitle'] + ' ' + ticket['person']['id'] + ").")

//end program