const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        requried: true,
    },
    slug: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.ObjectId,
        ref: "category",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    shipping: {
        type: Boolean,
    }


})
const productModel = mongoose.model('product', productSchema);
module.exports = productModel;