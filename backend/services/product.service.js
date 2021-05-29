const Product = require("../models/Product.model");

_this = this;

exports.getProducts = async () => {
    try {
        const products = await Product.find({});
        return products;
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Products");
    }
};

exports.getProduct = async (productId) => {
    try {
        const product = await Product.findById(productId);
        return product;
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while searching products");
    }
};

exports.createProduct = async (product) => {
    const newProduct = new Product({
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        imageText: productImageText
    });

    try {
        await newProduct.save();
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Product");
    }
};

exports.patchProduct = async (product) => {
    try {
        await Product.findByIdAndUpdate(product._id, product);
    } catch (e) {
        console.log(e);
        throw Error("Error while updating Product");
    }
};

exports.updateProduct = async (product) => {
    try {
        await Product.findByIdAndUpdate(product._id, product);
    } catch (e) {
        console.log(e);
        throw Error("Error while updating Product");
    }
};

exports.deleteProduct = async (productId) => {
    try {
        await Product.deleteOne({ _id: productId });
    } catch (e) {
        console.log(e);
        throw Error("Error while deleting Product");
    }
};
