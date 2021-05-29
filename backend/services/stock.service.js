const Stock = require("../models/Stock.model");

_this = this;

exports.getStocks = () => {
    try {
        return Stock.find({});
        // .populate("product")
        //     .exec((error, result) => {
        //         if (error) {
        //             throw Error(error);
        //         }
        //         return result;
        //     });
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Stocks");
    }
};

exports.getStock = (productId) => {
    try {
        return Stock.find({ product: productId })
            .populate("Product")
            .exec((error, result) => {
                if (error) {
                    throw Error(error);
                }
                return result;
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
        await newStock.save();
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Stock");
    }
};
