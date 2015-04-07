'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:ShowcaseCtrl
 * @description
 * # ShowcaseCtrl
 * Controller for the showcase page.
 */
angular.module('websiteApp')
  .controller('ShowcaseCtrl', function ($rootScope) {
    $rootScope.routes.home = false;
    $rootScope.routes.about = false;
    $rootScope.routes.showcase = true;
  });
