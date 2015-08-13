'use strict';

describe('Controller: CadcategoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('rainhaApp'));

  var CadcategoriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadcategoriaCtrl = $controller('CadcategoriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadcategoriaCtrl.awesomeThings.length).toBe(3);
  });
});
