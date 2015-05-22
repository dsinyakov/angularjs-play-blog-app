'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('DashboardCtrl', function ($scope, $log, $http, alertService, $location) {

      $scope.loadPosts = function() {
        $http.get('/app/userposts')
            .error(function(data, status) {
              if(status === 401) {
                $location.path('/login');
              } else {
                alertService.add('danger', data.error.message);
              }
            })
            .success(function(data) {
              $scope.posts = data;
            });
      };

      $scope.loadPosts();
    });
