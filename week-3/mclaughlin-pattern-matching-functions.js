/*
============================================
; Title:  mclaughlin-pattern-matching-functions.js
; Author: Serena McLaughlin
; Date:   14 December 2018
; Description: Utilizing pattern matching functions for logical error handling
;===========================================
*/

//Header
const header = require('./mclaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 3.2"));
console.log("\n");


//Variables
var a = "Dog";
var b = "Cat";
var c = "Rabbit";
var d = "Dog";
var e = "Dog";
var f = "Fox";

//Functions
function match(para1, para2){
    if (para1 === para2)
        return true
    else
        return false
}

function logMismatch(para1, para2){
    console.log(para1 + " and " + para2 + " do not match!")
}

function logMatch(para1, para2){
    console.log(para1 + " and " + para2 + " do match!")
}

// if...else
if (2 > 3) {
    console.log(false);
    } else {
    console.log(true);
    }

console.log("\n");

//if...else
if (match(a, b)){
    logMatch(a, b);
}
else {
    logMismatch(a, b);
}

if (match(b, c)){
    logMatch(b, c);
}
else {
    logMismatch(b, c);
}

if (match(c, d)){
    logMatch(c, d);
}
else {
    logMismatch(c, d);
}

if (match(d, e)){
    logMatch(d, e);
}
else {
    logMismatch(d, e);
}

if (match(e, f)){
    logMatch(e, f);
}
else {
    logMismatch(e, f);
}
