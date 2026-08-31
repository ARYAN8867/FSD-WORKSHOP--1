console.log("Start")
setTimeout(() => {
    console.log("SetTime Out")
}, 2000);
const promise = new Promise((resolve) => {
    resolve("Promise Resolved");
});
promise.then((message) => {
    console.log();
});