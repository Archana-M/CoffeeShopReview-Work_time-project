var mongoose = require('mongoose');
var Discussion = mongoose.model('Discussion');

module.exports = {
	
		show: function(req,res){
			Discussion.find({}, function(err, discussions){
				if(err){
					console.log(err);
				} else{
					res.json(discussions)
				}
			})
			
		},

		insert: function(req,res){
			var discussion = new Discussion({discussion:req.body.discussion, shop_id: req.body.shop_id, user: req.body.user, upvote: 0, downvote: 0});
			discussion.save(function(err, discussions){
				if(err){
					console.log(err);
				} else {
					res.end();
					
				}
			})	
		},

		upvote: function(req, res){
			Discussion.update({_id: req.body.id}, {$inc: {upvote: +1 }}, function(err, votes){
				if(err){
					console.log(err);
				} else {
					res.end();
				}
			})
		},


		downvote: function(req, res){
			Discussion.update({_id: req.body.id}, {$inc: {downvote: -1 }}, function(err, votes) {
				if(err){
					console.log(err);
				} else {
					res.end();
				}

			})
		},

		showid: function(req,res){
			Discussion.find({_id: req.params.id}, function(err, id){
					if(err){
					console.log(err);
				} else{
					//console.log('in server',id);
					res.json(id)

				}

			})
		}

		
}

