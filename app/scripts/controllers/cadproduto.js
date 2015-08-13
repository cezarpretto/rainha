'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:CadprodutoCtrl
 * @description
 * # CadprodutoCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('CadprodutoCtrl', ['AuthService', '$scope', 'ProdutoModel', 'ProdutoService', 'growl', 'ModalService', 'CategoriaService', function (auth, $scope, produto, produtoService, growl, modal, categoriaService) {
    auth.isLoggedIn();
    //modal.show('mdCadProduto');
    $scope.fotos = {};
    $scope.produto = new produto.Produto();
    $scope.produtoPesquisa = new produto.Produto();
    $scope.listaCategorias = [];
    $scope.listaSubcategorias = [];
    $scope.listaProdutos = [];
    $scope.edicao = false;

    var getCategorias = function(){
      produtoService.getCategorias().success(function(retorno){
        $scope.listaCategorias = retorno;
      }).error(function(err){
        console.error(err);
      });
    };
    getCategorias();

    $scope.selecionaCategoria = function(){
      categoriaService.getSubcategorias($scope.produto.categoria.id).success(function(retorno){
        $scope.listaSubcategorias = retorno;
      }).error(function(err){
        console.error(err);
      });
    };

    /*$scope.selecionaCategoria = function(){
      $scope.listaSubcategorias = $scope.produto.categoria.subcategorias;
    };*/

    $scope.salvar = function(){
      console.log($scope.produto);
      if($scope.edicao){
        produtoService.updateProduto($scope.produto).success(function(retorno){
          $scope.produto = new produto.Produto();
          growl.success('Edição concluída', {ttl: 3000});
          modal.hide('mdCadProduto');
        }).error(function(err){
          console.error(err);
        });
      }else{
        produtoService.insertProduto($scope.produto).success(function(retorno){
          $scope.produto = new produto.Produto();
          growl.success('Produto inserido com sucesso', {ttl: 3000});
          modal.hide('mdCadProduto');
        }).error(function(err){
          console.error(err);
        });
      }
    };

    $scope.deleteProduto = function(idProduto){
      if(window.confirm('Tem certeza que deseja deletar esse produto?')){
        produtoService.deleteProduto(idProduto).success(function(retorno){
          growl.success('Produto deletado!', {ttl: 3000});
          $scope.produtoPesquisa = new produto.Produto();
          $scope.listaProdutos = [];
        }).error(function(err){
          growl.error(err.message);
          console.error(err);
        });
      }
    };

    $scope.pesquisar = function(){
      $scope.produtoPesquisa.status = 'descricao';
      produtoService.getProdutos($scope.produtoPesquisa).success(function(retorno){
        console.log(retorno);
        $scope.listaProdutos = retorno;
      }).error(function(err){
        console.error(err);
        growl.error(err);
      });
    };

    $scope.novo = function(){
      $scope.edicao = false;
      modal.show('mdCadProduto');
      $scope.produto = new produto.Produto();
    };

    $scope.selecionaProduto = function(produto){
      $scope.edicao = true;
      $scope.produto = produto;
      $scope.selecionaCategoria();
      modal.show('mdCadProduto');
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
