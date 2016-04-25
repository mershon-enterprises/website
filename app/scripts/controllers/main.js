'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, $location) {

    //Tracks which route we're currently on for the "current" page tab in the
    //navbar.
    $scope.routes = {
      'home': false,
      'about': false,
      'consulting': false,
      'products': false
    };

    //The route set to true will have its navbar tab given
    //the "current" class.
    $scope.changeCurrentTab = function() {

      $scope.routes = {
        'home': false,
        'company': false,
        'consulting': false,
        'pricing': false,
        'products': false
      };

      //Set current route based on location.
      switch($location.path()){
        case '/':
          $scope.routes.home = true;
          break;
        case '/company':
          $scope.routes.company = true;
          break;
        case '/consulting':
          $scope.routes.consulting = true;
          break;
        case '/product_hydra':
        case '/product_kernlearn':
        case '/product_whhero':
        case '/products':
          $scope.routes.products = true;
          break;
        case '/pricing':
          $scope.routes.pricing = true;
          break;
        default:
          $scope.routes.home = true;
          break;
      }
    };

    //Animate the page down to the contact form.
    $scope.scrollToContact = function() {
      $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
    };

    $scope.contactInfo = {};

    $scope.contactUs = function() {
      $.ajax({
        method: 'POST',
        url: 'scripts/php/contact.php',
        data: { name: $scope.contactInfo.name,
                company: $scope.contactInfo.company,
                email: $scope.contactInfo.email,
                message: $scope.contactInfo.message
              }
      })
        .done(function() {
          swal('Thank you for contacting us!', 'We\'ll get back to you as soon as possible!', 'success');
        })
        .fail(function() {
          swal('Uh oh! The mail didn\'t send.', 'We\'ll get it fixed as soon as possible!', 'error');
        });
    };

    $scope.$on('$routeChangeSuccess', function() {
      $scope.changeCurrentTab();
    });

  });
