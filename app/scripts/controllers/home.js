'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller for the landing home page.
 */
angular.module('websiteApp')
  .controller('HomeCtrl', function ($scope) {

    //Content to be displayed on mouseover when the user browses the MEC
    //features on the home page.
    $scope.featureContent = {
      'default' : {
        'header' : 'Developing the Modern Web',
        'tagline' : 'Customers expect perfection from their apps. We can provide that.',
        'content' : 'We are a modern company, prepared for the modern web. Websites aren\'t just about hosting information and pictures anymore. They\'re full-on applications that must respond to the user\'s every touch, gesture and command all while keeping personal information secure and being invincible to virtually any disaster.'
      },
      'modern' : {
        'header' : 'Modern Coding Standards',
        'tagline' : 'Don\'t get sold something out of date',
        'content' : 'Our industry evolves and changes faster than any other. New technologies appear and vanish almost weekly and the complexity of web-development is always growing. We use modern tools and best practices to make code maintainable, ensuring you\'re never stuck with a mess.'
      },
      'mobile' : {
        'header' : 'Mobile-Ready Templates',
        'tagline' : 'Your app should look perfect on every device',
        'content' : 'Customers are free to take the web with them. And now it\'s common to expect them to see your product on screens as large as a wall and as small as a wristwatch. Your web application should be aware of how it\'s being seen and adjust, looking perfect on monitors, tablets and mobile phones.'
      },
      'security' : {
        'header' : 'Security-First Design',
        'tagline' : 'Don\'t lose their trust',
        'content' : 'A modern web application needs to know its customers to serve them best. This knowledge is intimate and personal, losing it means losing the customer and we\'ll do our best to ensure that does not happen. We will even work your existing security infrastructure if you\'ve already invested.',
      },
      'cloud' : {
        'header' : 'Distributed Solutions in the Cloud',
        'tagline' : 'Powerful and Everywhere',
        'content' : 'Applications that become part of a customer\'s life don\'t just run from one place. They run in tandem with other applications all over the web. Running in the cloud makes your application resilient and prevasive all without the enormous costs of "doing it yourself".'
      }
    };

    //Set the view to the default content.
    $scope.header = $scope.featureContent.default.header;
    $scope.tagline = $scope.featureContent.default.tagline;
    $scope.content = $scope.featureContent.default.content;

    //Change the content displayed on the page based on the current key.
    $scope.changeContent = function(key) {
      $scope.header = $scope.featureContent[key].header;
      $scope.tagline = $scope.featureContent[key].tagline;
      $scope.content = $scope.featureContent[key].content;
    };

  });
