'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller for the landing home page.
 */
angular.module('websiteApp')
  .controller('HomeCtrl', function ($rootScope) {
    $rootScope.routes.home = true;
    $rootScope.routes.about = false;
    $rootScope.routes.showcase = false;
    $rootScope.routes.blog = false;
  });
