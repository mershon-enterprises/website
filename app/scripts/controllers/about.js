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

    //Query for all the github users.
    GithubService.queryUsers().then(
      function(success) {
        //parse them into an ojbect instead of an array.
        $scope.githubUserInfo = {};
        $.each(success, function(index, value) {
          if (value.login) {
            var tempObject = {};
            tempObject[value.login] = value;
            $.extend($scope.githubUserInfo, tempObject);
          }
        });
        console.log($scope.githubUserInfo);
      },
      function(error) {
        console.log(error);
      });

    $scope.changeSkill = function(skill) {
      $scope.skillMode = skill;
    };

  });
