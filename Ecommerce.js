const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// -------- Home Route --------
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API!");
});

// -------- User Routes --------
app.get("/users", (req, res) => {
  res.send("Fetching all users");
});

app.post("/users", (req, res) => {
  res.send("Adding a new user");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Fetching user with ID: ${userId}`);
});

// -------- Product Routes --------
app.get("/products", (req, res) => {
  res.send("Fetching all products");
});

app.post("/products", (req, res) => {
  res.send("Adding a new product");
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Fetching product with ID: ${productId}`);
});

// -------- Cart Routes --------
app.get("/cart/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`Fetching cart for user with ID: ${userId}`);
});

app.post("/cart/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`Adding product to cart for user with ID: ${userId}`);
});

// -------- 404 Handler --------
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// -------- Start Server --------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
