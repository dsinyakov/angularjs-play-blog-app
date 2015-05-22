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
