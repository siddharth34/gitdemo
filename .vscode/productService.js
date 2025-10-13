// Business logic for Products

const products = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// Get all products
exports.getAllProducts = () => {
  return products;
};

// Get product by ID
exports.getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Add a new product
exports.addProduct = (product) => {
  // Simple mock logic to push product with new id
  const newProduct = {
    id: products.length + 1,
    ...product
  };
  products.push(newProduct);
  return newProduct;
};
