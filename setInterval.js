// const repeatedFunction =()=>{
//     console.log("Received function executed !");
// };

// const intervalId = setInterval(repeatedFunction, 1000);

const repeatedFunction =()=>{
    console.log("Received function executed !");
};

const intervalId = setInterval(repeatedFunction,1000);
setTimeout(()=>{
    clearInterval(intervalId);
    console.log("Interval stopped.");
}, 5000);