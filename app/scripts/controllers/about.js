'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller for the about page.
 */
angular.module('websiteApp')
  .controller('AboutCtrl', function ($scope, GithubService) {

    GithubService.queryUsers().then(
      function(success) {
        $scope.githubUserInfo = success;
        console.log(success);
      },
      function(error) {
        console.log(error);
      });

  });
