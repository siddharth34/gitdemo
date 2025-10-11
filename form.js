const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <form action="/submit" method="POST">
        <input type="text" name="data" placeholder="Enter text" />
        <button type="submit">Add</button>
      </form>
    `);
  } 
  else if (req.url === '/submit') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const text = new URLSearchParams(body).get('data');
      fs.writeFileSync('output.txt', text);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  } 
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
