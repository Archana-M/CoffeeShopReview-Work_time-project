myApp.controller('discussionsController', function ($scope,$routeParams, discussionFactory, locationFactory, userFactory, commentFactory){


    discussionFactory.getDiscussions(function(data){
        $scope.discussions = data;

    })

    commentFactory.getComment(function(data){
            $scope.comments = data;
                // console.log(data);
    });
    
    $scope.id = $routeParams.shop_id;

        userFactory.getPerson(function(data){
        $scope.person = data;
                //console.log($scope.person);
                // console.log(data);
    });

    //for comment
       //console.log($scope.id);
        
        locationFactory.location($scope.id, function(data){
        $scope.location = data;


        });

    $scope.addDiscussion = function() {

    $scope.new_discussion.user = $scope.person;

    $scope.new_discussion.shop_id = $scope.id;
        discussionFactory.addDiscussion($scope.new_discussion, function(){

        discussionFactory.getDiscussions(function(data){
    $scope.discussions = data;

        })

            
        });
            
    }

    

    $scope.addUpvote = function(discussion_id){

        var info = {
          id: discussion_id
        };

        discussionFactory.addUpvote(info, function() {
          discussionFactory.getDiscussions(function(data){
              $scope.discussions = data;
            });

        });

    }

    $scope.addDownvote = function(discussion_id){

        var info = {
          id: discussion_id
        };

        

        discussionFactory.addDownvote(info, function() {
          discussionFactory.getDiscussions(function(data){
              $scope.discussions = data;
            });

        });

    }

    $scope.addComment = function(new_comment,discussion_id) {

        new_comment.user = $scope.person

         //console.log(user);

        new_comment.discussion_id = discussion_id;
        

            //console.log('testing in controller', new_comment);


            commentFactory.addComment(new_comment, function(){

                //console.log('in here');
                discussionFactory.getDiscussions(function(data){
        $scope.discussions = data;

    })

            commentFactory.getComment(function(data){
        $scope.comments = data;

            })

                
            });
                
        }


    $scope.addUpvotes = function(comment_id){

        var info = {
          id: comment_id
        };

        
        commentFactory.addUpvotes(info, function() {
          commentFactory.getComment(function(data){
              $scope.comments = data;
            });

        });

    }

    $scope.addDownvotes = function(comment_id){

        var info = {
          id: comment_id
        };

        //console.log(info);

        commentFactory.addDownvotes(info, function() {
          commentFactory.getComment(function(data){
              $scope.comments = data;
            });

        });
    }

 });
