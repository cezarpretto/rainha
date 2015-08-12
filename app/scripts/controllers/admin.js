'use strict';

/**
 * @ngdoc function
 * @name rainhaApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the rainhaApp
 */
angular.module('rainhaApp')
  .controller('AdminCtrl', ['AuthService', function (auth) {
    auth.isLoggedIn();
  }]);
