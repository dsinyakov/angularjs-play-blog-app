'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
    .module('clientApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignupCtrl'
          })
          .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          })
          .when('/addpost', {
            templateUrl: 'views/addpost.html',
            controller: 'AddpostCtrl'
          })
          .when('/viewpost/:postId', {
            templateUrl: 'views/viewpost.html',
            controller: 'ViewpostCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    });
