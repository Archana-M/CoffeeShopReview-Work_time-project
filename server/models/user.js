// We want to create a file that has the schema for our friends and 
//creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  user_name: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);
