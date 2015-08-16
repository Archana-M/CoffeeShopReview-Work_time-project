myApp.controller('locationsController', function ($scope, locationFactory ){
     	
         	locationFactory.getLocations(function(data){
         		$scope.locations = data;
         		// console.log(data);
         	});

            // $scope.id = $routeParams.shop_id;
            // locationFactory.getId($scope.id, function(data){
            //     $scope.locations = data;

            //     //console.log(data);

            // })


            $scope.addLocation = function(new_location){
                // if(new_location.location == 'sf') {
                //     console.log('san fran');
                // } else {
                //     console.log('san jose');
                // }

                // $scope.new_location = {};
            for(var i = 0; i<$scope.locations.length; i++){
                if($scope.locations[i].name == $scope.new_location.name ){
                    alert('Shop already exisits');
                    return false;
                }

                if($scope.locations[i].time == $scope.new_location.time ){
                    alert('Time already exisits');
                    return false;
                }


            }

        // $scope.length_error = true;
        // $scope.name_error = true;
        // $scope.description_error = true;
        // $scope.success = true;
        //   if($scope.name && $scope.description && $scope.name.length > 5){
        //     var info = {
        //       name: $scope.name,
        //       description: $scope.description
        //     };
        //     $scope.success = false;

            locationFactory.addLocation($scope.new_location, function(data){
             $scope.locations = data;
                 //console.log(data);
             })
             $scope.new_location = { };
       
        }


        $scope.removeLocation = function(location){
            //console.log(location);
            locationFactory.removeLocation(location, function(){

                locationFactory.getLocations(function(data){
                $scope.locations = data;
                //console.log(data);
            })


        })
        }

});

        

     	


