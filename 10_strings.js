/*
String:
=========
(i) lenght: String এর ভিতরে কতটা character আছে তা দেখা যাই। String এর ভিতরে যতটা স্পেস থাকবে সবগুলাই  String হিসেবে কাউন্ট হবে।
*/
let myName = "Saruar Hosen Jihad";
console.log(myName.length);


/* 
ব্যাক স্ল্যাশ দিয়ে String টেক্সটকে নতুন নতুন লাইনে নেয়াঃ
=================================================== 
আমরা মাল্টিপুল লাইনের String টেক্সটকে ব্যাক স্ল্যাশ (\) দিয়ে, আমাদের ইচ্ছেমতো নতুন নতুন লাইনে নিতে পারি। 

নোটঃ ব্যাক স্ল্যাশ (\) দিলে এটা আউটপুটে নতুন কোনো লাইন করবে না। এটা শুধু কোড এডিটরে টেক্সকটে নতুন লাইনে করবে। 
*/ 
// যেমনঃ
let xy = "JavaScript String Properties \
The length property returns the length of a string \
We are the so-called Vikings from the north."


/*
Escape character:
==================
আমরা চাইলে একটা String টেক্সটকে স্পেশাল কারেক্টারের ভিতরে লিখতে পারি। এজন্য যেই টেক্সটাকে স্পেশাল কারেক্টারের ভিতরে লিখতে চাইতেছি, সেজন্য সেই টেক্সট এর আগে এবং পরে ব্যাক স্ল্যশ দিতে হবে। আর যেই স্পেশাল কারেক্টারটা দেখাতে চাইতেছি এর ডান পাশে দিতে হবে। যেমনঃ
*/
let text1 = "We are the so-called \"Vikings\" from the north.";
let text2 = "We are the so-called \#Vikings\# from the north.";
let text3 = "We are the so-called \*Vikings\* from the north.";
let text4 = "We are the so-called \(Vikings\) from the north.";
let text5 = "We are the so-called \[Vikings\] from the north.";


/*
Six escape sequences: ৬টির মধ্যে ৩ টা দেখানো হলো।  
=====================
(i) \t এটার মানে হচ্ছে Tab দেয়া।
(ii) \n এটার মানে হচ্ছে টেক্সটের লাইনকে নতুন একটা লাইনে নেয়া। 
(ii) \b এটার মানে হচ্ছে টেক্সটের বাম পাশের স্পেসকে রিমুভ করা। 
*/

// \t 
let text6 = "We are the so-called \t Vikings from the north.";

// \n
let text7 = "We are the so-called \n Vikings from the north.";

// \b 
let text8 = "We \bare the so-called Vikings from the north.";
