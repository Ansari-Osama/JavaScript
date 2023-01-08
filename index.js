// 1 - Values and Variables.
// var myName = "Osama Ansari";
// console.log(myName);

// Challange Time 1
// var _myName = "Osama";   Valid
// var __1my__Name = "Osama";   Valid
// var 1myName = "Osama";   Invalid
// var $myName = "Osama Ansari"     Valid

// 2 - DataTypes in JavaScript.
// undefined, Boolean, Number, String, BigInt, Symbol. (Primitive Datatypes)

// var myName = "Osama";
// console.log(typeof (myName));
// var myAge = 26;
// console.log(typeof (myAge));
// var iAmOsama = true;
// console.log(typeof (iAmOsama));
// console.log(typeof (myAge));     //undefined

// Challange Time 2.
// console.log(10 + "20");   1020
// console.log(9 - "5");   4 may be this is Bug
// console.log("Java" + "Script");     JavaScript
// console.log(" " + " ");     Space
// console.log(" " + 0);       0
// console.log("Osama" - "Ansari");    NaN
// console.log(true + true);   1 + 1 = 2
// console.log(true + false);      1 + 0 = 1
// console.log(false + true);      0 + 1 = 1
// console.log(false - true); 0 - 1 = -1

// Interview Question 1.
// Q) Difference between null vs undefined.

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof (iAmUseless));

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof (iAmStandBy));

// Interview Question 2.
// Q) What is NaN?
// NaN is a property of the global object. In other words it is a variable in global scope.
// When you subtract two strings then you will get NaN i.e. Not a Number.
// var myPhoneNumber = 9876543210;
// console.log(isNaN(myPhoneNumber));
// var name = "XYZ";
// console.log(isNaN(name));

// Challange Time 3.
// console.log(NaN === NaN)    false
// console.log(Number.NaN === NaN)  false
// console.log(isNaN(NaN));     true
// console.log(isNaN(Number.NaN));     true
// console.log(Number.isNaN(NaN));     true


// 3 - Expressions and Operators.
// Expression is the combination of Operand and Operators.
// There are 6 types of Operators in JS.
// 1) Arithmetic Operator
// 2) Relational or Comparision Operator
// 3) Logical Operator
// 4) Assignment Operator
// 5) String Operator
// 6) Conditional(Ternary) Operator


// 4 - Control Statements & Loops.
// var tomorrow = "rain";
// if (tomorrow == "rain") {
//     console.log("Take an Umbrella");
// }
// else {
//     console.log("No Need to Take an Umbrella");
// }


// Challange Time 5.
// WAP that works out if a given yaer is a leap year or not?
// var year = 2017;
// if (year % 4 == 0 && ((year % 100 != 0) || (year % 400 == 0))) {
//     console.log(year + " is a Leap Year");
// }
// else {
//     console.log(year + " is Not a Leap Year");
// }

// What is truthy and falsy in Javascript?
// We have total 5 falsy values in JS -> 0, " ", undefined, null and NaN.
// Whenever you will provide any false condition then directly else block will execute.
// if (score = 0) {
//     console.log("OMG, We Loss the Game..");
// }
// else {
//     console.log("Yayy, We Won the Game....");
// }

// var age = 20;
// console.log((age >= 18) ? "You are Eligible to Vote" : "You are Not Eligible to Vote"
// );


// Challange Time 6.
// JavaScript program to print table for given number (8,9,12,15) using for loop?
// var num = 9;
// for (var i = 1; i <= 10; i++) {
//     console.log(num + " * " + i + " = " + (num * i));
// }


// 5 - Functions in JavaScript.
// Functions are block of code which is used to execute block of code repetatively.
// function sum(a, b) {     Parameters
//     return a + b;
// }
// console.log(sum(2, 2));  Arguments

// Interview Question 4.
// Q) Why Functions?
// FUnctions are used for reusability of code just by changing different arguments. You can once define the function and reuse it again and again and DRY(Do Not Repeat Yourself)

// Function Expression.
// It simply means create a function and put it into the variables.

// function sum(a, b) {
//     return a + b;
// }
// functionExpression = sum(10, 10);
// console.log(functionExpression);


// Anonymous Function.
// Functions without any name is called as Anonymous Function.

// var anonymous = function (a, b) {
//     return a * b;
// }
// console.log(anonymous(10, 10));



// Welcome to ECMAScript.
// In 1996 Javascript was created, ECMAScript in 1997 and ES6 introduces in 2015.

// LET VS CONST VS VAR
// var myName = 'Osama';
// console.log(myName);
// myName = 'Osama Ansari';
// console.log(myName);


// let myName = 'Osama';
// console.log(myName);
// myName = 'Osama Ansari';
// console.log(myName);


// const myName = 'Osama';
// console.log(myName);
// myName = 'Osama Ansari';
// console.log(myName);

// We can change the values of var and let but we cant change the value of const. var is function scope and let and const is block scope.

// function bioData() {
//     var firstName = "Osama";
//     console.log(firstName);
//     if (true) {
//         var lastName = "Ansari";
//         console.log("Inner " + firstName);
//         console.log("Inner " + lastName);
//     }
//     console.log("InnerOuter " + lastName);
// }

// console.log(bioData());




// function bioData() {
//     let firstName = "Osama";
//     console.log(firstName);
//     if (true) {
//         let lastName = "Ansari";
//         console.log("Inner " + firstName);
//         console.log("Inner " + lastName);
//     }
//     console.log("InnerOuter " + lastName);
// }

// console.log(bioData());




// function bioData() {
//     const firstName = "Osama";
//     console.log(firstName);
//     if (true) {
//         const lastName = "Ansari";
//         console.log("Inner " + firstName);
//         console.log("Inner " + lastName);
//     }
//     console.log("InnerOuter " + lastName);
// }

// console.log(bioData());


// Template Literals (Template Strings)
// let num = 9;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// Default Parameters
// function mult(a, b = 2) {
//     return a * b;
// }
// console.log(mult(5));


// Fat Arrow Function.
// var sum = function (a, b) {
//     return `Sum of ${a} and ${b} is ${a + b}`;
// }
// console.log(sum(2, 2));


// const sum = (a, b = 5) => `Sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5));



// 6 - Arrays in JavaScript.
// var myFriends = ['ABC', 'PQR', "XYZ"];
// console.log(myFriends[1]);