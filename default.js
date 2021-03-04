// 22-3:: function default parameter for not provide.. সরবরাহ না করার জন্য ফাংশন ডিফল্ট প্যারামিটার.

function add(num1 , num2 = 20) {  //default parameter // backup 20 rakha hoyese jodi total a num2 er value na dei tahole num2 20 hisebe kaz korbe.
    return num1 + num2;
}
const total = add(15, 1);
console.log(total);