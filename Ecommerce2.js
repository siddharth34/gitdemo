const express = require("express");
const app = express();
const PORT = 3000;

const routes = require("./routes");

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API!");
});

// Use all routes
app.use("/", routes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
