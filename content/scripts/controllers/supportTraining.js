'use strict';

angular.module('websiteApp')
  .controller('SupportTrainingCtrl', function ($scope) {

    $scope.changeSkill = function(skill) {
      $scope.skillMode = skill;
    };

    $('html, body').animate({scrollTop: 0}, 500);
  });
