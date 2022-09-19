// Converting Arrays to Strings
// ==============================
// নোটঃ toString() পদ্ধতি মেইন অ্যারে পরিবর্তন করে না। এটি সর্বদা একটি নতুন String প্রদান করে।
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const fruit1 = fruits1.toString();
console.log(fruit1); // Result: Banana, Orange, Apple, Mango
console.log(typeof fruits1.toString()); // Result: Data type String


// join() Method:
// ==============
// নোটঃ join() পদ্ধতি মেইন অ্যারে পরিবর্তন করে না। এটি সর্বদা একটি নতুন String প্রদান করে।
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2);
console.log(fruits2.join(" / "));
console.log(fruits2.join(" * "));
console.log(fruits2.join(" 1 "));
console.log(typeof fruits2.join(" / ")); // Result: Data type String


/*
pop() Method:
=============
এই মেথডের কাজ হচ্ছে Array এর লাস্ট এলিমেন্ট কে বাদ দেয়া।  
নোটঃ pop() Method মেইন অ্যারে পরিবর্তন করে। আবার এটি রিমুভ করা এলিমেন্ট কে নতুন String হিসেবে প্রদান করে।
*/
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const a = fruits3.pop();
console.log(a); // Result: Mango
console.log(typeof a); // Result: data type String
console.log(fruits3); // Result: ["Banana", "Orange", "Apple"]


/*
shift() Method:
===============
এই মেথডের কাজ হচ্ছে Array এর প্রথম এলিমেন্ট কে বাদ দেয়া।  
নোটঃ shift() Method মেইন অ্যারে পরিবর্তন করে। আবার এটি রিমুভ করা এলিমেন্ট কে নতুন String হিসেবে প্রদান করে।
*/ 
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const b= fruits3.pop();
console.log(b); // Result: Banana
console.log(typeof b); // Result: data type String
console.log(fruits4); // ["Orange", "Apple", "Mango"] 


/*
push() Method:
==============
এই মেথডের কাজ হচ্ছে Array এর শেষে নতুন এলিমেন্ট যোগ করা।   
নোটঃ push() Method মেইন অ্যারে পরিবর্তন করে।
*/ 
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push();
console.log(fruits5);


/* 
unShift() Method:
=================
এই মেথডের কাজ হচ্ছে Array এর প্রথমে নতুন এলিমেন্ট যোগ করা।    
নোটঃ unShift() Method মেইন অ্যারে পরিবর্তন করে।
*/ 
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.unshift();
console.log(fruits6);


/*
Array length:
=============
এর মাধ্যমে Array এর শেষে এলিমেন্ট যোগ করা যাই। 
*/
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7[fruits7.length] = "Pineapple";
console.log(fruits7);
 

/*
Concatenating Array - concat() Meyhod:
======================================
এর মাধ্যমে একটা Array এর সাথে একাদিক Array যোগ করা যাই। আবার নতুন String ও এড করা যাই এবং একেবারে লাস্টে যোগ হবে। 
নোটঃ concat() পদ্ধতি মেইন অ্যারে পরিবর্তন করে না। এটি সর্বদা একটি নতুন অ্যারে প্রদান করে।
*/
const arr1 = ["Cecilie", "Lone"]; // এখানে এই Array এর কোনো পরিবর্তন হবে না। 
const arr2 = ["Emil", "Tobias", "Linus"]; // এখানে এই Array এর কোনো পরিবর্তন হবে না। 
const arr3 = ["Robin", "Morgan"]; // এখানে এই Array এর কোনো পরিবর্তন হবে না। 
const myChildren = arr1.concat(arr2, arr3); // এখানে নতুন Array তৈরি করবে। 
console.log(myChildren);

const arr4 = ["Saruar", "Rasel"]; // এখানে এই Array এর কোনো পরিবর্তন হবে না। 
const friend = arr4.concat("Imran", "Sojib"); // এখানে নতুন Array তৈরি করবে। 
console.log(friend);


/*
splice() Meyhod:
================
এর মাধ্যমে ডানে, বামে , মাঝখানে এবং শেষে Array নতুন এলিমেন্ট যোগ করতে পারি এবং চাইলে আমরা কোনো Array এলিমেন্ট কে রিমুভ করতে পারি। splice(ভ্যালু, ভ্যালু) Meyhod এর প্রথম ভ্যালুটা Array নতুন এলিমেন্ট যোগ করে আর পরের ভ্যালুটা Array এলিমেন্ট রিমুভ করে। 
নোটঃ splice() পদ্ধতি মেইন Array তে পরিবর্তন করে। কিন্তু splice() পদ্ধতি যেই Array এলিমেন্ট গুলিকে রিমুভ করবে, সেই এলিমেন্ট গুলিকে আবার নতুন Array করে রিটার্ন করে দেই।  
*/
// Only Add element    
const fruits8 = ["Banana", "Orange", "Apple"];
fruits8.splice(1, 0, "Pineapple", "Mango"); 
console.log(fruits8); // Result: ["Banana", "Pineapple", "Mango", "Orange", "Apple", "Mango"]

// Add element & Remove element
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.splice(2, 2 , "Pineapple");
console.log(fruits9); // Result: ["Banana", "Orange", "Pineapple"]

// Add element & Remove element
const fruits10 = ["Banana", "Orange", "Apple"];
fruits10.splice(0, 2, "Pineapple");
console.log(fruits10); // Result: [ 'Pineapple', 'Apple' ]

// Only Remove element
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.splice(0, 2);
console.log(fruits11); // Result: [ 'Apple', 'Mango' ]
fruits11.splice(1, 2);
console.log(fruits11); // Result: [ 'Banana', 'Mango' ]

// splice() পদ্ধতি যেই Array এলিমেন্ট গুলিকে রিমুভ করবে, সেই এলিমেন্ট গুলিকে আবার নতুন Array করে রিটার্ন করে দেই।
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits12.splice(1, 2);
console.log(fruit); // Result: [ 'Orange', 'Apple' ] 
// রিমুভ করা এলিমেন্ট গুলিকে নতুন Array করে রিটার্ন করে দেয়া। 


/*
slice() Meyhod:
===============
এর মানে হচ্ছে একটা Array কে ভাগ করা। এর ভাগ করার পজিশন হচ্ছে Start to End এবং -Start to -End, আমরা এখানে পজিটিভ এবং নেগেটিভ ভ্যালু দুইটাই ব্যবহার করতে পারবো। পজিটিভ ভ্যালু দিলে Left থেকে গননা শুরু করতে হবে আর নেগেটিভ ভ্যালু দিলে Right থেকে গননা করতে হবে।
নোটঃ slice() পদ্ধতি মেইন অ্যারে পরিবর্তন করে না। এটি সর্বদা একটি নতুন অ্যারে প্রদান করে।
*/
const slice = ["Saruar", "Rasel", "Imran", "Sojib"];
const sliceArray1 = slice.slice(2); // Result: ["Imran", "Sojib"]
const sliceArray2 = slice.slice(0, 3); // Result: ["Saruar", "Rasel", "Imran"]
const sliceArray3 = slice.slice(-3, -1); // Result: ["Rasel", "Imran"]
const sliceArray4 = slice.slice(-2); // Result: [ "Imran", "Sojib"]
