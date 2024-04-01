const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your model properties here (e.g., name, age)
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
