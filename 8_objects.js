/*
Object:
=========
আমরা চাইলে একটা Object এ Arry এবং Function লিখতে পারি।

নোটঃ ২টা Object কে কখনো ডাবল বা থ্রী একুয়াল (== or ===) দিয়ে কম্পেয়ার করা যাইনা। তাদেরকে কম্পেয়ার করলে false দেখাবে।
*/

const myDetails = {
  name: "Saruar Hosen",
  adress: "sylhet",
  village: "Kalipur",
  phone: "01750543533",
  brother: ["Gelman", "Rony"],
  myFunc: function (text = "My big brother") {
    console.log(text + " " + myDetails.brother[0]);
  }, 
};
myDetails.myFunc("My big brother");

/*
আমরা ২ ভাবে Object থেকে আইটেম এক্সেস, নতুন করে আইটেম এড এবং আইটেম ভ্যালু পরিবর্তন করতে পারি। যেমনঃ
*/

// (i) ডট নোটেশন পদ্ধতিঃ
// ========================================================
// আইটেম এক্সেস
const output1 = myDetails.name;
console.log(output1);
// নতুন আইটেম এড
myDetails.friend = ["Imran", "Sojib", "Rasel", "Doyal"];
// আইটেম ভ্যালু পরিবর্তন
myDetails.adress = "Sunamganj";


// (ii) ব্র্যাকেটস নোটেশন পদ্ধতিঃ
// ========================================================
// আইটেম এক্সেস
const output2 = myDetails["adress"];
console.log(output2);
// নতুন আইটেম এড
myDetails["profession"] = "Freelancer";
// আইটেম ভ্যালু পরিবর্তন
myDetails["phone"] = "01601406212";
// আইটেম ভ্যালু পরিবর্তন
const villageName = "village";
myDetails[villageName] = "Lombabak, Kalipur";
console.log(myDetails[villageName]);
