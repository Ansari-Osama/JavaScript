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