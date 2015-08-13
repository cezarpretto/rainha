'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:BuscaCtrl
 * @description
 * # BuscaCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('BuscaCtrl', ['AuthService', '$scope', function (auth, $scope) {
    $scope.auth = auth;
    $scope.resultados = [];

    $scope.$watch('auth.busca', function(newValue){
      $scope.resultados = newValue;
    });
  }]);
