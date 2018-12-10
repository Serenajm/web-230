/*
============================================
; Title:  functions.js
; Author: Serena McLaughlin
; Date:   09 December 2018
; Description: Displays the sum of two integer values
;===========================================
*/

//Header

const header = require('./McLaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 2.4"));
console.log("\n");

//Test variables defined below

var firstName = "Serena";
var lastName = "McLaughlin";
var todaysDate = new Date().getDate();
var todaysMonth = new Date().getMonth() + 1;
var todaysYear = new Date().getFullYear();
var currentTemp = 14.59;
var myAge = "29";
var myGoal =  "10000"
//Functions start here

function fullName(first, last){
    return first + " " + last;
}

function dateWriter(year, month, day){
    return String(month) + "/" + String(day) + "/" + String(year);
}

function formatNumber(number, numOfFixedPositions){
    return number.toFixed(numOfFixedPositions);
}

function convertToInt(str){
    return parseInt(str);
}

function convertToFloat(str){
    return parseFloat(str);
}

// output
console.log("\nHello my name is " + fullName(firstName, lastName) + "!" 
+ "\n\nTodays date is " + dateWriter(todaysYear, todaysMonth, todaysDate) 
+ " and the current temperature is " + formatNumber(currentTemp, 1) + "." 
+ "\n\nI am " + convertToInt(myAge) + " years old and my savings account goal is " 
+ convertToFloat(myGoal) + " dollars.");