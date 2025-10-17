const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Handle POST request from form
app.post('/add-product', (req, res) => {
  const newProduct = req.body;
  console.log('Received product:', newProduct);
  res.json({ message: 'Product added successfully!', product: newProduct });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
