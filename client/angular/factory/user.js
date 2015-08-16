  myApp.factory('userFactory', function($http) {
        var factory = {};
        //PARIECE DID THIS
        var person;
        var users = [];

        factory.getPerson = function(callback) {
            callback(person);
        }

        factory.getUsers = function(callback) {
            $http.get('/users').success(function(output) {
                users = output;
                callback(users);
            })
        }
        
        factory.addUser = function(name) {
            person = name;
            // console.log(person);
        }

        factory.getUserid = function(user_id, callback){
            // url = '/id/' + name_id
            //console.log('in factory', id);
            $http.get('/userid/' + user_id).success(function(output){
                //console.log("output");
                user_id = output;
                callback(user_id);
            })
        }

        return factory;
    }); //Ends Factory