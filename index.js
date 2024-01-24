function example(){
    if(true){
        var examples = "This is function"
        console.log(examples);
    }
    console.log(examples);
} 
example();
console.log(examples);


// for(let i=0;i<5;i++){
//     console.log(i);
// }


// let count = 0;
// while(count<5){
//     console.log(count);
//     count++;
// }


// let count = 0;
// do{
//     console.log(count);
//     count++;
// } while(count<5);


// let person = {name: "John",age: 30,occupation: "developer"};
// for(let key in person){
//     console.log(key+" : "+person[key]);
// }


// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     isElectic:false,
//     start: function(){
//         console.log("Engine Started !");
//     }
// };

// console.log(car.make);
// console.log(car.year);
// car.start();


// function Book(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// let book1 = new Book("The Catcher in the Rye","J.D Salinger",1951);
// let book2 = new Book("The kill a Mockingbird","Harper Lee",1960);
// console.log(book1);


let fruit = ["apple", "orange", "banana", "grape"];

// console.log(fruit[0]);
// console.log(fruit[2]);
// console.log(fruit[3]);

// for(let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

// fruit.push("Kiwi");
// console.log(fruit);

// fruit.unshift("mango");
// console.log(fruit);

// let removedLast = fruit.pop();
// console.log(fruit);
// console.log(removedLast);

// let removedFirst = fruit.shift();
// console.log(fruit);
// console.log(removedFirst);

// let cirtus =fruit.slice(1,3);
// console.log(cirtus);

// let removed = fruit.splice(1,2,"pear","melon");
// console.log(fruit);

// let moreFruits = ["grapefruit","pineapple"];
// let allFruits = fruit.concat(moreFruits);
// console.log(allFruits);


// const multiply = function(a,b) {
//     return a * b;
// };
// const product = multiply(4,6);
// console.log("Function Expression - Product : ", product);

// ARROW FUNCTION

// const subtract = (a,b) => a - b;
// const difference = subtract(8,3);
// console.log("Function Expression - Difference : ", difference);

// try{
//     throw new Error("An error");

// } catch(error){
//     console.log(error.message);

// }finally {
//     console.log("Cleanup Code");
// }
