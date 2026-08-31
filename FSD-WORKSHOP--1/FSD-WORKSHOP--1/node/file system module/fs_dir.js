import fs from "fs"
//create the directory
fs.mkdir("./my folder",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Directory created successfully");
    fs.writeFile("script.js", "Hello World", (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File created successfully");
    })
    fs.readdir("./my folder",err=>{
        if(err){       
            console.log(err);
            return;
        }
        console.log("Files:",files);     

})

})