'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.UsuarioService
 * @description
 * # UsuarioService
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('UsuarioService', ['AuthService', '$http', function (auth, $http) {
    var ip = auth.ip;

    this.getUsuarios = function(){
      return $http.get(ip + 'usuarios/getUsuarios');
    };

    this.insert = function(usuario){
      return $http.post(ip + 'usuarios/insert', usuario);
    };

    this.update = function(usuario){
      return $http.post(ip + 'usuarios/update', usuario);
    };

    this.delete = function(idUsuario){
      return $http.get(ip + 'usuarios/delete/' + idUsuario);
    };

    this.sendMail = function(contato){
      return $http.post(ip + 'sendMail', contato);
    };
  }]);
