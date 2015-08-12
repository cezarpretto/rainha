'use strict';

describe('Service: ProdutoService', function () {

  // load the service's module
  beforeEach(module('rainhaApp'));

  // instantiate service
  var ProdutoService;
  beforeEach(inject(function (_ProdutoService_) {
    ProdutoService = _ProdutoService_;
  }));

  it('should do something', function () {
    expect(!!ProdutoService).toBe(true);
  });

});
