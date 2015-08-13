'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:CadsubcategoriaCtrl
 * @description
 * # CadsubcategoriaCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('CadsubcategoriaCtrl', ['AuthService', '$scope', 'growl', 'CategoriaService', 'ProdutoModel', 'ModalService', function (auth, $scope, growl, categoriaService, produto, modal) {
    $scope.idCategoria = '0';
    $scope.subcategoria = new produto.Subcategoria();
    $scope.listaCategorias = [];
    $scope.listaSubcategorias = [];
    $scope.edicao = false;

    var getCategorias = function(){
      categoriaService.getCategorias().success(function(retorno){
        $scope.listaCategorias = retorno;
      }).error(function(err){
        growl.error(err);
        console.error(err);
      });
    };
    getCategorias();

    $scope.getSubcategorias = function(){
      categoriaService.getSubcategorias($scope.idCategoria).success(function(retorno){
        $scope.listaSubcategorias = retorno;
      }).error(function(err){
        growl.error(err);
        console.error(err);
      });
    };

    $scope.salvar = function(){
      if($scope.edicao){
        categoriaService.updateSubcategoria($scope.subcategoria).success(function(retorno){
          growl.success('Edição concluída!', {ttl: 3000});
          modal.hide('mdCadSubcategoria');
          $scope.getSubcategorias();
        }).error(function(err){
          console.error(err);
          growl.error(err);
        });
      }else{
        $scope.subcategoria.idCategoria = parseInt($scope.idCategoria);
        categoriaService.insertSubcategoria($scope.subcategoria).success(function(retorno){
          growl.success('Subcategoria Inserida!', {ttl: 3000});
          modal.hide('mdCadSubcategoria');
          $scope.getSubcategorias();
        }).error(function(err){
          console.error(err);
          growl.error(err);
        });
      }
    };

    $scope.novo = function(){
      $scope.edicao = false;
      $scope.subcategoria = new produto.Subcategoria();
      modal.show('mdCadSubcategoria');
    };

    $scope.deleteSubcategoria = function(idSubcategoria){
      if(window.confirm('Deseja realmente deletar essa subcategoria?')){
        categoriaService.deleteSubcategoria(idSubcategoria).success(function(retorno){
          growl.success('Subcategoria deletada', {ttl: 3000});
          $scope.getSubcategorias();
        }).error(function(err){
          console.error(err);
        });
      }
    };

    $scope.selecionaSubcategoria = function(subcategoria){
      $scope.subcategoria = subcategoria;
      $scope.edicao = true;
      modal.show('mdCadSubcategoria');
    };

    $scope.cancelar = function(){
      $scope.subcategoria = new produto.Subcategoria();
      $scope.edicao = false;
    };
  }]);
