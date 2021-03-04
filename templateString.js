// 22-4:: Template String multi line string..টেমপ্লেট স্ট্রিং মাল্টি লাইনের স্ট্রিং.


// Template string::
const firstName = 'Justin';
const lastName = 'TimberLake';
const fullName = `${firstName} ${lastName} is a good boy.`;
const fullName2 = `${firstName} ${12+20+18} is a good boy.`;  //{} er vetore onek kicoi kora jai. 
console.log(fullName2);



// multi line template:ES6:
const multiline = `I love you
I miss you
I have pure love`
console.log(multiline);

// $ node templateString.js
// I love you
// I miss you
// I have pure love