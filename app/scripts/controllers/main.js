'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('MainCtrl', ['$scope', 'ProdutoModel', 'ProdutoService', 'CategoriaService', function ($scope, produto, produtoService, categoriaService) {
    $scope.fotos = {};
    $scope.imagens = [];
    $scope.listaProdutos = [];
    $scope.destaques = [];
    var noImage = new produto.NoImage();
    $scope.noImage = noImage.imagem;

    var getProdutos = function(){
      var p = new produto.Produto();
      p.status = null;
      p.codigo = null;
      p.idProduto = null;
      p.descricao = null;
      produtoService.getProdutos(p).success(function(retorno){
        console.log(retorno);
        $scope.listaProdutos = retorno;
      }).error(function(err){
        console.error(err);
      });
    };
    getProdutos();

    var getDestaques = function(){
      var p = new produto.Produto();
      p.status = 'promocao';
      p.promocao = true;
      produtoService.getProdutos(p).success(function(retorno){
        console.log(retorno);
        $scope.destaques = retorno;
      }).error(function(err){
        console.error(err);
      });
    };
    getDestaques();
  }]);
