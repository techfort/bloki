'use strict';

angular.module('blokiApp')
  .controller('UploadImageCtrl', function ($scope, Uploader) {
    $scope.perc = Uploader.getPercentage();
    $scope.upload = Uploader.uploadFile;
  });
