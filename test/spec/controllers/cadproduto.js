'use strict';

describe('Controller: CadprodutoCtrl', function () {

  // load the controller's module
  beforeEach(module('rainhaApp'));

  var CadprodutoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadprodutoCtrl = $controller('CadprodutoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadprodutoCtrl.awesomeThings.length).toBe(3);
  });
});
