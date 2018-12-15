/*
============================================
; Title:  Exercise-3.1.js
; Author: Lea Trueworthy
; Date:   11 December 2018
; Description: Displays true or false
;===========================================
//simple explanations of what the structure looks like
if (expression)
 statement1
else
 statement2

 switch statement-->
	switch(expression) {
 	statements
	}
For statement-->
	for(initialize ; test ; increment)
 statement
*/

// header

var time = new Date().getHours(); 
if (time < 10) {
    console.log("Good morning");
} else if (time < 20) {
    console.log("Is it lunch time yet?");
} else {
    console.log("Is it dinner time yet?");
}
//output
