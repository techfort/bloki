'use strict';

angular.module('blokiApp')
  .controller('HeaderCtrl', function ($scope, Login) {
    $scope.loggedIn = Login.getStatus;
    $scope.login = function(){
      Login.login();
    };
  });
