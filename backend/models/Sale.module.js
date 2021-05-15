const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ProductModel = require('../models/Product.model')

const SaleSchema = new mongoose.Schema({
    product: {
        type: [ProductModel.ProductSchema],
        required: true
    },
    user: {
        type: User,
        required: true
    },
    creationDate: {
        type: Date,
        default: new Date()
    }
})

SaleSchema.plugin(mongoosePaginate);
const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;