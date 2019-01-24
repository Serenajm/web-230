/*
============================================
; Title:  mclaughlin-constructorFunctions.js
; Author: Serena McLaughlin
; Date:   23 January 2019
; Description: Creating constructor functions and outputting the results
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 7.2"));
console.log("\n");


//Start program

//employee constructor object with four parameters
  function Person(id, first, last, title) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.title = title;
  }
  
//array of five employee objects including id, first name, last name and title
  const employees = [
    new Person(132, 'Sam', 'McJones', 'Designer'),
    new Person(342, 'Jane', 'Jones', 'Programmer'),
    new Person(231, 'Tammy', 'Charles', 'Creative Director'),
    new Person(845, 'Alice', 'Baxter', 'Manager'),
    new Person(123, 'Tom', 'Davids', 'Developer')
  ];
  
//output select information from the array and constructor object
  let index = 1
  for (let x = 0; x < employees.length; x++) {
    console.log(index + ' ' + employees[x].firstName
     + ' ' + employees[x].lastName + ' ' + employees[x].title )
    index++
  }

  //end program
