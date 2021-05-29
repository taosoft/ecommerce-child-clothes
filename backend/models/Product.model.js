const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    imageText: {
        type: String
    },
});

ProductSchema.plugin(mongoosePaginate);

module.exports = {
    ProductModel: mongoose.model("Product", ProductSchema),
    ProductSchema: ProductSchema
};
