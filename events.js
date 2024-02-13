const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("firstevent", (arg1, arg2) => {
  console.log("Event occurred with arguments:", arg1, arg2);
});
// myEmitter.emit('firstevent','Hello','hi');
// myEmitter.emit('firstevent','Hello','hi');

myEmitter.once("firstevent", (arg1, arg2) => {
  console.log("This listener will be executed only once:", arg1, arg2);
});
myEmitter.emit("firstevent", "Hello", "hi");
myEmitter.emit("firstevent", "Hello", "hi");