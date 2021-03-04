// 22-6:: spread operator , concatenate multiple array .স্প্রেড অপারেটর, একাধিক অ্যারে সংমিশ্রণ..
//three Dots.(...)....
// onekgulow array ke ekta array ropantor korar jonno old version/ES6 er kaz niche dewa holow::

const friendAges = [11, 12, 13, 14,];
const girlFriendAges = [15, 16, 17, 18, 19];
const familyMemberAges = [20, 21, 22, 23, 24, 25, 26,];
// / old version javaScript coding:::
const allAges = friendAges.concat(girlFriendAges).concat([80]).concat(familyMemberAges);
console.log(allAges);
// / ES6 new version array adding code::
const allAges2 = [...friendAges, ...girlFriendAges, 80, ...familyMemberAges];
console.log(allAges2);
/// :: output:: 
// [
//     11, 12, 13, 14, 15, 16, 17,
//     18, 19, 80, 20, 21, 22, 23,
//     24, 25, 26 
//   ]


const business = 650;
const minister = 450;
const sochib = 250;
///const maximum = Math.max (business, minister, sochib); /// javascript oold version..
const takaPoisa = [650, 450, 240, 333, 777, 444, 8888];
const maximum = Math.max(...takaPoisa);    // max value ta show korbe...
console.log(maximum);