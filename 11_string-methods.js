// String methods: নিচে গুরুত্তপূর্ন কিছু String methods নিয়ে আলোচনা করা হলো। 
// =======================================================================
 
/*
নোটঃ JavaScript এর কোনো কিছু কে শূন্য থেকে গননা করা হয়। 
নোটঃ String methods এ মেইন ভ্যালুর কোনো পরিবর্তন হয়না। আমরা যেই String methods টা এপ্লাই করবো সেটাতে শুধু পরিবর্তন হবে। String methods নতুন ভ্যালু রিটার্ন করে। 
নোটঃ String methods কোনো String খুঁজে না পেলে -1 রিটার্ন করবে। 

নোটঃ দেখতে একই রকম হলেও তাদের মাঝে ২টা পার্থক্য আছে।
(১) search(//gi) method regular expression নিতে পারে কিন্তু index() method regular expression নিতে পারেনা।
(২) index("Hello", 15) method সেকেন্ড প্যারামিটার নিতে পারে কিন্তু search() method সেকেন্ড প্যারামিটার নিতে পারেনা।
*/
// যেমনঃ
let replaceText1 = "Please visit Microsoft! Microsoft is the best website";
console.log(replaceText1.replace("Microsoft", "W3school")); 
// এখানে টেক্সট replace হবে। 
console.log(replaceText1); 
// এখানে মেইন ভ্যালুর কোনো পরিবর্তন হবে না। মানে কোনো টেক্সট replace হবে না। 

let searchText = "Hello world!";
console.log(searchText.search("s"));
// এখানে -1 ভ্যালু রিটার্ন করবে। 

/* 
Regular Expression: 
====================
(i) //g এর মানে হচ্ছে, String এর সব ছোট হাতের ক্যারেক্টার বা শব্দ গুলাকে সিলেক্ট করা
(ii) //gi এর মানে হচ্ছে, String এর সব বড় হাতের এবং ছোট হাতের ক্যারেক্টার বা শব্দ গুলাকে সিলেক্ট করা।  
*/


/*
(i) Slice(Start, End) Method: এর মানে হচ্ছে একটা String কে ভাগ করা। এর ভাগ করার পজিশন হচ্ছে Start to End এবং -Start to -End, আমরা এখানে পজিটিভ এবং নেগেটিভ ভ্যালু দুইটাই ব্যবহার করতে পারবো। পজিটিভ ভ্যালু দিলে Left থেকে গননা শুরু করতে হবে আর নেগেটিভ ভ্যালু দিলে Right থেকে গননা করতে হবে। 
*/
// পজিটিভ ভ্যালু
let sliceText1 = "extracts a part of a string and returns";
console.log(sliceText1.slice(11 /*positive start value*/, 27 /*positive end value*/));
// Result: part of a string 
let sliceText2 = "extracts a part of a string and returns";
console.log(sliceText2.slice(21 /*positive start value = এর মানে হচ্ছে ২১ থেকে শুরু করে একেবারে String এর শেষের দিকে যাবে */));
// Result: 

// নেগেটিভ ভ্যালু
let sliceText3 = "extracts a part of a string and returns";
console.log(sliceText2.slice(-18 /*negative start value*/, -8 /*negative end value*/));
// Result: string and
let sliceText4 = "extracts a part of a string and returns";
console.log(sliceText4.slice(-18 /*negative start value = এর মানে হচ্ছে 18 থেকে শুরু করে একেবারে String এর শেষের দিকে যাবে */));
// Result: string and returns


/*
(ii) Substring(Start, End) Method: Slice এর মতোই Substring এর কাজ। পার্থক্য হচ্ছে Substring এ Slice এর মতো নেগেটিভ ভ্যালু ব্যবহার করা যাইনা। 
*/
let substringText1 = "extracts a part of a string and returns";
console.log(substringText1.substring(0, 8));
// Result: extracts
let substringText2 = "extracts a part of a string and returns";
console.log(substringText2.substring(9));
// Result: a part of a string and returns


/*
(iii) Substr(Start, length) Method: এর কাজ হচ্ছে পজিটিভ ভ্যালু দেয়ার পর কতটা কারেক্টার নিবে সেই নাম্বার টা দেয়া। এখানে নেগেটিভ ভ্যালু ব্যবহার করা যাইনা।
*/
let substrText = "extracts a part of a string and returns";
console.log(substrText.substr(0, 8));
// Result: extracts


