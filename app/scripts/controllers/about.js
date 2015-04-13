'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller for the about page.
 */
angular.module('websiteApp')
  .controller('AboutCtrl', function ($rootScope, $scope, GithubService) {

    console.log(GithubService.queryUsers());

  });
