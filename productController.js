const productService = require("../services/productService");

// GET /products
exports.getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

// GET /products/:id
exports.getProductById = (req, res) => {
  const product = productService.getProductById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send(`Product with ID ${req.params.id} not found`);
  }
};

// POST /products
exports.addProduct = (req, res) => {
  const newProduct = productService.addProduct(req.body);
  res.status(201).json(newProduct);
};
