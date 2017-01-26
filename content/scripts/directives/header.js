'use strict';

angular.module('websiteApp')
  .directive('meheader', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/header.html'
  };
});
