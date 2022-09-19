/*
Array iteration methods operate on every array item. 
অ্যারে পুনরাবৃত্তি পদ্ধতি প্রতিটি অ্যারে আইটেমে কাজ করে।
*/

/*
forEach() Method:
=================
forEach() Method মূল Array পরিবর্তন করে না এবং নতুন Array ও তৈরি করে না। 
forEach() Method প্রতিটি অ্যারের উপাদানের জন্য একবার একটি ফাংশন (একটি কলব্যাক ফাংশন) কল করে।
নোটঃ forEach() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়। 
(1) The item value
(2) The item index
(3) The array itself
*/
const num1 = [45, 4, 9, 16, 25];

num1.forEach(num1Func);
function num1Func(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("----------------------");
};

num1.forEach(num2Func);
function num2Func(multiplication, index, array /*This is value, Index & Array*/) {
    let x = multiplication * 2;
    console.log(x); // Result: 90, 8, 18, 32, 50
};

num1.forEach(num3Func);
function num3Func(multiplication, numberIndex, array /*This is value, Index & Array*/) {
    let x = multiplication * 2;
    console.log(x); // Result: 90, 8, 18, 32, 50
    console.log(numberIndex); // Result: 0, 1, 2, 3, 4
};

num1.forEach(num4Func);
function num4Func(multiplication, numberIndex, allArray /*This is value, Index & Array*/) {
    let x = multiplication * 2;
    console.log(x); // Result: 90, 8, 18, 32, 50
    console.log(numberIndex); // Result: 0, 1, 2, 3, 4
    console.log(allArray); // Result: [ 45, 4, 9, 16, 25 ]
};


/*
map() Method:
=============
map() Method মূল Array পরিবর্তন করে না কিন্তু সে একটি নতুন অ্যারে তৈরি করে।
map() Method প্রতিটি অ্যারের উপাদানে একটি function সম্পাদন করে একটি নতুন অ্যারে তৈরি করে।
map() Method value ছাড়া অ্যারের উপাদানগুলির জন্য function চালায় না। 
নোটঃ map() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়। 
(1) The item value
(2) The item index
(3) The array itself
*/
const num2 = [45, 4, 9, 16, 25];

// New Array Create --------->
const newArray = num2.map(num5Func);
function num5Func(multiplication, index, array /*This is value, Index & Array*/) {
    return multiplication * 2;
};
console.log(newArray); // Result: [ 90, 8, 18, 32, 50 ]

num2.map(num6Func);
function num6Func(multiplication, numberIndex, allArray /*This is value, Index & Array*/) {
    let x = multiplication * 2;
    console.log(x); // Result: 90, 8, 18, 32, 50
    console.log(numberIndex); // Result: 0, 1, 2, 3, 4
    console.log(allArray); // Result: [ 45, 4, 9, 16, 25 ]
};


/*
filter() Method:
================
filter() Method মূল Array পরিবর্তন করে না কিন্তু সে একটি নতুন অ্যারে তৈরি করে।
filter() Method কোনো একটা কন্ডিশনের উপর ভিত্তি করে কাজ করে। 
নোটঃ filter() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়। 
(1) The item value
(2) The item index
(3) The array itself
*/
// এখানে 10 এর চেয়ে বড় Number গুলিকে নিয়ে একটি নতুন অ্যারে তৈরি করবে। 
const num3 = [45, 4, 9, 16, 25];

const newLargeNumberArray = num3.filter(num7Func);
function num7Func(findLargeNumber, index, array /*This is value, Index & Array*/) {
    return findLargeNumber > 10;
};
console.log(newLargeNumberArray); // Result: [45, 16, 25]

// এখানে 10 এর চেয়ে ছোট Number গুলিকে নিয়ে একটি নতুন অ্যারে তৈরি করবে।  
const newSmallNumberArray = num3.filter(num8Func);
function num8Func(findSmallNumber, index, array /*This is value, Index & Array*/) {
    return findSmallNumber < 10;
};
console.log(newSmallNumberArray); // Result: [4, 9]


