'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.CategoriaService
 * @description
 * # CategoriaService
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('CategoriaService', ['$http', 'AuthService', function ($http, auth) {
    var ip = auth.ip;
    var self = this;

    this.getCategorias = function(){
      return $http.get(ip + 'categorias');
    };

    this.insertCategoria = function(categoria){
      return $http.post(ip + 'categorias/insert', categoria);
    };

    this.deleteCategoria = function(idCategoria){
      return $http.get(ip + 'categorias/delete/' + idCategoria);
    };

    this.updateCategoria = function(categoria){
      return $http.post(ip + 'categorias/update', categoria);
    };

    this.getSubcategorias = function(idCategoria){
      return $http.get(ip + 'categorias/sub/' + idCategoria);
    };

    this.insertSubcategoria = function(subcategoria){
      return $http.post(ip + 'categorias/sub/insert', subcategoria);
    };

    this.deleteSubcategoria = function(idSubcategoria){
      return $http.get(ip + 'categorias/sub/delete/' + idSubcategoria);
    };

    this.updateSubcategoria = function(subcategoria){
      return $http.post(ip + 'categorias/sub/update', subcategoria);
    };
  }]);
