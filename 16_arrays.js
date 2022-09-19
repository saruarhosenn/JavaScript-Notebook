/*
Arrys:
=======
একটি Arrys একটি একক নামের অধীনে অনেকগুলি মান ধরে রাখতে পারে এবং আপনি একটি সূচক নম্বর উল্লেখ করে মানগুলি অ্যাক্সেস করতে পারেন।
নোটঃ অ্যারে একটি বিশেষ ধরনের বস্তু। জাভাস্ক্রিপ্টে অপারেটর টাইপ অ্যারেগুলির জন্য "অবজেক্ট" প্রদান করে।
*/
const cars = ["Saab", "Volvo", "BMW"];
const output = cars[0];
console.log(cars);
console.log(output);


// Create an Arrys:
// ==================
const createArrys1 = [ 'Saruar', 'Imran', 'Rasel', 'Sojib' ];
const createArrys2 = [];
createArrys1[0] = "Saruar";
createArrys1[1] = "Imran";
createArrys1[2] = "Rasel";
createArrys1[3] = "Sojib";
console.log(createArrys1);
console.log(createArrys2);


// Changing an Arrys elements:
// ============================
const changingArrys = [ 'Saruar', 'Imran', 'Rasel', 'Sojib' ];
changingArrys[0] = "Saruar Hosen";
changingArrys[1] = "Imran Hossen";
changingArrys[2] = "Rasel Mia";
changingArrys[3] = "Sojib Saekar";
console.log(changingArrys);


/*
Arry হলো একটা Objects:
========================
অ্যারে একটি বিশেষ ধরনের বস্তু। জাভাস্ক্রিপ্টে অপারেটর টাইপ অ্যারেগুলির জন্য "অবজেক্ট" প্রদান করে।
*/
const carsArry = ["Saab", "Volvo", "BMW"];
console.log(typeof carsArry); // Result: Data Type Object


/*
Arrys Length:
=============
একটা Arrys এর ভিতরে কতটা আইটেম বা এলিমেন্ট আছে তা দেখার জন্য Length ব্যবহার করা হয়।  
*/
const carsLangth = ["Saab", "Volvo", "BMW"];
console.log(carsLangth.length); // Result: 3 


// এক্সেস লাস্ট Arrys:
// =================
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit); // Result: Mango


// Looping Arrys:
// ==============
const names = [ 'Saruar', 'Imran', 'Rasel', 'Sojib' ];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
};


// Adding Arrys Elements:
// ===================
const friendsName = [ 'Saruar', 'Imran', 'Rasel', 'Sojib' ];
friendsName.push("Insan");
friendsName[friendsName.length] = "Lokman";
console.log(friendsName);


// একটি বস্তু একটি অ্যারে কিনা পরীক্ষা করুনঃ আমরা এটা দুইভাবে পরীক্ষা করতে পারি। 
// =====================================
// (1) Array.isArray
//-----------------------
const myFruits1 = ["Banana", "Orange", "Apple", "Mango"];
let result1 = Array.isArray(myFruits1);
console.log(result1); // Result: true

let text1 = "W3Schools"; 
let result2 = Array.isArray(text1);
console.log(result2); // Result: false


// (2) instanceof
//-----------------------
const myFruits2 = ["Banana", "Orange", "Apple", "Mango"];
let result3 = myFruits2 instanceof Array;
console.log(result3); // Result: true

let text2 = "W3Schools";
let result4 = text2 instanceof Array;
console.log(result4); // Result: false
