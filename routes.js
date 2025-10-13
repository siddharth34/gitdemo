const express = require("express");
const router = express.Router();
const controller = require("./controller");

// -------- User Routes --------
router.get("/users", controller.getAllUsers);
router.post("/users", controller.addUser);
router.get("/users/:id", controller.getUserById);

// -------- Product Routes --------
router.get("/products", controller.getAllProducts);
router.post("/products", controller.addProduct);
router.get("/products/:id", controller.getProductById);

// -------- Cart Routes --------
router.get("/cart/:userId", controller.getCartForUser);
router.post("/cart/:userId", controller.addProductToCart);

module.exports = router;
