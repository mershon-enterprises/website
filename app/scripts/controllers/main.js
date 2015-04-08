'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($rootScope) {
    $rootScope.routes = {
      'home': false,
      'about': false,
      'showcase': false,
      'blog': false
    };
  });
