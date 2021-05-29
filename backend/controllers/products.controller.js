const ProductService = require("../services/product.service");

_this = this;

exports.getProducts = async (req, res, next) => {
    try {
        const products = await ProductService.getProducts();
        return res.status(200).json({
            status: 200,
            data: products,
            message: "Successfully Products Received",
        });
    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }
};

exports.getProduct = async (req, res, next) => {
    try {
        const product = await ProductService.getProduct(req.params._id);
        return res.status(200).json({
            status: 200,
            data: product,
            message: "Successfully Product Received",
        });
    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }
};

exports.createProduct = async (req, res, next) => {
    const product = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        imageText: req.body.imageText
    };
    try {
        const createdProduct = await ProductService.createProduct(product);
        return res
            .status(201)
            .json({ createdProduct, message: "Successfully created Product" });
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({
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
        imageText: req.body.imageText
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
        return res
            .status(500)
            .json({
                status: 500,
                message: "Product deletion was Unsuccessfull",
            });
    }
};
