'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', [
    'ngRoute'    // Basic Angular Routing
  ]).config(function ($routeProvider) {
      //Routes. When user visits various URLs, navigate them to specific views
      //and bring controllers into scope. "loggedInOnly" means the route cannot
      //be visited if the user has no session.
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/showcase', {
          templateUrl: 'views/showcase.html',
          controller: 'ShowcaseCtrl'
        })
        .when('/blog', {
          templateUrl: 'views/blog.html',
          controller: 'BlogCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
});
