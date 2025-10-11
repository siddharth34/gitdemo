const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Read existing messages
    let messages = '';
    if (fs.existsSync('messages.txt')) {
      messages = fs.readFileSync('messages.txt', 'utf8');
      // Show latest message on top
      messages = messages.split('\n').reverse().join('<br>');
    }

    // Show messages and form
    res.end(`
      <h2>Messages:</h2>
      ${messages || '<p>No messages yet.</p>'}
      <form action="/submit" method="POST">
        <input type="text" name="data" placeholder="Enter message" required />
        <button type="submit">Add</button>
      </form>
    `);
  } 
  else if (req.url === '/submit') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const text = new URLSearchParams(body).get('data');
      fs.appendFileSync('messages.txt', text + '\n'); // add new message
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
