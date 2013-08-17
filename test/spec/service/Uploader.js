'use strict';

describe('Service: Uploader', function () {

  // load the service's module
  beforeEach(module('blokiApp'));

  // instantiate service
  var Uploader;
  beforeEach(inject(function (_Uploader_) {
    Uploader = _Uploader_;
  }));

  it('should do something', function () {
    expect(!!Uploader).toBe(true);
  });

});
