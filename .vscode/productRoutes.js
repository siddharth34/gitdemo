const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Product Routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);

module.exports = router;
