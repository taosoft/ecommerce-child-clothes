const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const StockSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

StockSchema.plugin(mongoosePaginate);
const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
