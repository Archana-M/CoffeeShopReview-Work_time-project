var myApp = angular.module('myApp', ['ngRoute', 'LocalStorageModule'] );

       myApp.config(function ($routeProvider){
           $routeProvider
               .when('/',{
                   templateUrl: 'partials/home.html'
               })

               .when('/partial2',{
                   templateUrl: 'partials/user.html'
               })

               .when('/partial3',{
                   templateUrl: 'partials/locations.html'
               })

               .when('/discussion/:shop_id', {
                  templateUrl: 'partials/discussion.html',
                  controller: 'discussionsController'

               })

               // .when('/discussion/:user_id', {
               //    templateUrl: 'partials/discussion.html',
               //    controller: 'discussionsController'

               // })

               // .when('/partial4', {
               //     templateUrl: 'partials/discussion.html'
               //})

               .otherwise({
                   redirectTo: '/'
               });
       });