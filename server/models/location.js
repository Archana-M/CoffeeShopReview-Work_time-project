var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  rating: Number,
  wifi: Number,
  noiselevel: String,
  location: String,
  date: String,
  time: String
});

mongoose.model('Location', LocationSchema);