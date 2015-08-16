var mongoose = require('mongoose');

var DiscussionSchema = new mongoose.Schema({
  discussion: String,
  upvote: Number,
  downvote: Number,
  user: String,
  shop_id: String


});

mongoose.model('Discussion', DiscussionSchema);