const express = require("express");
const router = express.Router();
const StockController = require("../controllers/stock.controller");
const Authorization = require("../auth/authorization");

router.get("/", StockController.getStocks);
router.get("/:_id", StockController.getStock);
router.post("/", StockController.createStock);

module.exports = router;
