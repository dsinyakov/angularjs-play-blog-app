////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////
'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AlertsCtrl
 * @description
 * # AlertsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AlertsCtrl', function ($scope, alertService) {
      $scope.alerts = alertService.get();
  });
