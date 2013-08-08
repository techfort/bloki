'use strict';

angular.module('blokiApp')
.controller('PostCtrl',['$scope','$http','Post', function ($scope, $http, Post) {

  $scope.getAll = function(){
    Post.getAll(function(data){
      $scope.posts = data.reverse();
    });
  };

  $scope.getAll();

}]);