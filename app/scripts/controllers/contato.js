'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:ContatoCtrl
 * @description
 * # ContatoCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('ContatoCtrl', ['$scope', 'UsuarioModel', 'UsuarioService', 'growl', function ($scope, usuario, usuarioService, growl) {
    $scope.contato = new usuario.Contato();
    //console.log($scope.contato);
    $scope.sendMail = function(){
      usuarioService.sendMail($scope.contato).success(function(){
        growl.success('Email enviado. Obrigado!', {ttl: 5000});
        $scope.contato = new usuario.Contato();
      }).error(function(err){
        console.error(err);
        growl.error(err.message);
      });
    };
  }]);
