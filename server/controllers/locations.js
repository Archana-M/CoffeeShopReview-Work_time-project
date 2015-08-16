var mongoose = require('mongoose');
var Location = mongoose.model('Location');

module.exports = {
	
		show: function(req,res){
			Location.find({}, function(err, locations){
				if(err){
					console.log(err);
				} else{
					res.json(locations)
				}
			})
			
		},

		showid: function(req,res){
			Location.find({_id: req.params.id}, function(err, id){
					if(err){
					console.log(err);
				} else{
					//console.log('in server',id);
					res.json(id)

				}

			})
		},

		insert: function(req,res){
			var location = new Location(req.body);
			location.save(function(err, locations){
				if(err){
					console.log(err);
				} else {
					res.redirect('/location');
					
				}
			})	
		},

		remove: function(req,res){
			//console.log(req.body);
			Location.remove({_id: req.body._id}, function(err, locations){
				if(err){
					console.log(err);
				} else{
					res.end();
				}

				})
		}

}