/*
reduce() Method:
================
reduce() Method মূল Array পরিবর্তন করে না। কিন্তু সে একটি Array এর সকল উপাদান কে নিয়ে একটি Single value তৈরি করে value টা কে সে রিটার্ন করে দেয় (Single value তৈরি হতে পারে যোগ, বিয়োগ, গুন, ভাগ ইত্যাদি করে) এবং এটা তৈরি করতে প্রতিটি Array উপাদানে একটি function চালায়, মানে পুরা Array টা কে সে যোগ, বিয়োগ, গুন অথবা ভাগ করে ছোট করে একটি Single value তৈরি করে। আরও সহজভাবে বললে, reduce() Method পুরা Array এর উপাদান গুলিকে ছোট করে ফেলে বা একসাথে করে ফেলে। 

নোটঃ reduce() Method Array তে বাম থেকে ডানে কাজ করে।  

reduce() Method যেভাবে Single value তৈরি করেঃ
============================================ 
প্রথমে ডিফল্টভাবে থাকা শূন্য Value দিয়ে Array এর প্রথম এলিমেন্ট কে সে যোগ, বিয়োগ, গুন অথবা ভাগ করে, সেই ফলাফল টা কে নিয়ে Array এর ২য় এলিমেন্ট এর সাথে যোগ, বিয়োগ, গুন, অথবা ভাগ করে, আবার সেই ফলাফল টা কে নিয়ে Array এর ৩য় এলিমেন্ট এর সাথে যোগ, বিয়োগ, গুন, অথবা ভাগ করে। এইভাবে সে ধারাবাহিকভাবে ফলাফল টা কে নিয়ে পরের এলিমেন্ট এর সাথে যোগ, বিয়োগ, গুন, অথবা ভাগ করে এবং শেষে একটি Single value বা মোট ফলাফল টা রিটার্ন করে দেয়। এখানে শূন্য টা ডিফল্টভাবে থাকে, আমরা চাইলে শূন্য দিয়ে যোগ, বিয়োগ, গুন, অথবা ভাগ না করে আমাদের ইচ্ছেমতো যেকোনো সংখ্যা দিয়ে করতে পারি।

নোটঃ reduce() Method এর সময় function টি 4 টি আর্গুমেন্ট নেয়। 
(1) The total (the initial value / previously returned value) 
(2) The item value
(3) The item index
(4) The array itself
*/
const reduceText = ["i", "Love", "Programminmg"];

const resultReduceText1 = reduceText.reduce(reduceFunc1);
function reduceFunc1(previousValue, currentValue, index, array) {
    return `${previousValue} ${currentValue}`;
};
console.log(resultReduceText1); // Result: i Love Programminmg

// parameter দিয়ে 
// -----------------
const resultReduceText2 = reduceText.reduce(reduceFunc2, "Hello");
function reduceFunc2(previousValue, currentValue, index, array) {
    return `${previousValue} ${currentValue}`;
};
console.log(resultReduceText2); // Result: Hello i Love Programminmg


const num4 = [45, 4, 9, 16, 25];

// যোগ 
// -----------
const totalNumber1 = num4.reduce(num9Func);
function num9Func(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
};
console.log(totalNumber1); // Result: 99

// বিয়োগ
// -----------
const totalNumber2 = num4.reduce(num10Func);
function num10Func(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
};
console.log(totalNumber2); // Result: -9

// গুন 
// -----------
const totalNumber3 = num4.reduce(num11Func);
function num11Func(previousValue, currentValue, index, array) {
    return previousValue * currentValue;
};
console.log(totalNumber3); // Result: 648000

// ভাগ
// -----------
const totalNumber4 = num4.reduce(num12Func);
function num12Func(previousValue, currentValue, index, array) {
    return previousValue * currentValue;
};
console.log(totalNumber4); // Result: 0.003125