/*
(iv) Replace Method: এর কাজ হচ্ছে একটা টেক্সট কে পরিবর্তন করা। Replace Method হচ্ছে case sensitive মানে হচ্ছে, যেই টেক্সট কে আমরা Replace করবো, সেই টেক্সট টা যেইভাবে লিখা আছে ঠিক সেইভাবে আমাদের Replace Method এর ভিতরে লিখতে হবে। তবে আমরা Regular Expression ব্যবহার করে, টেক্সট কে আমরা আমাদের ইচ্ছেমতো লিখতে পারবো।  
নোটঃ আরেকটা কথা হচ্ছে, যেই টেক্সট কে আমরা Replace করবো সেই টেক্সট টা একাধিকবার থাকলেও ১ম টেক্সটা কে Replace করবে। কিন্তু পরের টেক্সট গুলাকে Replace করবে না। তবে Regular Expression //g এবং //gi যদি আমরা ব্যবহার করি একাধিকবার থাকা সব টেক্সট গুলা সিলেক্ট হয়ে Replace হয়ে যাবে। 
*/
let replaceText = "Please visit Microsoft! microsoft is the best website. Microsoft my favourit website, microsoft nice website.";
console.log(replaceText.replace("Microsoft", "W3school"));
// এখানে শুধু ১ম Microsoft টেক্সট টা replace হবে। পরে Microsoft টেক্সট গুলা replace হবে না।  
console.log(replaceText.replace(/microsoft/gi, "Facebook"));
// //gi এর মানে হচ্ছে, microsoft টেক্সট এর সব বড় হাতের এবং ছোট হাতের ক্যারেক্টার বা শব্দ গুলাকে সিলেক্ট করা।  
console.log(replaceText.replace(/microsoft/g, "CSS Battle"));
// //gi এর মানে হচ্ছে, microsoft টেক্সট এর সব ছোট হাতের ক্যারেক্টার বা শব্দ গুলাকে সিলেক্ট করা 

/*
(v) toUpperCase Method: এর কাজ হচ্ছে প্রতিটা ক্যারেক্টার কে বড় হাতের ক্যারেক্টার করা। 
*/
let upperCaseText = "extracts a part of a string and returns";
console.log(upperCaseText.toUpperCase());


/*
(vi) toLowerCase Method: এর কাজ হচ্ছে প্রতিটা ক্যারেক্টার কে ছোট হাতের ক্যারেক্টার করা। 
*/
let lowerCaseText = "HELLO WORLD";
console.log(lowerCaseText.toLowerCase());


/*
(vii) Concat Method: এর কাজ হচ্ছে একটা টেক্সটকে আরেকটা টেক্সট এর সাথে জোড়া লাগানো।  
*/
let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));


/*
(viii) Trim Method: এর কাজ হচ্ছে টেক্সট এর বামে, ডানে অতিরিক্ত কোনো স্পেস থাকলে, তাকে রিমুভ করা।    
=> এটা Form এর input tag এ বেশি ব্যবহার হয়। 
*/
let trimText = "        Hello world! My name is Saruar Hosen           ";
console.log(trimText.trim());


/*
(ix) charAt(Character At) Method: এর কাজ হচ্ছে String টেক্সট এর প্রতিটা ক্যারেক্টার কত নাম্বার index (Position) আছে তা বের করা।  
*/
let charAtText = "Hello World! my name is Saruar Hosen";
console.log(charAtText.charAt(5)); // Result ফাকা String
console.log(charAtText.charAt(0)); // Result e


/*
(x) Property Access: এর মাধ্যমে String টেক্সট এর প্রতিটা ক্যারেক্টারে কোন index (Position) আছে তা দেখা যাই। 
*/
let accessText = "Hello World! my name is Saruar Hosen";
console.log(accessText[0]);
console.log(accessText[4]);


/*
(xi) Split Method: এর কাজ হচ্ছে String কে Arry তে কনভার্ট করা।  
*/
let splitText = "My name is Saruar Hosen, I am a Freelancer, Web Developer";
console.log(splitText.split());
// পুরো টেক্সটকে Arry হিসেবে রিটার্ন করবে। 
console.log(splitText.split(""));
// পুরো টেক্সট এর প্রতিটা ক্যারেক্টার এবং স্পেস কে  Arry হিসেবে রিটার্ন করবে।
console.log(splitText.split(" "));
// পুরো টেক্সট এর প্রতিটা Word কে  Arry হিসেবে রিটার্ন করবে।
console.log(splitText.split(","));
// পুরো টেক্সট এর প্রতিটা কমা দেয়ার বাক্যকে Arry হিসেবে রিটার্ন করবে।
let splitText1 = "My name is Saruar Hosen | I am a Freelancer | Web Developer";
console.log(splitText1.split("|"));
// পুরো টেক্সট এর প্রতিটা পাইপ(pipe) দেয়ার বাক্যকে Arry হিসেবে রিটার্ন করবে।
let splitText2 = "My name is Saruar Hosen. I am a Freelancer & Web Developer.";
console.log(splitText1.split("."));
// পুরো টেক্সট এর প্রতিটা dot(.) দেয়ার বাক্যকে Arry হিসেবে রিটার্ন করবে।
let splitText3 = "My name is Saruar Hosen & I am a Freelancer & Web Developer & Youtuber";
console.log(splitText1.split("&"));
// পুরো টেক্সট এর প্রতিটা & দেয়ার বাক্যকে Arry হিসেবে রিটার্ন করবে।


