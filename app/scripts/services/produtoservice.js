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
      return $http.post(ip + 'produtos/insert', produto);
    };

    this.updateProduto = function(produto){
      return $http.post(ip + 'produtos/update', produto);
    };

    this.getCategorias = function(){
      return $http.get(ip + 'categorias');
    };

    this.deleteProduto = function(idProduto){
      return $http.get(ip + 'produtos/delete/' + idProduto);
    };
  }]);
