// Gettign the Newly created Mongoose Model we just created
const Sale = require("../models/Sale.model");

// Saving the context of this module inside the _the variable
_this = this;

// Async function to get the User List
exports.getSales = async (cb) => {
    // Try Catch the awaited promise to handle the error
    try {
        return await Sale.find()
        .populate("user")
        .exec((error, result) => {
            if (error) {
                throw Error("No se puedo obtener los productos");
            }
            cb(result);
        });
    } catch (e) {
        // return a Error message describing the reason
        console.log("error services", e);
        throw Error("Error while Paginating Users");
    }
};

exports.getSale = async (saleId) => {
    try {
        return await Sale.findById(saleId);
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while searching Users");
    }
};

exports.getUserSales = async (userId) => {
    try {
        return await Sale.find( {user: userId} );
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while searching Users");
    }
};

exports.createSale = async (sale) => {
    const newSale = new Sale({
        cartProducts: sale.cartProducts,
        user: sale.user,
    });

    try {
        // Saving the Sale
        return await newSale.save();
    } catch (e) {
        // return a Error message describing the reason
        console.log(e);
        throw Error("Error while Creating User");
    }
};
