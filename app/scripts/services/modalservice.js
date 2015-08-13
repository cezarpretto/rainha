'use strict';

/**
 * @ngdoc service
 * @name rainhaApp.ModalService
 * @description
 * # ModalService
 * Service in the rainhaApp.
 */
angular.module('rainhaApp')
  .service('ModalService', function () {
    this.show = function(modalId){
      $('#' + modalId).modal('show');
    };

    this.hide = function(modalId){
      $('#' + modalId).modal('hide');
    };
  });
