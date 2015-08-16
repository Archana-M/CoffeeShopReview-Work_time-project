var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {
	
		show: function(req,res){
			Comment.find({}, function(err, comments){
				if(err){
					console.log(err);
				} else{
					res.json(comments)
				}
			})
			
		},

		insert: function(req,res){
			var comment = new Comment({comment:req.body.comment, user: req.body.user, discussion_id: req.body.discussion_id, upvote: 0 , downvote: 0} );
			comment.save(function(err, comments){
				if(err){
					console.log(err);
				} else {
					res.end();
					
				}
			})	
		},

		upvote: function(req, res){
			Comment.update({_id: req.body.id}, {$inc: {upvote: +1 }}, function(err, votes){
				if(err){
					console.log(err);
				} else {
					res.end();
				}
			})
		},


		downvote: function(req, res){
			Comment.update({_id: req.body.id}, {$inc: {downvote: -1 }}, function(err, votes) {
				if(err){
					console.log(err);
				} else {
					res.end();
				}

			})
			//console.log(req.body.id);
		}

}

