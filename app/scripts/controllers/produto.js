'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:ProdutoCtrl
 * @description
 * # ProdutoCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('ProdutoCtrl', ['$scope', 'AuthService', 'ProdutoService', 'ProdutoModel', '$routeParams', function ($scope, auth, produtoService, produto, $routeParams) {
    $scope.produtoSelecionado = {};
    $scope.imagemSelecionada = {};
    var getProdutos = function(){
      var p = new produto.Produto();
      p.status = 'id',
      p.idProduto = $routeParams.idProduto;
      produtoService.getProdutos(p).success(function(retorno){
        console.log(retorno);
        $scope.produtoSelecionado = retorno[0];
        $scope.imagemSelecionada = $scope.produtoSelecionado.imagens[0];
      }).error(function(err){
        console.error(err);
      });
    };
    getProdutos();

    $scope.selecionaImagem = function(img){
      $scope.imagemSelecionada = img;
    };
  }]);
