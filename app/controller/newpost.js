'use strict';

angular.module('blokiApp')
.controller('NewpostCtrl', function ($scope, $location, Post) {
  
  var placeholder = {
    title: '',
    content: 'preview...',
    date : ''
  };
  
  $scope.newpost = placeholder;

  $scope.createPost = function(){
    $scope.newpost.date = new Date();
    Post.insert( $scope.newpost , function(){
      $scope.newpost = placeholder;
      $location.path('/home')
    });
  };

});