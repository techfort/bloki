'use strict';

describe('Controller: UploadimageCtrl', function () {

  // load the controller's module
  beforeEach(module('blokiApp'));

  var UploadimageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadimageCtrl = $controller('UploadimageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
