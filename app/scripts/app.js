'use strict';

/**
 * @ngdoc overview
 * @name rainhaApp
 * @description
 * # rainhaApp
 *
 * Main module of the application.
 */
angular
  .module('rainhaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'naif.base64',
    'angular-loading-bar',
    'ui.utils.masks',
    'angular-growl'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sobre', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contato', {
        templateUrl: 'views/contato.html',
        controller: 'ContatoCtrl',
        controllerAs: 'contato'
      })
      .when('/produto/:idProduto', {
        templateUrl: 'views/produto.html',
        controller: 'ProdutoCtrl',
        controllerAs: 'produto'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/cadProduto', {
        templateUrl: 'views/cadproduto.html',
        controller: 'CadprodutoCtrl',
        controllerAs: 'cadProduto'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .config(['$httpProvider', function ($httpProvider) {
      //$httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      //$httpProvider.defaults.headers.delete = { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' };
  }]);
