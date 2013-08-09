'use strict';

angular.module('blokiApp')
  .controller('ViewCtrl', ['$scope','$stateParams', 'Post', function ($scope, $stateParams, Post) {
    $scope.currentPost = {
      title: '',
      date: '',
      content : '__loading ...__'
    };
    $scope.$on('$stateChangeSuccess',function(ev, current, prev){
      console.log($stateParams);
    });

    $scope.get = function(){
      Post.get($stateParams.id, function(post){
        $scope.currentPost = post;
      });
    };

    $scope.get();
    
}]);
