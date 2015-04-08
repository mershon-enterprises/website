'use strict';

angular.module('websiteApp')
  .directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navbar.html',
    controller: function($scope, $location) {

      $scope.routes = {
        'home': false,
        'about': false,
        'showcase': false,
        'blog': false
      };

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
