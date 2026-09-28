import fs from 'fs';
//readable stream
const readStream = fs.createReadStream("intro.txt",)

readStream.on("data",(chunk)=>{
    console.log("Data received")
    console.log("Data:",chunk);

})
//writeable stream
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello world\n");