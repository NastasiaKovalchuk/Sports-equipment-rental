const { model, Schema } = require('mongoose');

const positionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  fullName: String,
  costday: {
    type: Number,
    required: true,
  },
  costmonth: {
    type: Number,
    required: true,
  },
  category: {
    ref: 'Category',
    type: Schema.Types.ObjectId,
  },
  img: String
});

const Position = model('Position', positionSchema);

module.exports = Position;
