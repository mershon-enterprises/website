'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller for the landing home page.
 */
angular.module('websiteApp')
  .controller('BlogCtrl', function ($rootScope) {
    $rootScope.routes.home = false;
    $rootScope.routes.about = false;
    $rootScope.routes.showcase = false;
    $rootScope.routes.blog = true;
  });
