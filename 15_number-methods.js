/*
isNaN() Method:
===============
isNaN() Method এর কাজ হচ্ছে এটা নাম্বার কিনা তা চেক করে। যদি নাম্বার হয় তাহলে false দেখাবে আর যদি নাম্বার না হয় তাহলে true দেখাবে। 
*/
console.log(isNaN("309")); // Result: true
console.log(isNaN(309)); // Result: false


/*
toString() Method:
==================
toString() Method এর মাধ্যমে আমরা নাম্বারকে String এ কনভার্ট করতে পারি এবং সেটার টাইপ হবে String
*/
let num1 = 123;
let x1 = num1.toString();
let x2 = (123).toString();
let x3 = (100 + 23).toString();
console.log(x1);
console.log(x2);
console.log(x3);


/*
toFixed() Method:
=================
toFixed() Method String রিটার্ন করে। এর কাজ হচ্ছে দশমিক এর পরে কতটা নাম্বার নিবে। 
=> toFixed() টাকা দিয়ে কাজ করার জন্য উপযুক্ত।
*/
let num2 = 9.6560;
console.log(num2.toFixed()); // Result: 9
console.log(num2.toFixed(0)); // Result: 10
console.log(num2.toFixed(2)); // Result: 9.66
console.log(num2.toFixed(4)); // Result: 9.6560
console.log(num2.toFixed(6)); // Result: 9.656000


/*
toPrecision() Method:
=====================
toPrecision() Method String রিটার্ন করে। এর কাজ হচ্ছে দশমিক এর আগে এবং পরে মোট কতটা নাম্বার নিবে। 
নোটঃ toPrecision() Method এর ব্র্যাকেটস এর ভিতরে যদি আমরা কোনো ভ্যালু না দেই তাহলে দশমিক এর পর একেবারে নাম্বারের শেষে যতটাই শূন্য থাকবে সেইগুলাকে নিবে না। 
*/
let num3 = 19.65667000000;
console.log(num3.toPrecision()); 
// Result: 19.65667 এখানে ব্র্যাকেটস এর ভিতরে ভ্যালু না দেয়াই শূন্য গুলাকে নেয়নি। 
console.log(num3.toPrecision(2)); // Result: 20
console.log(num3.toPrecision(4)); // Result: 19.66
console.log(num3.toPrecision(6)); // Result: 19.6567


/*
valueOf() Method:
=================
valueOf() Method নাম্বার রিটার্ন করে। 
*/
let num4 = 123;
console.log(num4.valueOf()); // Return: 123
console.log((123).valueOf()); // Return: 123
console.log((100 + 23).valueOf()); // Return: 123 


/*
Number() Method:
================
যেকোনো কিছু কে নাম্বারে কনভার্ট করে দিবে। 
*/
let numberMethod1 = Number(true);    // Result: 1
let numberMethod2 = Number(false);   // Result: 0
let numberMethod3 = Number("10");    // Result: 10
let numberMethod4 = Number("  10");  // Result: 10
let numberMethod5 = Number("10  ");  // Result: 10
let numberMethod6 = Number(" 10  "); // Result: 10
let numberMethod7 = Number("10.33"); // Result: 10.33
let numberMethod8 = Number("10,33"); // Result: NaN
let numberMethod9 = Number("10 33"); // Result: NaN
let numberMethod10 = Number("John"); // Result: NaN


/*
parseInt() Method:
===================
parseInt() Method এর কাজ হচ্ছে Floating সংখ্যা গুলোকে Integer এ কনভার্ট করা। মানে দশমিক এবং দশমিক এর পরে যা সংখ্যা আছে তা বাদ দেয়া। parseInt() Method নাম্বার রিটার্ন করে। 
*/ 
let parseIntMethod1 = parseInt(-10);     // Result: -10 
let parseIntMethod2 = parseInt(-10.300); // Result: -10 
let parseIntMethod3 = parseInt(-10.40);  // Result: 10
console.log(typeof parseInt("-10.40"));  // Result: Data type Number


/*
parseFloat() Method:
====================
parseFloat() Method এর কাজ হচ্ছে নাম্বার গুলা যেইভাবে আছে সেইভাবেই দেখাবে। মানে Floating Number কে Floating আকারেই দেখাবে এবং Integer Number কে Integer আকারেই দেখাবে। আর এটা নাম্বার রিটার্ন করে। 
*/
console.log(typeof parseFloat("10")); // Result: Data type Number
console.log(parseFloat(10.33)); // Result: 10.33 
console.log(parseFloat(10)); // Result: 10
