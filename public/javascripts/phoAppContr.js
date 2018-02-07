var app = angular.module('phoApp', ['ngRoute']);

app.controller('reviewController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '',text: '',created_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '',text: '',created_at: ''};
  };

 app.config(function($routeProvider)){
   $routeProvider
    .when('/',{
      templateUrl:'main.html',
      controller: 'reviewController'
    })
    .when('/login',{
      templateUrl:'login.html',
      controller: 'authController'
    })
    .when('/register',{
      templateUrl:'register.html',
      controller: 'authController'
    })
 }
});