// parameter দিয়ে যোগ
// --------------------
// আমরা ডিফল্টভাবে থাকা শূন্য দিয়ে যোগ না করে 100 parameter দিয়ে যোগ করেছি। 
const totalNumber5 = num4.reduce(num13Func, 100);
function num13Func(previousValue, currentValue, index, array) {
    return previousValue + currentValue ;
};
console.log(totalNumber5); // Result: 199

// parameter দিয়ে গুন
// --------------------
// আমরা ডিফল্টভাবে থাকা শূন্য দিয়ে গুন না করে 10 parameter দিয়ে গুন করেছি। 
const totalNumber6 = num4.reduce(num14Func, 10);
function num14Func(previousValue, currentValue, index, array) {
    return previousValue * currentValue ;
};
console.log(totalNumber6); // Result: 199


/*
reduceRight() Method:
=====================
নোটঃ reduceRight() Method এবং reduce() Method সেইম কাজ করে। পার্থক্য হলো, reduce() বাম থেকে ডানে কাজ করে আর reduceRight() ডান থেকে বামে কাজ করে।
reduceRight() Method মূল Array পরিবর্তন করে না। কিন্তু সে একটি Array এর সকল উপাদান কে নিয়ে একটি Single value তৈরি করে value টা কে সে রিটার্ন করে দেয় (Single value তৈরি হতে পারে যোগ, বিয়োগ, গুন, ভাগ ইত্যাদি করে) এবং এটা তৈরি করতে প্রতিটি Array উপাদানে একটি function চালায়, মানে পুরা Array টা কে সে যোগ, বিয়োগ, গুন অথবা ভাগ করে ছোট করে একটি Single value তৈরি করে। আরও সহজভাবে বললে, reduceRight() Method পুরা Array এর উপাদান গুলিকে ছোট করে ফেলে বা একসাথে করে ফেলে। 

নোটঃ reduceRight() Method Array তে ডান থেকে বামে কাজ করে।  

reduceRight() Method যেভাবে Single value তৈরি করেঃ
================================================= 
প্রথমে ডিফল্টভাবে থাকা শূন্য Value দিয়ে Array এর প্রথম এলিমেন্ট কে সে যোগ, বিয়োগ, গুন অথবা ভাগ করে, সেই ফলাফল টা কে নিয়ে Array এর ২য় এলিমেন্ট এর সাথে যোগ, বিয়োগ, গুন, অথবা ভাগ করে, আবার সেই ফলাফল টা কে নিয়ে Array এর ৩য় এলিমেন্ট এর সাথে যোগ, বিয়োগ, গুন, অথবা ভাগ করে। এইভাবে সে ধারাবাহিকভাবে ফলাফল টা কে নিয়ে পরের এলিমেন্ট এর সাথে যোগ, বিয়োগ, গুন, অথবা ভাগ করে এবং শেষে একটি Single value বা মোট ফলাফল টা রিটার্ন করে দেয়। এখানে শূন্য টা ডিফল্টভাবে থাকে, আমরা চাইলে শূন্য দিয়ে যোগ, বিয়োগ, গুন, অথবা ভাগ না করে আমাদের ইচ্ছেমতো যেকোনো সংখ্যা দিয়ে করতে পারি।

নোটঃ reduceRight() Method এর সময় function টি 4 টি আর্গুমেন্ট নেয়। 
(1) The total (the initial value / previously returned value) 
(2) The item value
(3) The item index
(4) The array itself
*/
const reduceRightText = ["i", "Love", "Programminmg"];

const resultReduceRightText1 = reduceRightText.reduceRight(reduceRightFunc1);
function reduceRightFunc1(previousValue, currentValue, index, array) {
    return `${previousValue} ${currentValue}`;
};
console.log(resultReduceRightText1); // Result: Programminmg Love i

