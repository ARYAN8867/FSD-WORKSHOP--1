console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");

    Promise.resolve().then(() => {
        console.log("Promise inside Timeout 1");

        setTimeout(() => {
            console.log("Timeout 3");
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");

    Promise.resolve().then(() => {
        console.log("Promise 2");
    });
});

setTimeout(() => {
    console.log("Timeout 2");

    Promise.resolve().then(() => {
        console.log("Promise inside Timeout 2");
    });
}, 0);

console.log("End");