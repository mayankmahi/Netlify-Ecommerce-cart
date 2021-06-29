const express = require("express");

const router = express.Router();

const {
  getAllproducts,
  getProductById,
} = require("../controller/productControllers");

// @desc GET all product from db
// @route GET /api/product
// @access Public

router.get("/", getAllproducts);

// @desc GET a product by ID from db
// @route GET /api/product
// @access Public

router.get("/:id", getProductById);

module.exports = router;
