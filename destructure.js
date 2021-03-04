// :22-9: Destructure ,object, array, destruture complet.....
// destructure:: onekgula data array te othoba object theke kico data shortcut kore ber kora jai..


// // Destructure :coding:
const person = {name: 'sakib', roll: 1, age: 19, job:'facebook', gfName : 'nafisa', email:'sakib@gmail.com', phone: 01921615651 }
const {phone , gfName} = person;
//console.log(phone, gfName);


const friends = ['amir khan','sakib khan', 'sarukh khan', 'asif khan', 'emtiaz khan', 'arukh khan', 'sif khan', 'tiaz khan'];

//const [ttt] = friends;           // first a jei name ase seita dekhabe..
const [ttt, ...bogi] = friends;  // first name sara sob dekhabe...

console.log(bogi);


const complexObject = {
    name: 'abir'
    info: {
        address: 'kolabagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;