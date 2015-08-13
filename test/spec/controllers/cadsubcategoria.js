'use strict';

describe('Controller: CadsubcategoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('rainhaApp'));

  var CadsubcategoriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadsubcategoriaCtrl = $controller('CadsubcategoriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadsubcategoriaCtrl.awesomeThings.length).toBe(3);
  });
});
