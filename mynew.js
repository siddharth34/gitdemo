const http = require("http");

const server = http.createServer((req, res) => {
  let message;

  // Determine message based on URL
  switch (req.url) {
    case "/":
      message = "Hello World";
      break;
    case "/pizza":
      message = "This is your pizza";
      break;
    case "/home":
      message = "Welcome home";
      break;
    case "/about":
      message = "Welcome to About Us";
      break;
    case "/node":
      message = "Welcome to my Node Js project";
      break;
    default:
      message = "Page Not Found";
  }

  // Set content type to HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send response as an added HTML element
  res.end(`<html>
    <body>
      <h1>${message}</h1>
    </body>
  </html>`);
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
