const mongoose = require('mongoose');

const { Schema } = mongoose;

const historySchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const History = mongoose.model('History', historySchema);

module.exports = History;
