'use strict';

angular.module('blokiApp')
  .controller('HeaderCtrl', function ($scope, Login) {
    $scope.loggedin = Login.getStatus();
    $scope.login = Login.login;

  });
