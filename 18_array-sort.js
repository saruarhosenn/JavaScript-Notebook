/*
sort() method:
==============
এর কাজ হচ্ছে এলোমেলো Array String কে alphabetically সাজিয়ে দেয়া। 
*/
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
console.log(fruits1); // Result: [ 'Apple', 'Banana', 'Mango', 'Orange' ]


/*
reverse() method:
=================
এর কাজ হচ্ছে Array String কে reverse করে দেয়া।  
*/
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.reverse();
console.log(fruits2); // Result: [ 'Mango', 'Apple', 'Orange', 'Banana' ]

/* নোটঃ আমরা যদি Array String কে reverse করতে চাই এবং সাথে alphabetically ও সাজাতে চাই,  
তাহলে আবার reverse() এর সাথে sort() ও করতে হবে এবং reverse() এর আগে sort() লিখতে হবে। */
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.sort();
fruits3.reverse();
console.log(fruits3); // Result: [ 'Orange', 'Mango', 'Banana', 'Apple' ]


/*
Number কে ছোট থেকে বড় এবং বড় থেকে ছোট সিরিয়াল করে সাজানোর পদ্ধতি। 
=============================================================== 
নিচে ৪০ দিয়ে ৪০ এর পরের সব গুলা নাম্বার কে বিয়োগ করবে।
আবার ১০০ দিয়ে ১০০ এর পর অবশিষ্ট যত নাম্বার আছে সব গুলা নাম্বার কে বিয়োগ করবে।
এইভাবে একটা দিয়ে বিয়োগ করা শেষ হলে, আরেকটা সিয়ে বিয়োগ করা শুরু হবে। 
*/
// ছোট থেকে বড় পদ্ধতি / Ascending
// ------------------------------
const num1 = [40, 100, 1, 5, 25, 10];
num1.sort(function(a, b) {
    return a - b;
});
console.log(num1); // Result: [ 1, 5, 10, 25, 40, 100 ]

// বড় থেকে ছোট পদ্ধতি/ Depending 
// -----------------------------
const num2 = [40, 100, 1, 5, 25, 10];
num2.sort(function(a, b) {
    return b - a;
});
console.log(num2); // Result: [ 100, 40, 25, 10, 5, 1 ]
