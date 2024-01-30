const delayedfunction = ()=>{
    console.log('delayed function executed');
}; 

console.log("hello world!");
setTimeout(delayedfunction, 5000);
console.log("hello world!");