const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String
    },
    description: {
        type: String,
    }, 
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    review: {
        type: Schema.Types.ObjectId,
        ref:'Review',
        required:false
    }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;