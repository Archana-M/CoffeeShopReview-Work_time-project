// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var User = mongoose.model('User');


//module.exports = {show(), insert()};

module.exports = {

 	show: function(req, res) {
    	User.find({}, function(err, results) {
    		if(err) {
         		console.log(err);
       		} else {
         	res.json(results);
            // res.send(JSON.stringify(results));
       		}
   		})
  	},

    showid: function(req,res){
      User.find({_id: req.params.id}, function(err, id){
          if(err){
          console.log(err);
        } else{
          //console.log('in server',id);
          res.json(id)

        }

      })
    },

	insert: function(req, res) {
    //console.log(req.body);

    var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, user_name: req.body.user_name, email: req.body.email, password: req.body.password});
    //console.log(user);
     user.save(function(err, results) {
      if(err) {
        console.log('oops', err);
      }
      else {
        res.send(JSON.stringify(results)); //json used to bring back data from db
        //console.log(results);
      }
    })
  }

}

  




 //Closes return
//ends exports
