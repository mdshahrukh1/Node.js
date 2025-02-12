const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'content-type':'text/html'});
    // res.writeHead(200,{'content-type':'text/plain'});
    res.write('<h1>Welcome to the world of Node Server<h1>');
    res.write('<hr><h3>Node JS Server<h3>');
    res.end();//Last line od f response
});

server.listen(5000, () =>{
    console.log('Server is listening to PORt No 5000');
});

//my SQL port - 3306 default
//MongoDb Port - 27017 default