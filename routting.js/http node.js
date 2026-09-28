const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method === 'GET'&& req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end("hoeme page")
    }
    else if(req.method === "POST" && req.url === "/about"){
        res.end("Object Added")
    }
    else{
        res.end("Page Not Found")
    }
})

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})                                   