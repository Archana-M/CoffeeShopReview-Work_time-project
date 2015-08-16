myApp.factory('commentFactory', function($http){

		var factory = { };

		var comments = [ ];

		factory.addComment = function(info, callback){
			console.log('in facto!!', info);

		$http.post('/addComment', info).success(function(output){
			
			callback();

			})
		}

		factory.getComment = function(callback){
			$http.get('/comment').success(function(output){
				// console.log(output);
				comment = output;
				callback(comment);
			})

		}


		factory.addUpvotes = function(topic, callback) {

		      $http.post('/addUpvotes', topic).success(function(){
		        callback();
		      })

		}

		factory.addDownvotes = function(topic, callback) {

			//console.log(topic);

		      $http.post('/addDownvotes', topic).success(function(){
		        callback();
		      })
		      
		}

		return factory;

	});