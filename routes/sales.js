const express = require("express");
const router = express.Router();
const SaleController = require("../controllers/sales.controller");

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post("/", SaleController.createSale);
router.get("/:id", SaleController.getSale);
router.get("/", SaleController.getSales);

// Export the Router
module.exports = router;
