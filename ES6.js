//var: no reason to use
//let: allow to reassign
//const: do not allow to reassign
//default --> if value is not provided, take this as a default.
// function add(num1=0, num2=0) {
//     const result = num1 + num2
//     console.log(num1, num2, result);
//     return result;
// }
// add(2)

// const first = 'Nur'
// const last = 'Nahar'
// const a = 10;
// const b = 10;
// // const result = 'Name: ' + first + ' ' + last + '.' + '\n' + 'Age: ' + (a+b)  //or, easy way
// const result = `Name: ${first} ${last}. \nAge: ${a+b}`;
// console.log(result)
// const blah = 'hi john \n' + 'tomake cena cena lage \n' + 'mara mari korba naki';
// console.log(blah);
// const blah2 = `hi john2
// cena naki ocena
// mair dimu procur
// `

//------  function declaration
// function add(a, b) {
//     return a+b;
// }
// console.log(add(1, 4))
// //-----  function expression
// const add2 = function(a, b) {       //return likhte hoy '{}' use korle
//     return a+b;
// }
// console.log(add2(1,4));
// //-----  arrow function
// const add3 = (a,b) => a+b;     //automatic return kore
// console.log(add3(1,4))
// //   single parameter
// person = {
//     name: 'nur',
//     age: 20
// }
// const add4 = person => person.age;
// console.log(add4(person))
// //  no parameter
// const getPI = () => Math.PI;
// console.log(getPI())

// const max = Math.max(23, 54, 1, 6, 87);
// console.log(max)
// const numbers = [23, 5, 100, 1, 89];
// console.log(Math.max(numbers));
// console.log(numbers)
// console.log(...numbers);
// console.log(Math.max(...numbers))
// //  spread operator to copy
// const nums = [3, 5, 8, 9, 10];
// const nums2 = nums;
// nums2.push(12);
// console.log(nums)
// console.log(nums2)
// const nums3 = [...nums];   //copy korchi
// nums3.push(100);
// console.log(nums3)
// console.log(nums)
// const nums4 = [22, 99, ...nums, 9999];
// console.log(nums4)

//-------   Object and Array Destructure
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         postalCode: "10001"
//     },
//     contactInfo: {
//         email: "john.doe@example.com",
//         phone: "123-456-7890"
//     },
//     occupation: "Software Engineer",
//     married: true
// };
// const phone = person.contactInfo.phone;
// const age = person.age;
// const occupation = person.occupation;
// console.log(phone)
// //if right side is an object, left side must be object as well
// //use property name as a variable that contains the property value
// const {firstName,lastName} = person;
// const {address} = person;
// console.log(firstName)
// console.log(lastName)
// console.log(address)
// const {age: boyosh} = person;
// console.log(boyosh)
// const num = [22, 88, 99];
// const [num1, num2] = num;
// console.log(num1)
// const [x, y] = [33, 44]
// console.log(x)
// function double(a, b) {
//     return [a*2, b*2];
// }
// const [prothom, ditiyo] = double(3, 9);
// console.log(prothom);
// const [n1, ,n3] = [66, 77, 88];
// console.log(n3);
// //  swap
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b)

//----------    Keys, values, entries, delete, seal, freeze
// const glass = {
//     type: "Wine Glass",
//     material: "Glass",
//     capacity: "12 oz",
//     color: "Clear",
//     height: "8 inches",
//     isDishwasherSafe: true,
//     purpose: "For wine",
// }
// console.log(glass)
// console.log(Object.keys(glass))
// console.log(Object.values(glass))
// console.log(Object.entries(glass))
// delete glass.purpose;
// console.log(glass)
// //otherway
// const {purpose, ...glassWithoutPurpose} = glass;
// console.log(glassWithoutPurpose);
// Object.freeze(glass);
// glass.madeIn = 'bangladesh';
// console.log(glass)

const arr = [23, 8, 98, 234];
for(const ar of arr) {
    console.log(ar)
}
const name = 'nur nahar';
for(const n of name) {
    console.log(n)
}
const glass = {
    type: "Wine Glass",
    material: "Glass",
    capacity: "12 oz",
    color: "Clear",
    height: "8 inches",
    isDishwasherSafe: true,
    purpose: "For wine",
}
//** object e for of loop calano jay na. for in loop cole */
for(const key in glass) {
    const value = glass[key]
    console.log(key, value)
}
//anotherway
const keys = Object.keys(glass);
console.log(keys)
for(const key of keys) {
    const value = glass[key]    //key jehetu variable not prorperty, tai [] er moddhe likhte hobe
    console.log(key,value)
}