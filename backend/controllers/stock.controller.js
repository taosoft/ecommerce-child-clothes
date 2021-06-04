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
        const createdStock = await StockService.createStock(
            createdProduct._id,
            req.body.quantity
        );
        return res
            .status(201)
            .json({ createdStock, message: "Successfully created Product" });
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
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        imageText: req.body.imageText,
    };
    try {
        await ProductService.updateProduct(product);
        return res
            .status(200)
            .json({ createdProduct, message: "Successfully updated Product" });
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ status: 500, message: "Product update was Unsuccessfull" });
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        await ProductService.deleteProduct(req.body._id);
        return res
            .status(200)
            .json({ createdProduct, message: "Successfully deleted Product" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: 500,
            message: "Product deletion was Unsuccessfull",
        });
    }
};
