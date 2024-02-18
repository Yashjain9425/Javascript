const EventEmitter = require("events");
const myEmitter = new EventEmitter();
// myEmitter.on("firstevent", (arg1, arg2) => {
//   console.log("Event occurred with arguments:", arg1, arg2);
// });
// myEmitter.emit('firstevent','Hello','hi');
// myEmitter.emit('firstevent','Hello','hi');

// myEmitter.once("firstevent", (arg1, arg2) => {
//   console.log("This listener will be executed only once:", arg1, arg2);
// });
// myEmitter.emit("firstevent", "Hello", "hi");
// myEmitter.emit("firstevent", "Hello", "hi");
// myEmitter.emit("firstevent", "Hello", "hi");

const eventHandler = (arg1, arg2) => {
  console.log("Event occurred:", arg1, arg2);
};
myEmitter.on("firstevent", eventHandler);
// for (var i = 0; i < 5; i++) {
//   if (i == 2) {
//     myEmitter.removeListener("firstevent", eventHandler);
//   }
//   myEmitter.emit("firstevent", "Hello", "hi");
// }

for(var i = 0; i < 4; i++) {
    myEmitter.emit("firstevent", "Hello", "hi");
    if(i == 2) {
        myEmitter.removeAllListeners("firstevent");
    }
};