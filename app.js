const http = require('http');
const handleRequest = require('./route'); // import route

const server = http.createServer(handleRequest);

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
