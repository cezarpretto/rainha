'use strict';

describe('Service: usuarioModel', function () {

  // load the service's module
  beforeEach(module('rainhaApp'));

  // instantiate service
  var usuarioModel;
  beforeEach(inject(function (_usuarioModel_) {
    usuarioModel = _usuarioModel_;
  }));

  it('should do something', function () {
    expect(!!usuarioModel).toBe(true);
  });

});
