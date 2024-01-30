// Synchronous callbackFunction Example

// function parentFunction(name,callback){
//     callback();
//     console.log("hey "+name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfunctions");
// };

// parentFunction("Random String ",randomFunction);



// ASynchronous callbackFunction Example

function parentFunction(name,callback){
    setInterval(callback,1000);
    console.log("hey "+name);
};
// function randomFunction(){
//     console.log("Hey I am callbackfunctions");
// };
parentFunction("Random String ",()=>{console.log("Hey I am callbackfunctions");});