// parameter দিয়ে 
// ----------------
const resultReduceRightText2 = reduceRightText.reduceRight(reduceRightFunc2, "Hello");
function reduceRightFunc2(previousValue, currentValue, index, array) {
    return `${previousValue} ${currentValue}`;
};
console.log(resultReduceRightText2); // Result: Hello Programminmg Love i


const num5 = [45, 4, 9, 16, 25];

// যোগ 
// -----------
const totalNumber7 = num5.reduceRight(num15Func);
function num15Func(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
};
console.log(totalNumber7); // Result: 99

// বিয়োগ
// -----------
const totalNumber8 = num5.reduceRight(num16Func);
function num16Func(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
};
console.log(totalNumber8); // Result: -9

// গুন 
// -----------
const totalNumber9 = num5.reduceRight(num17Func);
function num17Func(previousValue, currentValue, index, array) {
    return previousValue * currentValue;
};
console.log(totalNumber9); // Result: 648000

// ভাগ
// -----------
const totalNumber11 = num5.reduceRight(num18Func);
function num18Func(previousValue, currentValue, index, array) {
    return previousValue * currentValue;
};
console.log(totalNumber11); // Result: 0.003125

// parameter দিয়ে যোগ
// --------------------
// আমরা ডিফল্টভাবে থাকা শূন্য দিয়ে যোগ না করে 100 parameter দিয়ে যোগ করেছি। 
const totalNumber12 = num5.reduceRight(num19Func, 100);
function num19Func(previousValue, currentValue, index, array) {
    return previousValue + currentValue ;
};
console.log(totalNumber12); // Result: 199

// parameter দিয়ে গুন
// --------------------
// আমরা ডিফল্টভাবে থাকা শূন্য দিয়ে গুন না করে 10 parameter দিয়ে গুন করেছি। 
const totalNumber13 = num5.reduceRight(num20Func, 10);
function num20Func(previousValue, currentValue, index, array) {
    return previousValue * currentValue ;
};
console.log(totalNumber13); // Result: 199


/*
every() Method:
===============
every() Method এর কাজ হচ্ছে Array এর সকল উপাদান চেক করবে। আর কন্ডিশন দিয়ে চেক করা ভ্যালু থেকে Array এর সকল উপাদান হয় ছোট হতে হবে না হয় বড় হতে হবে। যদি কন্ডিশন ঠিক হয় তাহলে true রিটার্ন করবে আর না হলে false রিটার্ন করবে।
every() Method মূল Array পরিবর্তন করে না। কিন্তু সে true OR false রিটার্ন করে।
নোটঃ every() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়।  
(1) The item value
(2) The item index
(3) The array itself
*/
const num6 = [45, 4, 9, 16, 25];

/* এখানে Array এর সব উপাদান গুলা 3 এর চেয়ে বড় কিনা সেটা চেক করবে। যদি বড় হয় তাহলে true রিটার্ন করবে আর বড় না হলে false রিটার্ন করবে। 
নোটঃ Array এর সকল উপাদান চেক করা ভ্যালু থেকে বড় হতে হবে। বড় হলে true রিটার্ন করবে আর বড় না হলে false রিটার্ন করবে। 
*/
const findLargeNumber = num6.every(num21Func);
function num21Func(checkLargeNumber, index, array /*This is value, Index & Array*/) {
    return checkLargeNumber > 3;
};
console.log(findLargeNumber); // Result: true

/* এখানে Array এর সব উপাদান গুলা 40 এর চেয়ে ছোট কিনা সেটা চেক করবে। যদি ছোট হয় তাহলে true রিটার্ন করবে আর ছোট না হলে false রিটার্ন করবে। 
নোটঃ Array এর সকল উপাদান চেক করা ভ্যালু থেকে ছোট হতে হবে। ছোট হলে true রিটার্ন করবে আর ছোট না হলে false রিটার্ন করবে। 
*/  
const findSmallNumber = num6.every(num22Func);
function num22Func(chekSmallNumber, index, array /*This is value, Index & Array*/) {
    return chekSmallNumber < 40;
};
console.log(findSmallNumber); // Result: false


