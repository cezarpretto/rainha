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
    console.log($routeParams.idProduto);
    var getProdutos = function(){
      var p = new produto.Produto();
      p.status = 'id',
      p.id = parseInt($routeParams.idProduto);
      p.codigo = null;
      p.descricao = null;
      //var p = {status: 'id', id: parseInt($routeParams.idProduto)};
      console.log(p);
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
