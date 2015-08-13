'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:CadcategoriaCtrl
 * @description
 * # CadcategoriaCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('CadcategoriaCtrl', ['$scope', 'AuthService', 'ProdutoService', 'ProdutoModel', 'ModalService', 'CategoriaService', 'growl', function ($scope, auth, produtoService, produto, modal, categoriaService, growl) {
    auth.isLoggedIn();
    $scope.categoria = new produto.Categoria();
    //modal.show('mdCadCategoria');
    $scope.listaCategorias = [];
    $scope.edicao = false;

    var getCategorias = function(){
      categoriaService.getCategorias().success(function(retorno){
        $scope.listaCategorias = retorno;
      }).error(function(err){
        console.error(err);
      });
    };
    getCategorias();

    $scope.salvar = function(){
      if($scope.edicao){
        categoriaService.updateCategoria($scope.categoria).success(function(retorno){
          growl.success('Edição concluída!', {ttl: 3000});
          modal.hide('mdCadCategoria');
          getCategorias();
        }).error(function(err){
          console.error(err);
          growl.error(err);
        });
      }else{
        categoriaService.insertCategoria($scope.categoria).success(function(retorno){
          growl.success('Categoria Inserida!', {ttl: 3000});
          modal.hide('mdCadCategoria');
          getCategorias();
        }).error(function(err){
          console.error(err);
          growl.error(err);
        });
      }
    };

    $scope.novo = function(){
      $scope.edicao = false;
      $scope.categoria = new produto.Categoria();
      modal.show('mdCadCategoria');
    };

    $scope.deleteCategoria = function(idCategoria){
      if(window.confirm('Deseja realmente deletar essa categoria?')){
        categoriaService.deleteCategoria(idCategoria).success(function(retorno){
          growl.success('Categoria deletada', {ttl: 3000});
          getCategorias();
        }).error(function(err){
          console.error(err);
        });
      }
    };

    $scope.selecionaCategoria = function(categoria){
      $scope.categoria = categoria;
      $scope.edicao = true;
      modal.show('mdCadCategoria');
    };

    $scope.cancelar = function(){
      $scope.categoria = new produto.Categoria();
      $scope.edicao = false;
    };
  }]);
