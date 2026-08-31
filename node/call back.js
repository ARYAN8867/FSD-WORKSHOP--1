const fs = require("fs");
//1. create the file
fs.writeFile("notes txt","FS module started",
        (err)=> {
        if(err){
            console.log(err);
        return        
    }
    console.log("File created successfully");

});

//2. read the content of the file
fs.readFile("notes.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
});

//3.append file content
fs.appendFile("notes.txt","This is append in the last ",
    (err)=>{
        if (err){
            console.log(err);

        }
        console.log("Data is append successfully");
    });
    //4. delete the file
    fs.rm("notes.txt",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File deleted successfully");
        }
    });