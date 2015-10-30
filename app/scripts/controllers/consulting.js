'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:ShowcaseCtrl
 * @description
 * # ShowcaseCtrl
 * Controller for the consulting page.
 */
angular.module('websiteApp')
  .controller('ConsultingCtrl', function ($scope) {

    $scope.consultingContentState =  'default';

    //Change the content displayed on the page based on the current key.
    $scope.changeContent = function(key) {
      $scope.consultingContentState = key;
    };

    $scope.scrollToDescription = function() {
      $('html, body').animate({scrollTop: $('.highlight-description').offset().top - 50}, 500);
    };

  });
