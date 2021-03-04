// 22-5:: Arrow function, multiple parameter function...তীর ফাংশন, একাধিক পরামিতি ফাংশন.

 // normal function::

//  function double(sum) {
//      return sum * 2;   
//  }
//  const result = double(5);
//  console.log(result);




//variable function :

// const double = function myFun(num) {
//     return num * 2;   
// }
// const result = double(5);
// console.log(result);




// ES6 short version arrow/=> function:single parameter:

// const double = num => num * 2;  // num => num * 2; ..as like .. function(num) {return num * 2; }  
// const result = double(5);
// console.log(result);




// ES6 short version arrow/=> function:multiple parameter:

const add = (x, y) => x + y;
const result = add(20, 20);
//console.log(result);




// ES6 short version arrow/=> function:without parameter:
const give5 = () => 5;
const result2 = give5();
//console.log(result2);


// ES6 short version arrow/=> function:math korbo:

const math = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const total = math(7, 5);
console.log(total);