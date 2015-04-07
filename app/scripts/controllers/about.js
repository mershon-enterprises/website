'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller for the about page.
 */
angular.module('websiteApp')
  .controller('AboutCtrl', function ($rootScope) {
    $rootScope.routes.home = false;
    $rootScope.routes.about = true;
    $rootScope.routes.showcase = false;
  });
