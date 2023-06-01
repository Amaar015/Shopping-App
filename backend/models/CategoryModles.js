const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        lowercse: true,
    }
})


const categoryModel = mongoose.model('category', categorySchema);
module.exports = categoryModel;