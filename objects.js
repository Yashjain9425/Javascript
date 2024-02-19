// singleton
// Object.create


// object literals

const mySym = Symbol("key1");


const JsUser = {
    name:"Yash",
    "full name": "Yash jain",
    [mySym]: "mykey1",
    age: 20,
    location:"mp",
    email: "yash@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Sun", "Mon", "Tue", "Wed", "Thu"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "yo@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "jhonny@gmail.com";
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
};
JsUser.greetingtwo = function() {
    console.log(`Hello Js User ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
