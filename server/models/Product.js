const mongoose = require('mongoose');

const { Schema } = mongoose;

// need to update with image

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1.00
    },
    description: {
        type: String,
    }, 
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;