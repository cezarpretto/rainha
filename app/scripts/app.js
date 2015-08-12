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
    'ngTouch'
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
      .when('/produto', {
        templateUrl: 'views/produto.html',
        controller: 'ProdutoCtrl',
        controllerAs: 'produto'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
