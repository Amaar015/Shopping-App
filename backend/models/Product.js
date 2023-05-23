
const mongoose = require('mongoose');


// const review schema

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true })

const productSchema = mongoose.Schema({
    // create a relation with another model in mongo db
    User: {
        type: mongoose.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        // required: tr
    },
    review: [reviewSchema],
    rating: {
        type: Number,
        required: true
    },
    numReviews: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    countStack: {
        type: Number,
        required: true,
        default: 0.0
    }

})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;