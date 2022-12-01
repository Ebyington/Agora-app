const mongoose = require('mongoose');

const { Schema } = mongoose;

const productReview = new Schema({
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Int,
        required: true,
        min: 1,
        max: 5
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const Review = mongoose.model('Product', productReview);

module.exports = Review;