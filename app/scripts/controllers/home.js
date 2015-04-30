'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller for the landing home page.
 */
angular.module('websiteApp')
  .controller('HomeCtrl', function ($scope) {

    $scope.homeContentState =  'default';

    //Change the content displayed on the page based on the current key.
    $scope.changeContent = function(key) {
      $scope.homeContentState = key;
    };

  });
