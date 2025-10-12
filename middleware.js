const express = require('express');
const app = express();
const port = 3000;

// Custom Middleware Function
function addUser(req, res, next) {
  req.user = "Guest";  // Adding a new property to the req object
  next();              // Call next to move to the next middleware/route handler
}

// Route that uses the middleware
app.get('/welcome', addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);  // Use the value from req.user
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
