const express = require('express');
const app = express();
const port = 3000;

// Dynamic GET route with route parameter
// URL format: /welcome/:username?role=RoleName
app.get('/welcome/:username', (req, res) => {
  // Extract route parameter
  const username = req.params.username;

  // Extract query parameter
  const role = req.query.role || 'Guest'; // Default role is 'Guest' if not provided

  // Send personalized response
  res.send(`Welcome ${username}, your role is ${role}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
