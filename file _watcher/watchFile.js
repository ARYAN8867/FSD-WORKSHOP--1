import fs from 'fs'

fs.watchFile("notes.txt",(prev, curr)=>{
  //  console.log("previous", prev)
    //console.log("current", curr)
if(prev !== curr){
    console.log("File changed");
    }
});
setTimeout(()=>{
    watcher.unwatchFile()
    console.log("File watching closed ")

    
},5000)