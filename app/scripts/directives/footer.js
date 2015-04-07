'use strict';

angular.module('websiteApp')
  .directive('mefooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/footer.html'
  };
});
