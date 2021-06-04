const { ProductModel } = require("../models/Product.model");

_this = this;

exports.getProducts = async (quantity) => {
    try {
        quantity = quantity ?? 0;
        return await ProductModel.find({}).sort({_id: -1}).limit(quantity);
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Products");
    }
};

exports.getProduct = async (productId) => {
    try {
        const product = await ProductModel.findById(productId);
        return product;
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while searching products");
    }
};

exports.createProduct = async (product) => {
    const newProduct = new ProductModel({
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        imageText: product.ImageText,
    });

    try {
        return await newProduct.save();
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Product");
    }
};

exports.patchProduct = async (product) => {
    try {
        await ProductModel.findByIdAndUpdate(product._id, product);
    } catch (e) {
        console.log(e);
        throw Error("Error while updating Product");
    }
};

exports.updateProduct = async (product) => {
    try {
        await ProductModel.findByIdAndUpdate(product._id, product);
    } catch (e) {
        console.log(e);
        throw Error("Error while updating Product");
    }
};

exports.deleteProduct = async (productId) => {
    try {
        await ProductModel.deleteOne({ _id: productId });
    } catch (e) {
        console.log(e);
        throw Error("Error while deleting Product");
    }
};
