const ProductService = require("../services/product.service");
const StockService = require("../services/stock.service");

_this = this;

exports.getStocks = async (req, res, next) => {
    try {
        await StockService.getStocks((result) => {
            return res.status(200).json({
                data: result,
                message: "Successfully Stocks Received",
            });
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

exports.getStock = async (req, res, next) => {
    try {
        await StockService.getStock(req.params._id, (result) => {
            return res.status(200).json({
                data: result,
                message: "Successfully Stocks Received",
            });
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

exports.createStock = async (req, res, next) => {
    const product = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        imageText: req.body.imageText,
    };
    try {
        const createdProduct = await ProductService.createProduct(product);
        await StockService.createStock(
            createdProduct._id,
            req.body.quantity
        );
        await StockService.getStock(createdProduct._id, (result) => {
            return res.status(201).json({
                data: result,
                message: "Successfully created Product",
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: 500,
            message: "Product Creation was Unsuccessfull",
        });
    }
};

exports.patchProduct = async (req, res, next) => {
    try {
        await ProductService.patchProduct(req.body);
        return res
            .status(200)
            .json({ createdProduct, message: "Successfully patched Product" });
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ status: 500, message: "Product patch was Unsuccessfull" });
    }
};

exports.updateProduct = async (req, res, next) => {
    const product = {
        _id: req.body.product._id,
        title: req.body.product.title,
        description: req.body.product.description,
        price: req.body.product.price,
        image: req.body.product.image,
        imageText: req.body.product.imageText,
    };
    const stock = {
        _id: req.body._id,
        quantity: req.body.quantity,
    };
    try {
        await ProductService.updateProduct(product);
        await StockService.updateStock(stock);
        await StockService.getStock(product._id , (stock) => {
            return res
                .status(200)
                .json({ updatedStock: stock , message: "Successfully updated Product and Stock" }); 
        });
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ status: 500, message: "Product update was Unsuccessfull" });
    }
};

exports.updateOnlyStock = async (req, res, next) => {
    try {
        await StockService.updateOnlyStock(req.params.productId, req.body.quantity);
        await StockService.getStock(req.params.productId , (stock) => {
            return res
                .status(200)
                .json({ updatedStock: stock , message: "Successfully Updated Stock" }); 
        });
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ status: 500, message: "Stock update was Unsuccessfull" });
    }
};