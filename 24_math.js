/*
Math.random():
===============
Math.random() এর কাজ হচ্ছে Random বা এলোমেলো Number দেয়া। এটি 0 এবং 1 এর মধ্যে একটি এলোমেলো সংখ্যা প্রদান করে। কিন্তু 1 কে কখনোই দেখাবে না। Math.random() সর্বদা 1 এর চেয়ে কম একটি সংখ্যা প্রদান করে।
*/ 
let randomNumber = Math.random();
console.log(randomNumber); //  Result: 0 এর মধ্যে এলোমেলো সংখ্যা দেখাবে

// JavaScript Random Integers সংখ্যা পাওয়া। 
//------------------------------------------
let zeroToNineNumber = Math.floor(Math.random() * 10);
console.log(zeroToNineNumber); // Returns a random integer from 0 to 9:

let zeroToTenNumber = Math.floor(Math.random() * 11);
console.log(zeroToNineNumber); // Returns a random integer from 0 to 10:

let zeroToSixteenNumber = Math.floor(Math.random() * 17);
console.log(zeroToNineNumber); // Returns a random integer from 0 to 16:

let oneToTenNumber = Math.floor(Math.random() * 10) + 1;
console.log(zeroToNineNumber); // Returns a random integer from 1 to 10:

let oneToOneHundredNumber = Math.floor(Math.random() * 100) + 1;
console.log(zeroToNineNumber); // Returns a random integer from 1 to 100:


/*
Math.floor():
===============
Math.floor() এর কাজ হচ্ছে Number কে নিচে নামানো। যদি floating Number থাকে, তাহলে দশমিক এর পর সমস্ত সুংখ্যা গুলিকে বাদ দিয়ে দশমিক এর আগে যেই সংখ্যা টা আছে সেটা দিবে।
*/ 
let floorNumber1 = 5.7890;
let floorNumber2 = 15.7890;
console.log(Math.floor(floorNumber1)); // Result: 5
console.log(Math.floor(floorNumber2)); // Result: 15


/*
Math.ceil():
===============
Math.ceil() এর কাজ হচ্ছে Number কে উপরে তোলা। যদি floating Number থাকে, তাহলে দশমিক এর পরের সুংখ্যা থেকে 1 নিয়ে দশমিকের আগে যেই সংখ্যা টা আছে সেটার সাথে যোগ করবে। 
*/ 
let ceilNumber1 = 5.7890;
let ceilNumber2 = 15.7890;
console.log(Math.ceil(ceilNumber1)); // Result: 6
console.log(Math.ceil(ceilNumber2)); // Result: 16


/*
Math.round():
===============
Math.round() এর কাজ হচ্ছে Number কে Round করা। floating Number এর দশমিকের পর ১ম সুংখ্যা টা যদি 5 এবং 5 এর উপরে হয়, তাহলে দশমিকের এর আগে যেই সংখ্যা টা আছে সেটার সাথে 1 যোগ করবে। আর যদি 4 এবং 4 এর নিচে হয়, তাহলে কোনো যোগ হবে না। দশমিকের আগে যেই Number আছে সেটাই দেখাবে।  
*/ 
let roundNumber1 = 5.5890; 
let roundNumber2 = 15.4890;
console.log(Math.round(roundNumber1)); // Result: 6
console.log(Math.round(roundNumber2)); // Result: 15


/*
Math.trunc():
===============
Math.trunc() এর কাজ হচ্ছে একটা Floating Number কে Integer বা পূর্নসংখ্যা দেয়া। 
*/ 
let truncNumber1 = 5.5890; 
let truncNumber2 = 15.4890;
console.log(Math.trunc(truncNumber1)); // Result: 5
console.log(Math.trunc(truncNumber2)); // Result: 15


/*
Math.abs():
===============
Math.abs() এর কাজ হচ্ছে নেগেটিভ Number কে পজেটিভ Number বানানো। 
*/ 
let absNumber1 = -5.66; 
let absNumber2 = -15;
console.log(Math.abs(absNumber1)); // Result: 5
console.log(Math.abs(absNumber2)); // Result: 15


/*
Math.min():
===============
Math.min() এর কাজ হচ্ছে Minimum বা একেবারে ছোট Number কে বের করা। যেমনঃ যদি অনেক গুলা Number থাকে, তাহলে সেখান থেকে একেবারে ছোট Number টাকে বের করবে।  
*/ 
let minNumber1= Math.min(10, 76, 44, 13, 5);
console.log(minNumber1); // Result: 5
let minNumber2= Math.min(10, 76, -100, 44, 13, 5);
console.log(minNumber2); // Result: -100


/*
Math.max():
===============
Math.max() এর কাজ হচ্ছে Maximum বা একেবারে বড় Number কে বের করা। যেমনঃ যদি অনেক গুলা Number থাকে, তাহলে সেখান থেকে একেবারে বড় Number টাকে বের করবে।   
*/ 
let maxNumber1= Math.max(10, 76, 44, 13, 5);
console.log(maxNumber1); // Result: 76
let maxNumber2= Math.max(10, 76, -100, 44, 13, 5, 150);
console.log(maxNumber2); // Result: 150


/*
Math.sqrt():
===============
Math.sqrt() এর কাজ হচ্ছে কোনো Number এর Square Root বের করা। 
*/ 
let sqrtNumber1 = 25; 
let sqrtNumber2 = 64;
console.log(Math.sqrt(sqrtNumber1)); // Result: 5
console.log(Math.sqrt(sqrtNumber2)); // Result: 8


/*
Math.pow():
===============
Math.pow() এর কাজ হচ্ছে কোনো ১টা Number কে কতবার গুন করবে, অর্থ্যাৎ সেই Number কেই সেই Number দিয়ে কতবার গুন করবে।   
*/ 
let powNumber1 = 8; 
let powNumber2 = 2;
console.log(Math.pow(powNumber1, 3 /* মানেঃ 8 * 8 * 8 = 512 */)); // Result: () 512
console.log(Math.pow(powNumber2, 3 /* মানেঃ 2 * 2 * 2 = 8 */)); // Result: 8
