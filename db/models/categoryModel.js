const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  season: String
});

const Category = model('Category', categorySchema);

module.exports = Category;
