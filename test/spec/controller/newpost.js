'use strict';

describe('Controller: NewpostCtrl', function () {

  // load the controller's module
  beforeEach(module('blokiApp'));

  var NewpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpostCtrl = $controller('NewpostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
