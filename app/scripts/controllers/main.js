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

    //The route set to true will have its navbar tab given
    //the "current" class.
    $scope.changeCurrentTab = function() {

      $scope.routes = {
        'home': false,
        'about': false,
        'showcase': false,
        'blog': false
      };

      //Set current route based on location.
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
    };

    //Animate the page down to the contact form.
    $scope.scrollToContact = function() {
      $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
    };

    //Animate to the top of the main content container on every route change.
    window.firstRoute = true;
    $scope.$on('$routeChangeStart', function() {
      // don't scroll on first page load
      if (window.firstRoute === true) {
        window.firstRoute = false;
        return;
      }
      var scrollToTop = function() {
        var mw = $('#main-wrapper').offset();
        if (mw !== undefined) {
          $('html, body').animate({scrollTop: mw.top});
        } else {
          // wait 50ms and try again
          setTimeout(scrollToTop, 50);
        }
      };

      scrollToTop();
    });

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
        .done(function( msg ) {
          alert('Thank you for contacting us!');
        })
        .fail(function() {
          alert( "Mail failed to send..." );
        });

    };

    $scope.$on('$routeChangeSuccess', function() {
      $scope.changeCurrentTab();
    });

  });