/*
(xii) startstWith Method: এর কাজ হচ্ছে String এর একেবারে শুরুতে কোনো কিছু খুঁজা। যদি কিছু পাই তাহলে true রিটার্ন করবে আর না পেলে false রিটার্ন করবে। 
নোটঃ startsWith case sensitive, মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে।
নোটঃ আমরা চাইলে startstWith Method এর ভিতরে সেকেন্ড প্যারামিটার ব্যবহার করতে পারবো। 
*/
let startsWithText = "Hello World!";
console.log(startsWithText.startsWith("Hello")); // result true
console.log(startsWithText.startsWith("HELLO")); // result false
console.log(startsWithText.startsWith("H")); // result true
console.log(startsWithText.startsWith("h")); // result false
console.log(startsWithText.startsWith("World!", 6)); // result true


/*
(xiii) endsWith Method: এর কাজ হচ্ছে String এর একেবারে শেষের কোনো কিছু খুঁজা। যদি কিছু পাই তাহলে true রিটার্ন করবে আর না পেলে false রিটার্ন করবে। 
নোটঃ endsWith case sensitive, মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে।
নোটঃ আমরা চাইলে endsWith Method এর ভিতরে সেকেন্ড প্যারামিটার ব্যবহার করতে পারবো এবং এটা হবে Length
*/
let endsWithText = "Hello World!";
console.log(endsWithText.endsWith("World!")); // result true
console.log(endsWithText.endsWith("World")); // result false
console.log(endsWithText.endsWith("!")); // result true
console.log(endsWithText.endsWith("world")); // result false
console.log(endsWithText.endsWith("WORLD")); // result false
console.log(endsWithText.endsWith("Hello", 5)); // result true
/* এখানে সেকেন্ড প্যারামিটার এর মানে হচ্ছে String এর শুরু থেকে কত Length নিবে। আর যথ Length নিবে তার ভিতরেই String এর শেষে দেখবে সার্চ করা String টা আছে কিনা। */


/*
(xiv) indexOf Method: এর কাজ হচ্ছে String এর একটা ক্যারেক্টার কত নাম্বার index (position) এ আছে তা দেখা এবং এটা নাম্বার রিটার্ন করবে। একি ক্যারেক্টার বা শব্দ যদি অনেকবার থাকে, তাহলে ১ম যেটা আছে সেটাই দেখাবে।
নোটঃ indexOf case sensitive, মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে।
*/
let indexOfText = "Hello World & Hello Bangladesh! my name is Saruar Hosen.";
console.log(indexOfText.indexOf("Hello"));
console.log(indexOfText.indexOf("H")); 
console.log(indexOfText.indexOf("e", 5));
/* নোটঃ আমরা চাইলে indexOf এর ভিতরে নাম্বার দিয়ে বলে দিতে পারি কত index এর পর থেকে, String এর index খুঁজবে। */


/*
(xv) lastIndexOf Method: এর কাজ হচ্ছে String এর ভিতরে একি ক্যারেক্টার বা শব্দ যদি অনেকবার থাকে, তাহলে একেবারে শেষে যেটা আছে সেটা কত নাম্বার index (position) এ আছে তা দেখাবে এবং এটা নাম্বার রিটার্ন করবে।
নোটঃ lastIndexOf case sensitive মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে।
*/
let lastIndexOfText = "Hello World & Hello Bangladesh! my name is Saruar Hosen.";
console.log(lastIndexOfText.lastIndexOf("Hello"));
console.log(lastIndexOfText.lastIndexOf("H"));
console.log(lastIndexOfText.lastIndexOf("H", 5));
/* নোটঃ আমরা চাইলে indexOf এর ভিতরে নাম্বার দিয়ে বলে দিতে পারি কত index এর পর থেকে, String এর index খুঁজবে। এর মানে হচ্ছে এখানে String এর একেবারে শেষের দিক থেকে গুনে এসে যথ index বাদ দিয়েছি তার পরের index থেকে কাউন্ট করা শুরু করবে এবং Left এর দিকে শেষে যেই টেক্সট টা থাকবে থাকে দেখাবে। 
*/


