// let obj = {
//   name: 'Max'
// }
// let stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// console.log(stringObj);

let personString = '{"name": "Max", "age": 21}'
let person = JSON.parse(personString);
console.log(person.name);
