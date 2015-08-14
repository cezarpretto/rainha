'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:CadusuarioCtrl
 * @description
 * # CadusuarioCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('CadusuarioCtrl', ['AuthService', '$scope', 'UsuarioService', 'UsuarioModel', 'ModalService', 'growl', function (auth, $scope, usuarioService, usuario, modal, growl) {
    auth.isLoggedIn();
    $scope.usuario = new usuario.Usuario();
    //modal.show('mdNovoUsuario');
    $scope.listaUsuarios = [];
    $scope.edicao = false;

    var getUsuarios = function(){
      usuarioService.getUsuarios().success(function(retorno){
        $scope.listaUsuarios = retorno;
        //console.log(retorno);
      }).error(function(err){
        growl.error(err.message);
        console.error(err);
      });
    };
    getUsuarios();

    $scope.novo = function(){
      $scope.usuario = new usuario.Usuario();
      modal.show('mdNovoUsuario');
      $scope.edicao = false;
    };

    $scope.selecionaUsuario = function(usuario){
      $scope.usuario = usuario;
      $scope.edicao = true;
      modal.show('mdNovoUsuario');
    };

    $scope.salvar = function(){
      if($scope.edicao){
        usuarioService.update($scope.usuario).success(function(retorno){
          growl.success('Edição Concluída', {ttl: 3000});
          $scope.usuario = new usuario.Usuario();
          modal.hide('mdNovoUsuario');
          getUsuarios();
        }).error(function(err){
          console.error(err);
          growl.error(err.message)
        });
      }else{
        $scope.usuario.foto = 'empty';
        usuarioService.insert($scope.usuario).success(function(retorno){
          growl.success('Usuário Cadastrado', {ttl: 3000});
          $scope.usuario = new usuario.Usuario();
          modal.hide('mdNovoUsuario');
          getUsuarios();
        }).error(function(err){
          console.error(err);
          growl.error(err.message)
        });
      }
    };

    $scope.delete = function(idUsuario){
      if(window.confirm('Tem certeza que quer deletar esse usuário?')){
        usuarioService.delete(idUsuario).success(function(){
          growl.success('Usuário deletado!');
          getUsuarios();
        }).error(function(err){
          console.error(err);
          growl.error(err.message);
        });
      }
    };
  }]);
