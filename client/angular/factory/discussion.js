myApp.factory('discussionFactory', function($http){

		var factory = { };

		var discussions;

		factory.addDiscussion = function(info, callback){

		$http.post('/addDiscussion', info).success(function(output){
			
			callback();

			})
		}

		factory.getDiscussions = function(callback){
			//console.log('in factory chillin');
			$http.get('/discussions').success(function(output){
				// console.log(output);
				discussions = output;
				callback(discussions);
			})

		}

		factory.addUpvote = function(topic, callback) {

		      $http.post('/addUpvote', topic).success(function(){
		        callback();
		      })
		}

		factory.addDownvote = function(topic, callback) {

		      $http.post('/addDownvote', topic).success(function(){
		        callback();
		      })
		}


		return factory;

	});