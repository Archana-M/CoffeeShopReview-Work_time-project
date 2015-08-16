////////Creating Customer Factory && Controller////////////////////////
    myApp.controller('usersController', function($scope, userFactory){

        
        userFactory.getUsers(function(data) {
            $scope.users = data;
            //console.log(data);
        });

        $scope.password_error = false;
        
        $scope.addUser = function() {

            if($scope.newUser.password != $scope.newUser.confirm_password){
                $scope.password_error = true;
                return false; 
            } else {
            userFactory.addUser($scope.newUser.first_name);
        }
        }

       }); //End of customer controller