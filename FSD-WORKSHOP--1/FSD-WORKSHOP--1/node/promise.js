const fetchUserData = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
    if (success){
        resolve({ id: 11, username: "john" });
    } else {
        reject("failed to fetch the user data");

    }
}, 1000);
});
console.log(fetchUserData);
      