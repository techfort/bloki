'use strict';

angular.module('blokiApp')
.controller('PostCtrl',['$scope','$stateParams', 'Post', function ($scope, $stateParams, Post) {

  $scope.getAll = function(){
    Post.getAll(function(data){
      $scope.posts = data.reverse();
    });
  };

  $scope.getAll();
  $scope.$on('$stateChangeSuccess',function(ev, current, prev){
      console.log($stateParams);
    });

}]);