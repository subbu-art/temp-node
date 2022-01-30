const http = require('http');

const server = http.createServer((req, res) =>{
if (req.url === '/'){
    res.end('Welcome to outr page');
}
if(req.url === '/about'){
    res.end("This is a test page");
}
res.end(`<h1> Bye </h1>
<a href = "/"> back home </a>`)
})

server.listen(5000)