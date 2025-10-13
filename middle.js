const express = require('express');
const app = express();

// Middleware to log HTTP method and endpoint
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Routes
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Server setup
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
