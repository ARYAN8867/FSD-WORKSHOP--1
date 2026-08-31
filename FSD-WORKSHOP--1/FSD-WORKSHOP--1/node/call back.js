setTimeout(() => {
    console.log("Database connected");
}, 2);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});
