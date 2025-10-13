const express = require("express");
const app = express();
const PORT = 3000;

const productRoutes = require("./routes/productRoutes");

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Product API!");
});

// Use product routes
app.use("/products", productRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
