const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products.controller");
const Authorization = require("../auth/authorization");

// Authorize each API with middleware and map to the Controller Functions
router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);
router.put("/", Authorization, ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.patch("/", Authorization, ProductController.patchProduct);

// Export the Router
module.exports = router;