/*
some() Method:
==============
some() Method এর কাজ হচ্ছে Array এর কিছু উপাদান চেক করবে। আর কন্ডিশন দিয়ে চেক করা ভ্যালু থেকে Array এর কিছু উপাদান হয় ছোট হতে হবে না হয় বড় হতে হবে। যদি কন্ডিশন ঠিক হয় তাহলে true রিটার্ন করবে আর না হলে false রিটার্ন করবে।
some() Method মূল Array পরিবর্তন করে না। কিন্তু সে true OR false রিটার্ন করে।
নোটঃ some() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়।   
(1) The item value
(2) The item index
(3) The array itself
*/
const num7 = [45, 4, 9, 16, 25];

/* এখানে Array এর কিছু উপাদান গুলা 10 এর চেয়ে বড় কিনা সেটা চেক করবে। যদি বড় হয় তাহলে true রিটার্ন করবে আর বড় না হলে false রিটার্ন করবে। 
নোটঃ Array এর কিছু উপাদান চেক করা ভ্যালু থেকে বড় হতে হবে। বড় হলে true রিটার্ন করবে আর বড় না হলে false  রিটার্ন করবে। 
*/
const findLargeNumber1 = num7.some(num23Func);
function num23Func(checkLargeNumber1, index, array /*This is value, Index & Array*/) {
    return checkLargeNumber1 > 10;
};
console.log(findLargeNumber1); // Result: true

/* এখানে Array এর কিছু উপাদান গুলা 3 এর চেয়ে ছোট কিনা সেটা চেক করবে। যদি ছোট হয় তাহলে true রিটার্ন করবে আর ছোট না হলে false রিটার্ন করবে। 
নোটঃ Array এর কিছু উপাদান চেক করা ভ্যালু থেকে ছোট হতে হবে। ছোট হলে true রিটার্ন করবে আর ছোট না হলে false রিটার্ন করবে। 
*/  
const findSmallNumber1 = num7.some(num24Func);
function num24Func(chekSmallNumber1, index, array /*This is value, Index & Array*/) {
    return chekSmallNumber1 < 3;
};
console.log(findSmallNumber1); // Result: false


/*
find() Method:
==============
find() Method এর কাজ হচ্ছে Array এর সব উপাদান চেক করে, শুধুমাত্র একটা উপাদান রিটার্ন করবে এবং সেটা Array এর ১ম উপাদানটা রিটার্ন করবে। 
find() Method মূল Array পরিবর্তন করে না। কিন্তু সে শুধুমাত্র একটা ভ্যালু রিটার্ন করে এবং সেটা Array এর ১ম উপাদানটা রিটার্ন করবে। 
নোটঃ find() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়।   
(1) The item value
(2) The item index
(3) The array itself
*/
const num8 = [4, 9, 16, 25, 29];

// Find Big Number
//-------------------
const findBigNumber = num8.find(num25Func);
function num25Func(findNumber, index, array /*This is value, Index & Array*/) {
    return findNumber > 18;
};
console.log(findBigNumber); // Result: 25

// Find Small Number
//-------------------
const findLittleNumber = num8.find(num26Func);
function num26Func(findNumber, index, array /*This is value, Index & Array*/) {
    return findNumber < 18;
};
console.log(findLittleNumber); // Result: 4


/*
findIndex() Method:
===================
findIndex() Method আর find() Method এর কাজ সেইম। পার্থক্য হচ্ছে findIndex() Method টি রিটার্ন পাওয়া Value টা কত নাম্বার Index Position এ আছে সেটা দেখাবে। 
নোটঃ findIndex() Method এর সময় function টি 3 টি আর্গুমেন্ট নেয়।   
(1) The item value
(2) The item index
(3) The array itself
*/
const num9 = [4, 9, 16, 25, 29];

