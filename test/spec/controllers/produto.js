'use strict';

describe('Controller: ProdutoCtrl', function () {

  // load the controller's module
  beforeEach(module('rainhaApp'));

  var ProdutoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProdutoCtrl = $controller('ProdutoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProdutoCtrl.awesomeThings.length).toBe(3);
  });
});
