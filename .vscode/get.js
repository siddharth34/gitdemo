const express = require('express');
const path = require('path');
const app = express();

// Define port
const PORT = 3000;

// GET route to serve HTML file
app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
