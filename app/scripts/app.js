'use strict';

/**
 * @ngdoc overview
 * @name dailyWebApp
 * @description
 * # dailyWebApp
 *
 * Main module of the application.
 */
angular
  .module('dailyWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/kakugen', {
        templateUrl: 'views/kakugen.html',
        controller: 'KakugenCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
