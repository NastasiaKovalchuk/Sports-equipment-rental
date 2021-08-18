const { Schema, model } = require('mongoose');

const adminSchema = Schema({
  login:  String,
  password: {
    type: String,
    required: true,
  }
});

const adminModel = model('Admin', adminSchema);

module.exports = adminModel;
