'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:ShowcaseCtrl
 * @description
 * # ShowcaseCtrl
 * Controller for the showcase page.
 */
angular.module('websiteApp')
  .controller('ShowcaseCtrl', function ($scope) {

    $scope.showcaseContentState =  'default';

    //Change the content displayed on the page based on the current key.
    $scope.changeContent = function(key) {
      $scope.showcaseContentState = key;
    };

    $scope.scrollToDescription = function() {
      $('html, body').animate({scrollTop: $('.highlight-description').offset().top - 50}, 500);
    };

  });
