const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const SaleSchema = new mongoose.Schema({
    cartProducts:
        [
            {
                product: {
                    type: ProductSchema,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                }
            }
        ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    creationDate: {
        type: Date,
        default: new Date(),
    }
});

SaleSchema.plugin(mongoosePaginate);
const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
