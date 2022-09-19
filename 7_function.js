/*
Function
=============
Function মানে হচ্ছে কাজ। JavaScript কে বলা হয় Functional programming language..
JavaScript এ Function কে ফার্স্ট ক্লাস Function ও বলা হয়। কারন, আমরা চাইলে একটা Function কে আরেকটা Function এর ভিতরে রিটার্ন করেত পারি। একটা Function কে আবার ভ্যারিয়েবলে স্টোর করে রাখতে পারি। আবার চাইলে একটা Function এর আর্গুমেন্ট হিসেবে আরেকটা Function কে পাস করতে পারি। 
*/

// Function এর বিভিন্ন বিষয় পরিচিতিঃ 
//================================ 
// Function keyword, Function name, Function Parentheses > Function parameters & Default value
function myFunc(x = 10 , y = 20) { // Scope start
    let xy = x * y; // Function body
    return xy;
    // Function return
}; // Scope end
const funcOutput1 = myFunc(10, 20); // Function call / invocation, Function arguments
console.log(funcOutput1);

/*
Function call / invocation:
===========================
অনেকভাবে Function call / invocation হতে পারে। আমরা এখানে ৩ টি পদ্ধতি দেখবো।
(i) যখন একটি ঘটনা ঘটে (যখন একজন ব্যবহারকারী একটি বাটনে ক্লিক করে)।
(ii) যখন এটি জাভাস্ক্রিপ্ট কোড থেকে আহ্বান করা হয়।
(ii) স্বয়ংক্রিয়ভাবে, মানে নিজে নিজে কল হতে পারে।
*/


/*
Function return:
================
Function এর ভিতরে যখন আমরা Return দিয়ে দিবে। তখন Return এর পরে কোড থাকলে সেটার কোনো রেজাল্ট দেখাবে 
না। যেমনঃ
*/
function myFunc(x = 10 , y = 20) {
    let xy = x * y;
    return xy;
    console.log(x + y); // এখানে এটার কোনো রেজাল্ট আসবে না। 
};
const funcOutput2 = myFunc(10, 20);
console.log(funcOutput2);

