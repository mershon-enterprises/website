'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, $location, GithubService) {

    //Tell the github service to prepare for api calls.
    GithubService.setup();

    //Tracks which route we're currently on for the "current" page tab in the
      //navbar.
      $scope.routes = {
        'home': false,
        'about': false,
        'showcase': false,
        'blog': false
      };

      //Set current route based on location. Helps tab persist through page
      //refresh.
      switch($location.path()){
        case '/':
          $scope.routes.home = true;
          break;
        case '/about':
          $scope.routes.about = true;
          break;
        case '/showcase':
          $scope.routes.showcase = true;
          break;
        case '/blog':
          $scope.routes.blog = true;
          break;
        default:
          $scope.routes.home = true;
          break;
      }

      //The route set to true will have its navbar tab given
      //the "current" class.
      $scope.changeCurrentTab = function(key) {
        $scope.routes.home = false;
        $scope.routes.about = false;
        $scope.routes.showcase = false;
        $scope.routes.blog = false;
        $scope.routes[key] = true;
      };

      //Animate to the top of the page on every route change.
      $scope.$on('$routeChangeStart', function() {
        $('html, body').animate({scrollTop: $('body').offset().top}, 500);
      });

    //Animate the page down to the contact form.
    $scope.scrollToContact = function() {
      $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
    };

  });
