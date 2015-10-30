'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller for the about page.
 */
angular.module('websiteApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.changeSkill = function(skill) {
      $scope.skillMode = skill;
    };

    $('html, body').animate({scrollTop: 0}, 500);
  });
