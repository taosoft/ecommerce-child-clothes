const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ProductSchema } = require('../models/Product.model')
const { UserSchema } = require('./User.model')

const SaleSchema = new mongoose.Schema({
    product: {
        type: [ProductSchema],
        required: true
    },
    user: {
        type: UserSchema,
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
