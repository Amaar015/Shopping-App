const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({

    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItem: [
        {

            name: {
                type: String,
                required: true
            },
            qty: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: trye
            },
            price: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        }],
    shippingOrder: {

        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
        },
        postalCode: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    Payment: {
        type: String,
        rrequired: true,
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
    },
    textPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    ispaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },

}, { timestamps: true })


const Order = mongoose.model('order', orderSchema);
module.exports = Order;