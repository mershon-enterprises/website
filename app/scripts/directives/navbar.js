'use strict';

angular.module('websiteApp')
  .directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navbar.html'
  };
});
