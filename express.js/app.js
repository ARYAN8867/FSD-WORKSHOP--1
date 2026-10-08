import express from 'express'
import fs from 'fs'

const app = express()

const bookData = fs.readFileSync("./data/books.json", "utf-8")
console.log(bookData)

app.get("/api/v1/books", (req, res) => {
    res.status(200).json {(

    )}       
    res.json({
        status: "Success",
        data: {
            books: JSON.parse(bookData)
        }
    })






    app.get("api/v1/books/")
})















app.post("/api/v1/books",(req, res))=>{
       res.send("Post req")
}













