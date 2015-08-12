'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('MainCtrl', ['$scope', 'ProdutoModel', 'ProdutoService', function ($scope, produto, produtoService) {
    $scope.fotos = {};
    $scope.imagens = [];
    $scope.listaProdutos = [];
    $scope.mostra = function(){
      console.log($scope.fotos);
      angular.forEach($scope.fotos, function(item){
        var stringImage = 'data:' + item.filetype + ';base64,' + item.base64;
        var img = new Image();
        $scope.canvas = "<canvas id='pgcanvas' width='400' height='30'  background-color: #F00'/>";
        //var ctx = $scope.canvas.getContext('2d');
        console.log($scope.canvas);
        img.src = stringImage;
      });
    };

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
      })
    };
    getProdutos();
  }]);
