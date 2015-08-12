'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('LoginCtrl', ['$scope', 'AuthService', 'UsuarioModel', '$location', function ($scope, auth, usuarioModel, $location) {
    $scope.usuarioLogar = new usuarioModel.Usuario();

    $scope.logar = function(){
      auth.login($scope.usuarioLogar).success(function(retorno){
        auth.setUsuario(retorno);
        $scope.usuarioLogar = new usuarioModel.Usuario();
        $location.path('/admin');
      }).error(function(err){
        console.error(err);
      });
    };
  }]);
