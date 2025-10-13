// app.js
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Routes using Router
router.get('/books', (req, res) => {
  console.log('GET request received for /books');
  res.send('Here is the list of books!');
});

router.post('/books', (req, res) => {
  console.log('POST request received with data:', req.body);
  res.send('Book has been added!');
});

// Use the router
app.use('/', router);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
