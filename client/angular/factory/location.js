myApp.factory('locationFactory', function($http){

		var factory = { };

		var location = [ ];

		factory.addLocation = function(info, callback){

		$http.post('/addlocation', info).success(function(output){
			location = output;
			callback(location);

			})
		}

		factory.getLocations = function(callback){
			$http.get('/location').success(function(output){
				// console.log(output);
				location = output;
				callback(location);
			})

		}

		factory.location = function(id, callback){
			// url = '/id/' + name_id
			//console.log('in factory', id);
			$http.get('/id/' + id).success(function(output){
				//console.log("output");
				id = output;
				callback(id);
			})
		}

		factory.removeLocation = function(location, callback){
			//console.log(location);
			$http.post('/removeLocation', location).success(function(output){

				callback();
			});
		}


		return factory;

	});