angular.module('articles').controller('ArticlesController',['$scope','$routeParams','$location','Authentication','Articles',
function($scope, $routeParams,$location,Authentication,Articles){
    $scope.authentication= Authentication;


    $scope.create = function(){
      var article = new Articles({
        title: this.title,
        content: this.content
      });

      //send http post to 'api/articles'
      article.$save(function(response){
        $location.path('articles/'+response._id);
      },function(errorResponse){
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function(){
      $scope.articles = Articles.query();
    };

    $scope.findOne= function(){
      $scope.article = Articles.get({
        articleId: $routeParams.articleId
      });
    };

    $scope.update= function(){
      $scope.article.$update(function(){
          $location.path('articles/'+ $scope.article._id);
      }, function(errorResponse){
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.delete = function(article){
      //figure out deleting an article from a list or directly from the article view
      if(article){
        article.$remove(function(){
            for(var i in $scope.articles){
              if($scope.articles[i] === article){
                $scope.articles.splice(i,1);
              }
            }
        });
      }else{
        $scope.article.$remove(function(){
          $location.path('articles');
        })
      }
    };
  }
]);