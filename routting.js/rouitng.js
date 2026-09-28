import http from 'http'
import fs from 'fs'

const data = fs.readFileSync('index.html', 'utf-8')
const server = http.createServer((req, res) => {
    console.log("Hello World")
    console.log(req.url)

    if (req.url === "/") {
        res.end(data)
    } 
    else if (req.url === "/about") {
        res.end("Hello from about page")
    } 
    else if (req.url === "/contact") {
        res.end("Contact page")
    } 
    else if (req.url === "/projects") {
        res.end("Projects page")
    } 
    else {
        res.statusCode = 404
        res.end("404 Page Not Found")
    }
})

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})
