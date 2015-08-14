'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.AuthService
 * @description
 * # AuthService
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('AuthService', ['$http', '$location', function ($http, $location) {
    var self = this;
    this.usuarioLogado = JSON.parse(window.localStorage.getItem('usuarioLogado'));
    this.busca = [];
    this.ip = 'http://192.168.0.15/CoreRI/';
    this.isLoggedIn = function(){
      if(self.usuarioLogado === null){
        $location.path('/login');
      }
    };

    this.setUsuario = function(usuario){
      self.usuarioLogado = usuario;
      window.localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    };

    this.setBusca = function(busca){
      self.busca = busca;
    };

    this.login = function(usuario){
      return $http.post(self.ip + 'usuarios/login', usuario);
    };

    this.logout = function(){
      window.localStorage.setItem('usuarioLogado', JSON.stringify(null));
      self.usuarioLogado = null;
      $location.path('/main');
    };
  }]);
