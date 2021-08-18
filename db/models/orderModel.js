const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
    required: true,
  },
  list: [
    {
      name: String,
      quantity: Number,
      cost: Number,
    },
  ],
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId,
  },

});

const Order = model('Order', orderSchema);

module.exports = Order;
