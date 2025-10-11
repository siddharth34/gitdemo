const fs = require('fs');

function handleRequest(req, res) {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let messages = '';
    if (fs.existsSync('messages.txt')) {
      messages = fs.readFileSync('messages.txt', 'utf8');
      messages = messages.split('\n').reverse().join('<br>');
    }

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
      fs.appendFileSync('messages.txt', text + '\n');
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  } 
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
}

module.exports = handleRequest; 