/*
(xvi) includes Method: এর কাজ হচ্ছে String এর ভিতরে একটা ক্যারেক্টার বা শব্দ আছে কিনা সেটা খুঁজা। যদি থাকে তাহলে true দেখাবে আর না থাকলে false দেখাবে। 
নোটঃ includes case sensitive মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে। 
নোটঃ আমরা চাইলে includes Method এর ভিতরে সেকেন্ড প্যারামিটার ব্যবহার করতে পারবো। আর এটার কাজ হচ্ছে কত নাম্বার Index এর পর থেকে খুজবে। 
*/
let includesText = "Hello World! My name is Saruar Hosen.";
console.log(includesText.includes("name"));
// result true
console.log(includesText.includes("Name"));
// result false
console.log(includesText.includes("Hello", 5));
// result false


/*
(xvii) match Method: এর কাজ হচ্ছে String এর ভিতরে একই টাইপের ক্যারেক্টার বা শব্দ কতগুলা আছে সেটা বের করা। আর আউটপুটে সব ক্যারেক্টার বা শব্দ গুলাকে Arry হিসেবে দেখাবে। 
নোটঃ match case sensitive মানে হচ্ছে টেক্সট টা আমরা যেইভাবে লিখবো, খুঁজার সময় ঠিক সেইভাবে দিতে হবে। তবে আমরা Regular Expression ব্যবহার করে টেক্সট খুঁজার সময় টেক্সট কে আমরা যেইভাবে ইচ্ছে সেইভাবে লিখতে পারবো। 
নোটঃ match Method করে কোনো কিছু খুজে না পেলে null রিটার্ন করবে। 
*/
let matchText = "The rain in SPAIN RAIN stays mainly RAIN in the plain";
console.log(matchText.match("ain"));
// একখানে String এর ১ম ain টা শুধু রিটার্ন করবে। 
console.log(matchText.match(/ain/g));
console.log(matchText.match(/AIN/g));
/* একখানে String এর ছোট হাতের অথবা বড় হাতের সব ain গুলা রিটার্ন করবে। কারন এখানে আমরা (//g) regular expression ব্যবহার করেছি। (//g) এর মানে হলো ছোট হাতের অথবা বড় হাতের ক্যারেক্টার বা শব্দ গুলিকে রিটার্ন করা */ 
console.log(matchText.match(/ain/gi));
console.log(matchText.match(/a/gi));
/* একখানে String এর ছোট হাতের, বড় হাতের সব ain বা a গুলা রিটার্ন করবে। কারন এখানে আমরা (//gi) regular expression ব্যবহার করেছি। (//gi) এর মানে হলো বড় হাতের, ছোট হাতের সব ক্যারেক্টার বা শব্দ গুলিকে রিটার্ন করা */ 


/*
(xviii) repeat Method: এর কাজ হচ্ছে একটা String কে আমরা কতবার Repeat করতে চাই।
নোটঃ repeat Method নতুন String রিটার্ন করবে। 
*/
let repeatText = "Hello World";
console.log(repeatText.repeat(3));


/*
(xix) search Method: এর কাজ হচ্ছে একটা টেক্সট কে খুঁজে তার index (position) কত নাম্বারে আছে তা বের করা। search Method হচ্ছে case sensitive মানে হচ্ছে, যেই টেক্সট কে আমরা search করবো, সেই টেক্সট টা যেইভাবে লিখা আছে ঠিক সেইভাবে আমাদের search Method এর ভিতরে লিখতে হবে। 
নোটঃ তবে আমরা Regular Expression ব্যবহার করে, টেক্সট কে আমরা আমাদের ইচ্ছেমতো লিখতে পারবো।  
আরেকটা কথা হচ্ছে, যেই টেক্সট কে আমরা search করবো সেই টেক্সট টা একাধিকবার থাকলেও ১ম টেক্সটা কে search করবে। কিন্তু পরের টেক্সট গুলাকে search করবে না।
*/
let searcText = "Mr. Blue has a blue house";
console.log(searcText.search("Blue"));
// result 4
console.log(searcText.search("blue"));
// result 15
console.log(searcText.search("u"));
// result 6
console.log(searcText.search("mr."));
// result -1



