const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    review: [
        {
          reviewText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
          },

          createdAt: {
            type: Date,
            default: Date.now,
          },
        }],
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',

    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;