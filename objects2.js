// const faceUser = new Object();
const faceUser ={};

faceUser.name = "yash";
faceUser.id = "123abc";
faceUser.isloggedin = false;
// console.log(faceUser);

const regularUser = {
    email: "user@example.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "cena",
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};
const obj3 ={5:"a",6:"b"};

// const obj5 ={obj1,obj2,obj3};
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj5 = {...obj1,...obj2,...obj3}; //spread operator
console.log(obj5);
