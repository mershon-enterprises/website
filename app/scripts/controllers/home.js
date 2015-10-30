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

    $scope.scrollToFeatures = function() {
      $('html, body').animate({scrollTop: $('ul.special').offset().top - 150}, 500);
    };

    $scope.scrollToDescription = function() {
      $('html, body').animate({scrollTop: $('.highlight-description').offset().top - 150}, 500);
    };

    $('html, body').animate({scrollTop: 0}, 500);

  });
