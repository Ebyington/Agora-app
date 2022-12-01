const mongoose = require('mongoose');

const { Schema } = mongoose;

const productReview = new Schema({
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

const Review = mongoose.model('Review', productReview);

module.exports = Review;