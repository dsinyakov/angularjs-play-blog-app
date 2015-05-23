////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('MenuCtrl', function ($scope, $http, userService, $location) {
      $scope.user = userService;

      $scope.logout = function() {
        $http.get('/app/logout')
            .success(function(data) {
              if(data.hasOwnProperty('success')) {
                userService.username = '';
                $location.path('/login');
              }
            });
      };

      $scope.$watch('user.username', function (newVal) {
        if(newVal === '') {
          $scope.isLoggedIn = false;
        } else {
          $scope.username = newVal;
          $scope.isLoggedIn = true;
        }
      });
    });
