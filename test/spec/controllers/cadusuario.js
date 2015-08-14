'use strict';

describe('Controller: CadusuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('rainhaApp'));

  var CadusuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadusuarioCtrl = $controller('CadusuarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadusuarioCtrl.awesomeThings.length).toBe(3);
  });
});
