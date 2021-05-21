const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Product  = require('../models/Product.model')
const User = require('./User.model')

const SaleSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    creationDate: {
        type: Date,
        default: new Date()
    },
    quantity: {
        type: Number,
        required: true
    }
});

SaleSchema.plugin(mongoosePaginate);
const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