// Find Number Index
//---------------------
const findIndex1 = num9.findIndex(num27Func);
function num27Func(findNumberIndex, index, array /*This is value, Index & Array*/) {
    return findNumberIndex > 18;
};
console.log(findIndex1); // Result: 25 Index of number 3

// Find Number Index
//---------------------
const findIndex2 = num9.findIndex(num28Func);
function num28Func(findNumberIndex, index, array /*This is value, Index & Array*/) {
    return findNumberIndex < 18;
};
console.log(findIndex2); // Result: 4 Index of number 0


/*
Array.from() Method:
====================
Array.from() Method এর মানে হলো, কি থেকে বা কি হতে Array বানাতে চাই। আর এর মেইন কাজ হলো, কোনো কিছুকে Array বানানো। 
নোটঃ Array.from() Method সরাসরি Number টাইপের Value কে Array বানাই না। 
নোটঃ iterable এর মানে হলো, যেধরনের Object এ একটা একটা করে যাওয়া যায়। 
*/
let createArray = "saruar";
const resultArray = Array.from(createArray);
console.log(resultArray); // Result: [ 's', 'a', 'r', 'u', 'a', 'r' ]

// এখানে Array.from() Method সরাসরি Number টাইপের Value কে Array বানাইনি।  
let number = 76547687;
const numberArry = Array.from(number);
console.log(numberArry); // Result: Blank Array [] 


/*
indexOf() Method:
=================
এর কাজ হচ্ছে Array এর একটি উপাদান কত নাম্বার index (position) এ আছে তা দেখাই এবং এটা নাম্বার রিটার্ন করবে। Array এর একি উপাদান যদি অনেকবার থাকে, তাহলে ১ম যেটা আছে সেটাই দেখাবে।
নোটঃ indexOf() method case sensitive, মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে।
*/
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];

let indexOfposition1 = fruits1.indexOf("Apple");
console.log(indexOfposition1); // Result: 0  

let indexOfposition2 = fruits1.indexOf("Mango");
console.log(indexOfposition2); // Result: 3 
 

/*
lastIndexOf() Method:
=====================
এর কাজ হচ্ছে Array এর একটি উপাদান কত নাম্বার index (position) এ আছে তা দেখাই। Array এর ভিতরে একি উপাদান যদি অনেকবার থাকে, তাহলে একেবারে শেষে যেটা আছে সেটা কত নাম্বার index (position) এ আছে তা দেখাবে এবং এটা নাম্বার রিটার্ন করবে।
নোটঃ lastIndexOf() method case sensitive মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে।
*/
const fruits2 = ["Apple", "Orange", "Apple", "Mango", "Orange"];

let lastIndexOfPosition1 = fruits2.lastIndexOf("Apple");
console.log(lastIndexOfPosition1); // Result: 2

let lastIndexOfPosition2 = fruits2.lastIndexOf("Orange");
console.log(lastIndexOfPosition2); // Result: 4


/*
includes Method: 
================
এর কাজ হচ্ছে Array এর ভিতরে একটা উপাদান আছে কিনা সেটা খুঁজা। যদি থাকে তাহলে true দেখাবে আর না থাকলে false দেখাবে। 
নোটঃ includes() method case sensitive মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে। 
নোটঃ আমরা চাইলে includes Method এর ভিতরে সেকেন্ড প্যারামিটার ব্যবহার করতে পারবো। আর এটার কাজ হচ্ছে কত নাম্বার Index এর পর থেকে খুজবে। 
*/
const fruits3 = ["Apple", "Orange", "Mango"];

let searchElement1 = fruits3.includes("Orange");
console.log(searchElement1); // Result: true

// Use parameter
//-----------------
let searchElement2 = fruits3.includes("Apple", 1);
console.log(searchElement2); // Result: false

