/*
ডেটা টাইপ ২ প্রকার। যেমনঃ
1) Primitive data type
2) Non-primitive data type

1) Primitive data type:
=======================
Primitive টাইপের ডেটাগুলোতে ভ্যালু সরাসরি স্টোর করা থাকে। এই Primitive ডেটা টাইপগুলো ছাড়া, জাভাস্ক্রিপ্টে আসলে সবই Object.... যেমনঃ

(i) Number: নরমাল নাম্বার থেকে শুরু করে যেকোনো ধরনের নাম্বার হতে পারে এবং দশমিক নাম্বারও হতে পারে। 
let x = 10;
let y = 15.4795830;

(ii) String: টেক্সট নাম্বারসহ। String অবশ্যই সিঙ্গেল কোটেশন বা ডাবল কোটেশন এর ভিতরে লিখতে হবে। 
let x = "Hello World";
let y = 'Hello World';
let z = 'Hello World 100';

(iii) Boolean: Boolean ডেটা টাইপের ভ্যালু ২টা, true এবং false
let x = true;
let y = false;

(iv) Undefined: যখন কোনো একটা Variable Declare করা হয়, কিন্তু সেটাতে কোনো ডেটা রাখা হয়না, তখন বাই ডিফল্ট সেই Variable Undefined হয়ে থাকে। যেমনঃ
let someThing;
console.log(someThing)
let xy = undefined;e
console.log(xy)

(v) Null(শূন্য): এটার কোনো অস্তীত্ত নাই। কিন্তু আবার Undefined ও না। মানে আপনার Variable এ কিছু রাখতে চাচ্ছেন না আবার আবার Undefined ও রাখতে চাচ্ছেন না। null এইভাবে Null, NULL লিখলে কাজ করবে না। 
নোটঃ null এর ডেটা টাইপ চেক করলে Object আসবে। যেমনঃ 
let xy = null;
console.log(xy) Answer: null
console.log(typeof (xy)); Answer: object

(vi) Empty Values(খালি মান): যদি কোনো Variable এর ভ্যালু আমরা let x = ""; এইভাবে রাখি, এটা হবে Empty Values... এবং এটার ডেটা টাইপ হবে String... যেমনঃ
let x = "";
console.log(x) Answer: ""
console.log(typeof (x)) Answer: string


(2) Non-primitive data type:
============================ 
Non-primitive ডেটা টাইপের ভ্যালু সরাসরি সেভ করা থাকে না। বরং ভ্যালুর রেফারেন্স সেভ করা থাকে। আর এই টাইপের ডেটা Object....
(i) Arry
(ii) Object
(iii) Function
*/
 