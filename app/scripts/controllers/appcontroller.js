'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:AppcontrollerCtrl
 * @description
 * # AppcontrollerCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('Appcontroller', ['AuthService', '$scope', 'CategoriaService', 'ProdutoService', 'ProdutoModel', '$location', function (auth, $scope, categoriaService, produtoService, produto, $location) {
    $scope.usr = auth;
    $scope.showMenuAdmin = false;
    $scope.listaCategorias = [];
    $scope.produtoBusca = new produto.Produto();
    $scope.$watch('usr.usuarioLogado', function(newValue){
      $scope.usuarioLogado = newValue;
      if(newValue !== null){
        $scope.showMenuAdmin = true;
      }else{
        $scope.showMenuAdmin = false;
      }
    });

    var getCategorias = function(){
      categoriaService.getCategorias().success(function(retorno){
        console.log(retorno);
        $scope.listaCategorias = retorno;
      }).error(function(err){
        console.error(err);
      });
    };
    getCategorias();

    $scope.busca = function(){
      $scope.produtoBusca.status = 'descricao';
      produtoService.getProdutos($scope.produtoBusca).success(function(retorno){
        console.log(retorno);
        auth.setBusca(retorno);
        $location.path('/busca');
      }).error(function(err){
        console.error(err);
      });
    };

    $scope.buscaSubcategoria = function(id){
      var p = {idSubcategoria: id, status: 'subcategoria'};
      produtoService.getProdutos(p).success(function(retorno){
        console.log(retorno);
        auth.setBusca(retorno);
        $location.path('/busca');
      }).error(function(err){
        console.error(err);
      });
    };

    $scope.logout = function(){
      auth.logout();
    };
  }]);
