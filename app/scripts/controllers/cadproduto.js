'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:CadprodutoCtrl
 * @description
 * # CadprodutoCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('CadprodutoCtrl', ['AuthService', '$scope', 'ProdutoModel', 'ProdutoService', function (auth, $scope, produto, produtoService) {
    auth.isLoggedIn();
    $scope.fotos = {};
    $scope.produto = new produto.Produto();
    $scope.listaCategorias = [];
    $scope.listaSubcategorias = [];
    var getCategorias = function(){
      produtoService.getCategorias().success(function(retorno){
        console.log(retorno);
        $scope.listaCategorias = retorno;
      }).error(function(err){
        console.error(err);
      });
    };
    getCategorias();

    $scope.selecionaCategoria = function(){
      $scope.listaSubcategorias = $scope.produto.categoria.subcategorias;
      console.log($scope.listaSubcategorias);
    };

    $scope.salvar = function(){
      console.log($scope.produto);
    };

    $scope.carregar = function(){
      angular.forEach($scope.fotos, function(item){
        var stringImage = 'data:' + item.filetype + ';base64,' + item.base64;
        var img = new produto.Imagem();
        var canvas = document.createElement('canvas');
        canvas.width = 250;
        canvas.height = 250;
        var ctx = canvas.getContext('2d');
        var image = document.createElement('img');
        image.src = stringImage;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        var retorno = canvas.toDataURL();
        //console.log(retorno);
        img.imagem = retorno;
        $scope.produto.imagens.unshift(img);
      });
      $scope.fotos = {};
      //console.log($scope.produto);
    };

    $scope.selecionaCapa = function(imagem){
      angular.forEach($scope.produto.imagens, function(item){
        item.capa = false;
      });
      angular.forEach($scope.produto.imagens, function(item){
        if(item.imagem === imagem.imagem){
          item.capa = true;
        }
      });
    };

    $scope.removeImagem = function(imagem){
      var idx = $scope.produto.imagens.indexOf(imagem);
      $scope.produto.imagens.splice(idx, 1);
    };
  }]);
