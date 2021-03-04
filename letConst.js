// 22-2::  let,const,array,declared with const, object......
//const :: eita fixed thakbe kokhonoi er variable change hobe na.

// const hubby = "Elius kanchon";
// hubby = "Omar Farukh";
//console.log(hubby);

// // output::
//// TypeError: Assignment to constant variable.


// //example 2::
// const numbers = [12 , 88];
// numbers[1] = 45;
// numbers.push(12);
//console.log(numbers);



// const numbers = [12 , 88];
// numbers[1] = 45;
// numbers.push(12);
// numbers = ["sunny", "solaiman", "omit hasan" ]       // eita kokhonoi change korte parbona na hoi error asbei
// //console.log(numbers);


 

// let:: hosse eita variable change kora jai..but scope bahire lick hobe..

let patientName = "Rahim khan";
patientName = "Bappy khan";
//console.log(patientName);

let sum = 0;
for (var i = 0; i < 10; i++) {     // ei line a jodi let er poriborte var dei tahole bahir theke i console.log kora jabe .
     sum = sum + i;

    
}
//console.log(i);

let sum = 0;
for (let i = 0; i < 10; i++) {     // ei line a jodi let dile error asbe.
     sum = sum + i;

    
}
//console.log(i);