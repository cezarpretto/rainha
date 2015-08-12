'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.ProdutoModel
 * @description
 * # ProdutoModel
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('ProdutoModel', function () {
    this.Produto = function(){
      this.id = undefined;
      this.nome = undefined;
      this.codigo = undefined;
      this.status = undefined;
      this.descricao = undefined;
      this.imagens = [];
      this.categoria = undefined;
      this.promocao = false;
      this.valor = undefined;
      this.desconto = undefined;
    };

    this.Imagem = function(){
      this.id = undefined;
      this.imagem = undefined;
      this.capa = false;
    };
  });
