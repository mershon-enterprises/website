'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $rootScope.routes = {
      'home': false,
      'about': false,
      'showcase': false,
      'blog': false
    };

    $scope.scrollToContact = function() {
      $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
    };

  });
