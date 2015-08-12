'use strict';

describe('Service: ProdutoModel', function () {

  // load the service's module
  beforeEach(module('rainhaApp'));

  // instantiate service
  var ProdutoModel;
  beforeEach(inject(function (_ProdutoModel_) {
    ProdutoModel = _ProdutoModel_;
  }));

  it('should do something', function () {
    expect(!!ProdutoModel).toBe(true);
  });

});
