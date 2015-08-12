'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.ProdutoService
 * @description
 * # ProdutoService
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('ProdutoService', ['$http', 'AuthService', function ($http, auth) {
    var ip = auth.ip;
    this.getProdutos = function(produto){
      return $http.post(ip + 'produtos/getProdutos/', produto);
    };

    this.insertProduto = function(produto){
      return $http.post(ip + 'produtos/', produto);
    };

    this.getCategorias = function(){
      return $http.get(ip + 'categorias');
    };

    this.getSubcategorias = function(){

    };
  }]);
