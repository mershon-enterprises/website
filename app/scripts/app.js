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
        .when('/company', {
          templateUrl: 'views/company.html',
          controller: 'CompanyCtrl'
        })
        .when('/consulting', {
          templateUrl: 'views/consulting.html',
          controller: 'ConsultingCtrl'
        })
        .when('/pricing', {
          templateUrl: 'views/pricing.html',
          controller: 'PricingCtrl'
        })
        .when('/products', {
          templateUrl: 'views/products.html',
          controller: 'ProductsCtrl'
        })
        .when('/product_hydra', {
          templateUrl: 'views/product_hydra.html',
          controller: 'ProductHydraCtrl'
        })
        .when('/product_kernlearn', {
          templateUrl: 'views/product_kernlearn.html',
          controller: 'ProductKernLearnCtrl'
        })
        .when('/product_whhero', {
          templateUrl: 'views/product_whhero.html',
          controller: 'ProductWHHeroCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
});
