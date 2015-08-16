var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  comment: String,
  discussion_id: String,
  upvote: Number,
  downvote: Number,
  user: String

});

mongoose.model('Comment', CommentSchema);