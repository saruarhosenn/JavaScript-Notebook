/*
Variables হচ্ছে ৩ প্রকার।
=======================
১) var
২) let
৩) const

Variables লেখার নিয়মঃ Variables এর নাম অক্ষর দিয়ে শুরু হতে পারবে কিন্তু নাম্বার বা স্পেশাল ক্যারেক্টার দিয়ে শুরু হতে পারবে না। তবে _(আন্ডারস্কোর) এবং $(ডলার সাইন) দিয়ে আবার শুরু করা যাবে। 
*/

var x; // এটাকে variable declare / declaretion (ঘোষণা দেয়া) বলে।
x = 5; // এটাকে variable assign / assignment বলে।
console.log(x);

/*
(1) Var Keyword: 
=================
var keyword গ্লোবাল স্কোপ এবং ফাংশন স্কোপ কাজ করে। var keyword কে নতুন করে যথবার ইচ্ছা ততবার, যেকোনো জায়গায় Redeclared এবং Reassigned করা যায়। 
*/

// গ্লোবাল স্কোপঃ
// =============
var price1 = 100;
var price2 = 100;
function priceFunc1() {
  var price3 = 300;
  console.log(price1 + price2 + price3);
  if (true) {
    console.log("Total:" + (price1 + price2 + price3));
  }
}
priceFunc1();
console.log((price1 + price2) * 5);
/* 
=> আমরা এখানে price1 এবং price2 কে যেকোনো জায়গায় ব্যবহার করতে পারবো। কারন, এটা গ্লোবাল স্কোপ।
*/

// ফাংশন স্কোপঃ
//==============
function priceFunc2() {
  // এটা হচ্ছে ফাংশন স্কোপ।
  var price4 = 900;
  var price5 = 900;
  console.log(price4 + price5);
  if (true) {
    // এটা হচ্ছে ব্লক স্কোপ।
    var price4 = 100; // এখানে price4 কে নতুন করে Redeclared এবং Reassigned করা হয়েছে।
    console.log("Total:" + (price4 + price5));
  }
  console.log(price4);
}
priceFunc2();
// console.log(price4 + price5); // এখানে price4, price5 কাজ করবে না।
/* 
=> আবার price4, price5 হচ্ছে ফাংশন স্কোপ, মানে শুধু ফাংশনের ভিতরে যেকোনো জায়গায় ব্যবহার করতে পারবো। কিন্তু ফাংশনের বাইরে আমরা এটা ব্যবহার করতে পারবো না। 
*/

// Var Keyword Hoisting:
//======================
// var myName;
// myName = undefined;
myName = "Saruar Hosen";
var myName;
console.log(myName);
/*
 প্রথমে JavaScript কোথায়, কোথায় Variable Declare করা আছে তা দেখবে। তারপর var myName; টাকে Hoisting করে একেবারে উপরে উঠিয়ে নিয়ে যাবে এবং myName এর value undefined assign করবে। তারপর আউটপুট Saruar Hosen দেখাবে। 
*/

/*
(1) Let Keyword: 
================
Let keyword শুধু ব্লক স্কোপ কাজ করে। let keyword কে নতুন করে Redeclared করা যায়না, তবে Reassign করা যায়। থার্ড ব্র্যাকেটস {} এর ভিতর টাই হচ্ছে একটা ব্লক। ফাংশন স্কোপ ছাড়া অন্য যেকোনো থার্ড ব্র্যাকেটসই হচ্ছে ব্লক স্কোপ। এই থার্ড ব্র্যাকেটস এর ভিতরেই শুধু let keyword কাজ করবে, এর বাইরে কল করলে সে কাজ করবে না। 
নিচে উদাহরন দিলামঃ
*/

function ab() {
  // এটা হচ্ছে ফাংশন স্কোপ।
  let m = 10; // এটা ফাংশনের এর ভিতরেই যেকোনো জায়গায় কাজ করবে। ফাংশনের এর বাইরে আবার কাজ করবে না।
  if (true) {
    // এটা হচ্ছে ব্লক স্কোপ।
    let n = 10; // এই টা শুধু এই থার্ড ব্র্যাকেটস এর ভিতরেই কাজ করবে। এর বাইরে কাজ করবে না। কারন, এটা ব্লক স্কোপ।
    console.log(m * n);
  }
  // console.log(n);
  // এখানে এই কনসল কাজ করবে না। কারন, N শুধু থার্ড ব্র্যাকেটস এর ভিতরেই কাজ করবে।
}
ab();

// Let Keyword Hoisting:
//======================
// let number;
number = 498565;
let number;
console.log(number);
/*
 প্রথমে JavaScript কোথায়, কোথায় Variable Declare করা আছে তা দেখবে। তারপর let number; টাকে Hoisting করে একেবারে উপরে উঠিয়ে নিয়ে যাবে, কিন্তু তা কাজ করবে না। 

 নোটঃ Var Keyword এবং Let Keyword দুইটাই Hoisting হয় (মানে উপরে উঠে)। পার্থক্য হলো Var Keyword এ একটা undefined value assign হয়। কিন্তু Let Keyword এ কোনো undefined value assign হয় না। যার জন্য Error আসে। আর এই ঘটনা টাকে বলে Temporal Dead Zone.
*/


/*
(1) Const Keyword: 
================
Let keyword এর মতোই Const keyword কাজ করে। পার্থক্য হলো Const keyword কে নতুন করে Redeclared এবং Reassign করা যায়না। Const keyword কে declared করার সময়ই value assign করতে হয়। 

আমরা কখন Const Keyword ব্যবহার করবো?
=> আমরা Const Keyword কে New Array, New Objects, New Function এবং New Regular Expression এ ব্যবহার করবো।

=> আমরা কখনো Array, Objects কে নতুন করে Redeclared এবং Reassign করতে পারবো না। তবে আমরা চাইলে 
Array, Objects এর ভিতরের Value আপডেট, রিমুভ এবং নতুন করে Value সেট করতে পারবো। 
*/

// Const Keyword Hoisting:
//========================
alert(number2);
const number2 = 9560580;
/*
 Const Keyword এর Hoisting, Let Keyword এর Hoisting একই। দুইটার মাঝে কোনো পার্থক্য নাই। 
*/