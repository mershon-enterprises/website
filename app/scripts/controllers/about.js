'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller for the about page.
 */
angular.module('websiteApp')
  .controller('AboutCtrl', function ($rootScope, $http) {

    $http.get($rootScope.githubAPI + '/users/devleorepo').
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    console.log('Success!');
    console.log(data);
    console.log(status);
    console.log(headers);
    console.log(config);
    }).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Error!');
    console.log(data);
    console.log(status);
    console.log(headers);
    console.log(config);
    });

  });
