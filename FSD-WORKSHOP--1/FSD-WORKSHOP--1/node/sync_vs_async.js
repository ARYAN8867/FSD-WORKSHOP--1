console.log("=== synchronous start");

for (let i = 1; i < 10; i++) {
    console.log(i);
}

console.log("=== synchronous end");

console.log("=== asynchronous start");

setTimeout(() => {
    console.log("Hello World");
}, 2000);

console.log("=== asynchronous end");