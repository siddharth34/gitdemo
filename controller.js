// -------- User Controllers --------
exports.getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

exports.addUser = (req, res) => {
  res.send("Adding a new user");
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  res.send(`Fetching user with ID: ${userId}`);
};

// -------- Product Controllers --------
exports.getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

exports.addProduct = (req, res) => {
  res.send("Adding a new product");
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(`Fetching product with ID: ${productId}`);
};

// -------- Cart Controllers --------
exports.getCartForUser = (req, res) => {
  const userId = req.params.userId;
  res.send(`Fetching cart for user with ID: ${userId}`);
};

exports.addProductToCart = (req, res) => {
  const userId = req.params.userId;
  res.send(`Adding product to cart for user with ID: ${userId}`);
};
