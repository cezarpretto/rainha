'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:AppcontrollerCtrl
 * @description
 * # AppcontrollerCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('Appcontroller', ['AuthService', '$scope', function (auth, $scope) {
    $scope.usr = auth;
    $scope.showMenuAdmin = false;
    $scope.$watch('usr.usuarioLogado', function(newValue){
      $scope.usuarioLogado = newValue;
      if(newValue !== null){
        $scope.showMenuAdmin = true;
      }else{
        $scope.showMenuAdmin = false;
      }
    });

    $scope.logout = function(){
      auth.logout();
    };
  }]);
