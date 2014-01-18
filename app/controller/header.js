'use strict';

angular.module('blokiApp')
  .controller('HeaderCtrl', function ($scope, Login) {
    $scope.loggedIn = Login.getStatus;
    $scope.username = undefined;
    $scope.password = undefined;
    $scope.login = function(){
      Login.login();
    };
  });
