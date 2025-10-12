// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a simple route (optional)
app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is up and running on port 3000! Ready to handle requests.");
});
