'use strict';

describe('Directive: postdiv', function () {

  // load the directive's module
  beforeEach(module('blokiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<postdiv></postdiv>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the postdiv directive');
  }));
});
