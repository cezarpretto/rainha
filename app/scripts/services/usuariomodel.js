'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.usuarioModel
 * @description
 * # usuarioModel
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('UsuarioModel', function () {
    this.Usuario = function(){
      this.nome = undefined;
      this.username = undefined;
      this.senha = undefined;
      this.foto = undefined;
    };

    this.Contato = function(){
      this.nome = undefined;
      this.email = undefined;
      this.fone = undefined;
      this.mensagem = undefined;
    };
  });
