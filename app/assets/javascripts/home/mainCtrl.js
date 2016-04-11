angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts',
function($scope,posts){
  $scope.posts = posts.posts;
   
// Add posts with Titles and Links
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  posts.create({
    title: $scope.title,
    link: $scope.link,
  });
  $scope.title = '';
  $scope.link = '';
};

// Increment Upvotes
$scope.incrementUpvotes = function(post) {
  posts.upvote(post);
};
}]);

