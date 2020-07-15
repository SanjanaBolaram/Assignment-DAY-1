//Question 2

// Data types available in javascript

//there are 6 data types in javascript

//NUMBER
/* the number type contains int,float,
infintity,NaN*/
let num = 2; // integer 
let num2 = 1.3; // float
let num3 = Infinity; // Infinity
let num4 = 'something here too'/2; // NaN denotes a computational error.

// String 
/*A String in javascript is basically a series of characters that are surrounded by quotes. 
There are three types of quotes in Javascript*/
let str = "Hello world";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;

//Boolean
// Represent a logical entity and can have two values: true or false.
let isCoding = true; // yes
let isOld = false; // no

//A null
// The special null value does not belong to any of the default data types. 
// It forms a separate type of its own which contains only the null value.
let age = null;

//Undefined
//Just like null, Undefined makes its own type. 
// The meaning of undefined is ‘value is not assigned’.
let x;
console.log(x); // undefined

//Object
//Objects are used to store keyed collections of various data and more complex entities.
//Two ways they can be used 
//1) by making use of figure brackets {…}
//2) Another way is to make use of the ‘new’ keyword.
let person = new Object(); // "object constructor" syntax
let person = {name:'sara',age='22'};  // "object literal" syntax