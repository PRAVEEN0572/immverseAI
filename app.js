JavaScript

const http = require('http');
cons
res.statusCode = 200;

const server = http.createServer((req, res) => { res.setHeader('Content-Type', 'text/plain'); res.end('Hello World from Node.js!\n');

});

server.listen(3000, () => { console.log('Server running on port 3000');

});
