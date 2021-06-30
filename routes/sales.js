const express = require("express");
const router = express.Router();
const SaleController = require("../controllers/sales.controller");
const Authorization = require("../auth/authorization");

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post("/", Authorization, SaleController.createSale);
router.get("/:_id", Authorization, SaleController.getSale);
router.get("/user/:id", Authorization, SaleController.getUserSales);
router.get("/", Authorization, SaleController.getSales);

// Export the Router
module.exports = router;
