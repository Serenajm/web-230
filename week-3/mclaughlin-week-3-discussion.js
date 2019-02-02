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


/*
============================================
; Title:  sanchez-assignment-3.1.js
; Author: Professor Krasso
; Date:   12/13/2018
; Modified By: Gabriel Sanchez
; Description: Displays a formatted header
;
;===========================================
*/

// Code goes here..

/*  The program should not execute and there should be at least two errors in the code you post to Blackboard.
*/

// One Agument, if statement


var age = 27;
if ( age === 27 ){
console.log("Correct, That is Gabriel's Age");
}
else{
console.log("Incorrect, That's not Gabriel's Age");
}

// Display output


/* Expected output
Correct, That is Gabriel's Age
*/

// end of program...

