'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller for the products page.
 */
angular.module('websiteApp')
  .controller('ProductsCtrl', function ($scope) {

    $scope.productsContentState = 'default';

    //Change the content displayed on the page based on the current key.
    $scope.changeContent = function(key) {
      $scope.productsContentState = key;
    };

    $scope.scrollToDescription = function() {
      $('html, body').animate({scrollTop: $('.highlight-description').offset().top - 50}, 500);
    };

    $('html, body').animate({scrollTop: 0}, 500);
  });
