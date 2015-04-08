'use strict';

angular.module('websiteApp')
  .directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navbar.html',
    controller: function($scope, $location) {

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

      //Changes the current route with $location and marks the change in the
      //routes object. The route set to true will have its navbar tab given
      //the "current" class.
      $scope.changeRoute = function(key) {
        $scope.routes.home = false;
        $scope.routes.about = false;
        $scope.routes.showcase = false;
        $scope.routes.blog = false;
        $scope.routes[key] = true;
        $location.path('/'+ key);
      };
    }
  };
});
