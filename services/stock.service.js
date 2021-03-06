const Stock = require("../models/Stock.model");

_this = this;

exports.getStocks = async (cb) => {
    try {
        return await Stock.find()
            .populate("product")
            .exec((error, result) => {
                if (error) {
                    throw Error("No se puedo obtener los productos");
                }
                cb(result);
            });
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Stocks");
    }
};

exports.getStock = async (productId, cb) => {
    try {
        return await Stock.findOne({ product: productId })
            .populate("product")
            .exec((error, result) => {
                if (error) {
                    throw Error(error);
                }
                cb(result);
            });
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while searching Stock");
    }
};

exports.createStock = async (productId, quantity) => {
    try {
        const newStock = new Stock({
            product: productId,
            quantity: quantity,
        });
        return await newStock.save();
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Stock");
    }
};

exports.updateStock = async (product) => {
    try {
        await Stock.findByIdAndUpdate(product._id, product);
    } catch (e) {
        console.log(e);
        throw Error("Error while updating Product");
    }
};

exports.updateOnlyStock = async (productId, quantity) => {
    try {
        await Stock.findOneAndUpdate( {product: productId}, {$inc: { "quantity": -quantity }});
    } catch (e) {
        console.log(e);
        throw Error("Error while updating Product");
    }
};

exports.deleteStock = async (stockId) => {
    try {
        await Stock.findOneAndDelete({ _id: stockId });
    } catch (e) {
        console.log(e);
        throw Error("Error while deleting Stock");
    }
};