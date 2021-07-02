const express = require("express");
const router = express.Router();
const StockController = require("../controllers/stock.controller");
const Authorization = require("../auth/authorization");

router.get("/", StockController.getStocks);
router.get("/:_id", StockController.getStock);
router.post("/", Authorization, StockController.createStock);
router.put("/:productId", Authorization, StockController.updateOnlyStock);
router.put("/", Authorization, StockController.updateProduct);

module.exports = router;
