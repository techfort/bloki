'use strict';

angular.module('blokiApp')
  .controller('UploadImageCtrl', function ($scope, $log, Uploader) {

    $scope.perc = Uploader.getPercentage();
    
    $scope.lastUrl = Uploader.getUrl();

    $scope.upload = function(elem){
      Uploader.uploadFile(elem);    
    };

    $scope.$on('updateUrl',function(){
      $scope.perc = Uploader.getPercentage();
      $scope.lastUrl = Uploader.getUrl();
      $scope.$apply();
    });

    $scope.$watch('lastUrl',function(v){
      $log.log('value changed to ' + v);
    })
  });
