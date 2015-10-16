'use strict';

/**
 * @ngdoc overview
 * @name gameApp
 * @description
 * # gameApp
 *
 * Main module of the application.
 */
angular.module('gameApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/3x4', {
        templateUrl: 'views/3x4.html'
      })
      .when('/4x4', {
        templateUrl: 'views/4x4.html'
      })
      .when('/4x5', {
        templateUrl: 'views/4x5.html'
      })
      .when('/5x6', {
        templateUrl: 'views/5x6.html'
      })
      .when('/6x6', {
        templateUrl: 'views/6x6.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
