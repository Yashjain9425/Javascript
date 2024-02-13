// const dataObject = {
//     name : "John",
//     age : 12,
//     city : "London",
// }
// const json = JSON.stringify(dataObject);
// console.log(json);

const jsonString = '{"name":"John","age":"12","city":"London"}';
const dataObject = JSON.parse(jsonString);
console.log(dataObject);
console.log(typeof dataObject);
