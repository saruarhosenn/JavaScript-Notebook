/*
Number:
=======
=> JavaScript Numbers are Always 64-bit Floating Point
*/

/*
Integer Precision:
==================
JavaScript ১৫ টা সংখ্যা পর্যন্ত নিতে পারে। যদি ১৫ টার বেশি সংখ্যা দেয়া হয় তাহলে সে উল্টা পাল্টা সংখ্যা দেয়া শুরু করে। 
*/
let x = 999999999999999;
let y = 9999999999999999;
console.log(x); // Result 999999999999999
console.log(y); // Result 10000000000000000

/*
Floating Precision:
==================
Floating এ ১৭ টা সংখ্যা হয়। 
Floating number যোগ করলে সবসময় ১০০% সঠিক ফলাফল আসেনা। তবে মাঝে মধ্যে ১০০% সঠিক ফলাফল চলে আসে। কিন্তু আমরা চাইলে সবসময় ১০০% সঠিক ফলাফল নিয়ে আসতে পারি। 
=> প্রথমে Floating number গুলোকে ১০ দিয়ে গুন করে পূর্ন সংখ্যা বের করতে হবে। তারপর গুন করে ফলাফল যা আসে তা যোগ করতে হবে এবং সবশেষে যোগ করে পাওয়া ফলাফলের সাথে ১০ দিয়ে ভাগ করতে হবে।  
*/
let num1 = 0.1;
let num2 = 0.2;
console.log(num1 + num2);
// Result: 0.30000000000000004 সঠিক ফলাফল না।

let totalNum = (num1 * 10 + num2 * 10) / 10;
console.log(totalNum);
// Result: 0.3 সঠিক ফলাফল।

let num3 = 0.5;
let num4 = 0.1;
console.log(num3 + num4);
// Result: 0.6 সঠিক ফলাফল।


/*
Numeric String:
===============
Numeric String হচ্ছে সিঙ্গেল অথবা ডাবল কোটেশন এর ভিতরে Number থাকবে। যেমনঃ
let a = "10";
*/
let a = "10";
let b = "87";
console.log(a * b); // Result: 870

let c = 100;
let d = "10";
console.log(c / d); // Result: 10
console.log(c - d); // Result: 90


/*
isNaN (is Not a Namber):
========================
isNaN হচ্ছে যদি নাম্বার হয় তাহলে false দিবে আর নাম্বার না হয় তাহলে true দিবে। 
*/
let text = "Hello!";
let textNum = "10";
let number = 857984;
console.log(text - number); // Result: NaN
console.log(isNaN(text)); // Result: true
console.log(isNaN(textNum)); // Result: false
console.log(isNaN(number)); // Result: false